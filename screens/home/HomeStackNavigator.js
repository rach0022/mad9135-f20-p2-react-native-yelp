import React from 'react'
import FocusedStatusBar from '../../components/FocusedStatusBar'
import { createStackNavigator } from '@react-navigation/stack'
// import HomeScreen from './HomeScreen'
import VenueScreen from '../VenueScreen'
import { themes } from '../../styles'
import VenueDetailsScreen from '../VenueDetailsScreen'

const HomeStack = createStackNavigator()

export default function HomeStackNavigator() {
    // get a reference to the current them, change later to update
    const theme = themes.light

    return (
        <>
            <FocusedStatusBar style="dark" />
            <HomeStack.Navigator
                screenOptions={theme.stackOptions}>
                <HomeStack.Screen name="Nearby" component={VenueScreen} initialParams={{ category: "", byline: "What is there to eat nearby?" }} />
                <HomeStack.Screen name="VenueDetails" component={VenueDetailsScreen} options={{ title: 'Venue' }} />
            </HomeStack.Navigator>
        </>
    )
}
