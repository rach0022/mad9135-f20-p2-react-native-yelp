import React, { useState } from 'react'
import { Text } from 'react-native'
import { themes } from '../styles'
import { SafeAreaView } from 'react-native-safe-area-context'
import { getDeviceLocation } from '../helpers'
import VenueList from '../components/VenueList'
import { TouchableOpacity } from 'react-native-gesture-handler'

// will export a cenuescreen component that can be shared amongs the other screeens to reduce
// repeated code, category and byline will be used to display the types of venues listed and byline
// can be used to give a tagline to the page like
export default function VenueScreen({ navigation, route }) {
    // get a reference to the current them, change later to update
    const theme = themes.light

    // first lets get our search term based on what the user searched
    // for now will be static but change later
    const [city, setCity] = useState(null)

    //using react native lets grab its loading indicator and set up a variable to control it
    const [isLoading, setLoading] = useState(false)

    // this is the label if it is an empty string it will become a space
    const label = (route.params.category == "") ? ' ' : ` ${route.params.category.charAt(0).toUpperCase() + route.params.category.slice(1)} `

    // a callback function to handle the load event by the user
    // callback function that will set the city based on the devices location
    // which will then trigger a reload of the venue list
    const handleLoadCity = ev => {
        // first set the loading to true 
        setLoading(true)

        // Now using hte locater function we can find the location and set it using
        // the setter function and then catch any errors
        getDeviceLocation()
            .then(setCity)
            .catch((error) => console.error(error))
    }



    // this will return a safe area view containing the text of the category 
    // and a byline caption title 
    // inside the touchable opacity we can fire a callback function to load the users location
    // and then display the nearby venues and location data from the reverse geocode result in the VenueList
    return (
        <SafeAreaView style={{ ...theme.styles.center, ...theme.styles.container, flex: 1 }}>
            <Text style={theme.styles.headerText}>Nearby{label}venue locations</Text>
            <Text style={theme.styles.byLine}>{route.params.byline}</Text>
            <TouchableOpacity onPress={handleLoadCity} style={theme.styles.button}>
                <Text style={theme.styles.byLine}>Load</Text>
            </TouchableOpacity>
            <VenueList category={route.params.category} navigation={navigation} isLoading={isLoading} setLoading={setLoading} city={city} />
        </SafeAreaView>
    )
}
