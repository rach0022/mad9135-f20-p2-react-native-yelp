import React from 'react'
import FocusedStatusBar from '../../components/FocusedStatusBar'
import { createStackNavigator } from '@react-navigation/stack'
import BakeriesScreen from './BakeriesScreen'
import { themes } from '../../styles'
import VenueDetailsScreen from '../VenueDetailsScreen'

const BakeriesStack = createStackNavigator()

export default function BakeriesStackNavigator() {
    // get a reference to the current them, change later to update
    const theme = themes.light

    return (
        <>
            <FocusedStatusBar style="dark" />
            <BakeriesStack.Navigator
                screenOptions={theme.stackOptions}>
                <BakeriesStack.Screen name="Bakeries" component={BakeriesScreen} />
                <BakeriesStack.Screen name="VenueDetails" component={VenueDetailsScreen} options={{ title: 'Venue' }} />
            </BakeriesStack.Navigator>
        </>
    )
}
