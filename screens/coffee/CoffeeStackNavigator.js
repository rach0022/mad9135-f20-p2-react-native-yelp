import React from 'react'
import FocusedStatusBar from '../../components/FocusedStatusBar'
import { createStackNavigator } from '@react-navigation/stack'
// import CoffeeScreen from './CoffeeScreen'
import VenueScreen from '../VenueScreen'
import { themes } from '../../styles'
import VenueDetailsScreen from '../VenueDetailsScreen'

const CoffeeStack = createStackNavigator()

export default function CoffeeStackNavigator() {

    // get a reference to the current them, change later to update
    const theme = themes.light

    return (
        <>
            <FocusedStatusBar style="dark" />
            <CoffeeStack.Navigator
                screenOptions={theme.stackOptions}>
                <CoffeeStack.Screen name="Coffee" component={VenueScreen} initialParams={{ category: 'coffee', byline: 'coffee coffee' }} />
                <CoffeeStack.Screen name="VenueDetails" component={VenueDetailsScreen} options={{ title: 'Venue' }} />
            </CoffeeStack.Navigator>
        </>
    )
}
