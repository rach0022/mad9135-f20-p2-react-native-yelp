import React from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { safeAreaEdges } from '../styles'

import React from 'react'
import { View, Text } from 'react-native'

export default function FoodVenueDetailsScreen() {
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
                <Button title="Back" onPress={goBack} />
            </View>
        </SafeAreaView>
    )
}
