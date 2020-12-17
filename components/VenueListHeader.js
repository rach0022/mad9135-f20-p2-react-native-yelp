import React from 'react'
import { View, Text, Button } from 'react-native'

// this is the lsit ehader for the venue list
// using the data given in the prop it will display the number of buisnesses
// as the first item in the lsit
export default function VenueListHeader({ data, category, byline, setter, locator }) {

    // callback function that will set the city based on the devices location
    // which will then trigger a reload of the venue list
    const handleLoadCity = ev => {
        locator()
            .then(setter)
            .catch((error) => console.error(error))
    }

    return (
        <View>
            <Text>{data.length} Nearby {category.charAt(0).toUpperCase() + category.slice(1)} Venue Locations</Text>
            <Text>{byline}</Text>
            <Button onPress={handleLoadCity} title="Refresh" />
        </View>
    )
}
