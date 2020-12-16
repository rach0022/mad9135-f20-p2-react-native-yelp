import React from 'react'
import { View, Text, Button } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { safeAreaEdges } from '../styles'
import VenueDetails from '../components/VenueDetails'

export default function VenueDetailsScreen({ navigation, route }) {
    // first get the id of the venue
    const id = route.params.id

    // this is an example of how I will handle the currently displayed restaurant
    const [val, setVal] = React.useState('')
    React.useEffect(() => {
        setVal('Taco Place')
    }, [])
    console.log(val)

    return (
        <SafeAreaView edges={safeAreaEdges}>
            <View>
                <Text>Details of the Selected Food Venue, ex: ({val})</Text>
                <VenueDetails id={id} />
                <Button title="Back" onPress={navigation.goBack} />
            </View>
        </SafeAreaView>
    )
}
