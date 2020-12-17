import React from 'react'
import { Text } from 'react-native'
import { themes } from '../styles'
import { SafeAreaView } from 'react-native-safe-area-context'
import VenueList from '../components/VenueList'

// will export a cenuescreen component that can be shared amongs the other screeens to reduce
// repeated code, category and byline will be used to display the types of venues listed and byline
// can be used to give a tagline to the page like
export default function VenueScreen({ navigation, route }) {
    // get a reference to the current them, change later to update
    const theme = themes.light

    const label = (route.params.category == "") ? ' ' : ` ${route.params.category.charAt(0).toUpperCase() + route.params.category.slice(1)} `

    return (
        <>
            <Text>Nearby{label}venue locations</Text>
            <Text>{route.params.byline}</Text>
            <VenueList category={route.params.category} navigation={navigation} />
        </>
    )
}
