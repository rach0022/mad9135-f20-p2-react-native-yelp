import React from 'react'
import { View, Text, Button } from 'react-native'

// this is the lsit ehader for the venue list
// using the data given in the prop it will display the number of buisnesses
// as the first item in the lsit
export default function VenueListHeader({ data, category, byline, setter, locator, theme, loader, location }) {

    // callback function that will set the city based on the devices location
    // which will then trigger a reload of the venue list
    const handleLoadCity = ev => {
        // first set the loading to true 
        loader(true)

        // Now using hte locater function we can find the location and set it using
        // the setter function and then catch any errors
        locator()
            .then(setter)
            .catch((error) => console.error(error))
    }

    const label = (category == "") ? ' ' : ` ${category.charAt(0).toUpperCase() + category.slice(1)} `

    return (
        <View>
            <Text>{data.length} Nearby{label}Venue's to {location.address.neighbourhood}</Text>
            <Text>{byline}</Text>
            <View style={theme.styles.button}>
                <Button color={theme.strongTextColor} onPress={handleLoadCity} title="Refresh" />
            </View>
        </View>
    )
}
