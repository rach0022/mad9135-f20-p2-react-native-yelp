import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native'
// import * as Location from 'expo-location'
import { getVenues, getGeolocation } from '../helpers'
import { themes } from '../styles'
import VenueListItem from './VenueListItem'
import EmptyListItem from './EmptyListItem' // used for the empty state of the flat list
import VenueListHeader from './VenueListHeader'
import VenueListFooter from './VenueListFooter'
import Loader from './Loader'

// based on react native docs: https://reactnative.dev/docs/network
export default function VenueList({ category, navigation, city, isLoading, setLoading }) {
    // create a container to hold the data of the buisnessnes returned from the search 
    const [data, setData] = useState([]);
    const [venues, setVenues] = useState([])

    // variable to hold the search
    const [search, setSearch] = useState('')

    // lets set up a useState function to hold our coordinates from the user, if the user denies position
    // for now just use a default location of kanata, maybe close the app if they dont let you 
    const [location, setLocation] = useState(null)

    // get a reference to the current them, change later to update
    const theme = themes.light

    // a use effect hook that will set the venues everytime the data is pulled
    useEffect(() => {
        if (data?.businesses) {
            setVenues(data.businesses.sort(sortBuisnessesByDistance)) // if we have buisnesses lets set the venues
        }
    }, [data, setVenues])

    // useEffect(() => {
    //     getDeviceLocation()
    //         .then(setCity)
    //         .catch((error) => console.error(error))
    // }, [setCity, getDeviceLocation])

    // now using a useEffect hook we can asynchrnously call the location service 
    // and get our coordinates based on our city. need city and setLocation as depandancies
    // as we want it to rerun when the location changes
    useEffect(() => {
        if (city?.coords) {
            getGeolocation(city.coords)
                .then(setLocation)
                .catch((error) => console.error(error))
        }
        // console.log(city, "city")
    }, [city, setLocation, setLoading])

    // using a use effect hook we can fetch the venues whenever the location changes (for now static)
    useEffect(() => {
        // check if the location has a latitude (guarunteed it also has a lon)
        if (location?.lat && location?.lon) {
            getVenues({ coord: location, category: category })
                .then(setData)
                .catch((error) => console.error(error))
                .finally(() => setLoading(false))
        }

        // console.log("location", location)
    }, [location, setData])

    // userEffect hook to filter the results based on the supplied term
    useEffect(() => {
        // every time the search is changed we willset the data to the filtered array
        // where we check every category contained, if the category includes the search term then
        // we return true and it will not be filtered otherwise if the loop ends return false
        if (data?.businesses) {
            setVenues(
                // using the some method I can check if any of the categories has a title that includes the search term
                data.businesses.filter(buisness => buisness.categories.some(cat => cat.title.includes(search)))
                //     {
                //     // console.log("\n\n\n", buisness.categories.forEach(category => {
                //     //     if (category.title.includes(search)) {
                //     //         return true
                //     //     }
                //     //     return false
                //     // }))
                //     // return buisness.categories.forEach(category => {
                //     //     console.log(category.title, search, category.title.includes(search))
                //     //     if (category.title.includes(search)) {
                //     //         return true
                //     //     }
                //     //     return false
                //     // })
                // })
            )
        }


    }, [search, setData])

    //create a function to sort the data (the list of buisnesses) based on the distance from location (property)
    const sortBuisnessesByDistance = (a, b) => a.distance - b.distance

    // create an onPress callback function that will take the user to the venue details page for that selected venue
    // const handleOnPress = ev => {
    //     navigation.navigate('VenueDetailsScreen', {item.id})
    // }

    // if (data.businesses) {
    //     // console.log(Object.keys(data.businesses[0]), data.businesses)
    // }
    // // console.log(location)
    // console.log(data)

    // using a ternary operator based on the state of is loading we either show the activity indicator 
    // or the flatlist with the data of the food venues
    if (!data?.businesses && !isLoading) {
        return null
    }

    return (
        <>
            {isLoading
                ? <Loader />
                : (
                    <FlatList
                        style={{ ...theme.styles.container, paddingTop: 0 }}
                        data={venues || { id: 1, title: 'No Results' }}
                        keyExtractor={({ id }) => `${id}`}
                        ListEmptyComponent={EmptyListItem({ category })}
                        ListHeaderComponent={
                            VenueListHeader({
                                data: venues,
                                category,
                                byline: "Click on any nearby location to see more",
                                theme: theme,
                                location: location,
                                search: search,
                                setSearch: setSearch
                            })
                        }
                        stickyHeaderIndices={[0]}
                        ListFooterComponent={VenueListFooter({ theme })}
                        renderItem={({ item }, index) => {
                            // update to a differtnt component later like venue card
                            return <VenueListItem
                                venue={item}
                                theme={theme}
                                onPress={ev => navigation.navigate('VenueDetails', { id: item.id })}
                            />
                        }}
                    />
                )
            }
        </>
    )
}