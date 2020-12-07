import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, StyleSheet } from 'react-native';
import { getVenues, getGeolocation } from '../helpers'
import { themes } from '../styles'

// based on react native docs: https://reactnative.dev/docs/network
export default function VenueList() {
    // first lets get our search term based on what the user searched
    // for now will be static but change later
    const [city, setCity] = useState('Kanata, ON. CA')

    // get a reference to the current them, change later to update
    const theme = themes.light

    // lets set up a useState function to hold our coordinates from the user
    const [location, setLocation] = useState({
        latitude: 0,
        longitude: 0,
    })

    // now lets set a container for the buisnesses to display in the flatlist
    // alos using react native lets grab its loading indicator and set up a variable to control it
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    // now using a useEffect hook we can asynchrnously call the location service 
    // and get our coordinates based on our city. need city and setLocation as depandancies
    // as we want it to rerun when the location changes
    useEffect(() => {
        getGeolocation.getGeolocation(city).then(setLocation)
    }, [city, setLocation])

    // using a use effect hook we can fetch the venues whenever the location changes (for now static)
    useEffect(() => {
        getVenues.getVenues({ coord: location })
            .then(setData)
            .catch((error) => console.error(error))
            .finally(() => setLoading(false))
    }, [location, setData])

    // console.log("DATA:", data, Object.keys(data), data.businesses)
    if (data.businesses) {
        console.log(Object.keys(data.businesses[0]), data.businesses)
    }
    // console.log(Object.keys(data?.businesses[0] || { key: 1 }))
    // using a ternary operator based on the state of is loading we either show the activity indicator 
    // or the flatlist with the data of the food venues

    return (
        <View style={{ flex: 1, padding: 24 }}>
            {isLoading
                ? <ActivityIndicator />
                : (
                    <FlatList
                        style={theme.styles.container}
                        data={data.businesses}
                        keyExtractor={({ id }) => `${id}`}
                        renderItem={({ item }, index) => {
                            // update to a differtnt component later like venue card
                            return <Text style={{ color: theme.strongTextColor }}>{item.name}, {item.phone}</Text>
                        }}
                    />
                )
            }
        </View>
    )
}