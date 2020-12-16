import React from 'react'
import FocusedStatusBar from '../../components/FocusedStatusBar'
import { createStackNavigator } from '@react-navigation/stack'
import RestaurantsScreen from './RestaurantsScreen'
import { themes } from '../../styles'
import VenueDetailsScreen from '../VenueDetailsScreen'

const RestaurantsStack = createStackNavigator()

export default function RestaurantsStackNavigator() {
    // get a reference to my current theme chagne later once a provider is set up 
    const theme = themes.light

    return (
        <>
            <FocusedStatusBar style="dark" />
            <RestaurantsStack.Navigator
                screenOptions={theme.stackOptions}>
                <RestaurantsStack.Screen name="Restaurants" component={RestaurantsScreen} />
                <RestaurantsStack.Screen name="VenueDetails" component={VenueDetailsScreen} options={{ title: 'Venue' }} />
            </RestaurantsStack.Navigator>
        </>
    )
}
