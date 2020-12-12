import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
// import * as Location from 'expo-location'
import { getVenues, getGeolocation, getDeviceLocation } from '../helpers'
import { themes } from '../styles'
import VenueListItem from './VenueListItem';

// based on react native docs: https://reactnative.dev/docs/network
export default function VenueList({ category }) {
    // first lets get our search term based on what the user searched
    // for now will be static but change later
    const [city, setCity] = useState(null)

    // now lets set a container for the buisnesses to display in the flatlist
    // alos using react native lets grab its loading indicator and set up a variable to control it
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    // lets set up a useState function to hold our coordinates from the user, if the user denies position
    // for now just use a default location of kanata, maybe close the app if they dont let you 
    const [location, setLocation] = useState(null)

    // get a reference to the current them, change later to update
    const theme = themes.light

    useEffect(() => {
        getDeviceLocation()
            .then(setCity)
            .catch((error) => console.error(error))
    }, [setCity, getDeviceLocation])

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
    }, [city, setLocation])

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

    // if (data.businesses) {
    //     // console.log(Object.keys(data.businesses[0]), data.businesses)
    // }
    // // console.log(location)

    // using a ternary operator based on the state of is loading we either show the activity indicator 
    // or the flatlist with the data of the food venues
    return (
        <SafeAreaView style={theme.flex} edges={theme.edges}>
            {isLoading
                ? <ActivityIndicator />
                : (
                    <FlatList
                        style={theme.styles.container}
                        data={data?.businesses || { id: 1, title: 'No Results' }}
                        keyExtractor={({ id }) => `${id}`}
                        renderItem={({ item }, index) => {
                            // update to a differtnt component later like venue card
                            return <VenueListItem venue={item} theme={theme} />
                        }}
                    />
                )
            }
        </SafeAreaView>
    )
}