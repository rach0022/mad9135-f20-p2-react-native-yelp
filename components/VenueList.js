import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import { getVenues, getGeolocation } from '../helpers'

// based on react native docs: https://reactnative.dev/docs/network
export default function VenueList() {
    // first lets get our search term based on what the user searched
    // for now will be static but change later
    const [city, setCity] = useState('Kanata, ON. CA')

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


    useEffect(() => {
        getVenues.getVenues({ coord: location })
            .then(setData)
            .catch((error) => console.error(error))
            .finally(() => setLoading(false))
    }, [location, setData])

    console.log(Object.keys(data?.businesses[0] || { key: 1 }))
    // using a ternary operator based on the state of is loading we either show the activity indicator 
    // or the flatlist with the data of the food venues
    return (
        <View style={{ flex: 1, padding: 24 }}>
            {isLoading ? <ActivityIndicator /> : (
                <FlatList
                    data={data?.businesses[0]}
                    keyExtractor={({ id }, index) => id}
                    renderItem={({ item }, index) => (
                        // update to a differtnt component later like venue card
                        <Text>{index}: {item.name}, {item.phone}</Text>
                    )}
                />
            )}
        </View>
    )
}