import React from 'react'
import { View, Text } from 'react-native'
import { themes } from '../../styles'
import { SafeAreaView } from 'react-native-safe-area-context'
import VenueList from '../../components/VenueList'

export default function HomeScreen() {
    // get a reference to the current them, change later to update
    const theme = themes.light

    return (
        <SafeAreaView edges={theme.safeAreaEdges}>
            <View>
                <Text>Home Screen - Nearby Food Venues (kanata)</Text>
                <VenueList />
            </View>
        </SafeAreaView>
    )
}
