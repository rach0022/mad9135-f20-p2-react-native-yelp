import React from 'react'
import FocusedStatusBar from '../../components/FocusedStatusBar'
import { createStackNavigator } from '@react-navigation/stack'
// import FoodTrucksScreen from './FoodTrucksScreen'
import VenueScreen from '../VenueScreen'
import { themes } from '../../styles'
import VenueDetailsScreen from '../VenueDetailsScreen'

const FoodTrucksStack = createStackNavigator()

export default function FoodTrucksNavigator() {
    // get a reference to the current them, change later to update
    const theme = themes.light

    return (
        <>
            <FocusedStatusBar style="dark" />
            <FoodTrucksStack.Navigator
                screenOptions={theme.stackOptions}>
                <FoodTrucksStack.Screen name="Food Trucks" component={VenueScreen} initialParams={{ category: 'foodtrucks', byline: 'Food on the Go' }} />
                <FoodTrucksStack.Screen name="VenueDetails" component={VenueDetailsScreen} options={{ title: 'Venue' }} />
            </FoodTrucksStack.Navigator>
        </>
    )
}
