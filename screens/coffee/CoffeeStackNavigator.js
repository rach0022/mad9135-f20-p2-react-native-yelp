import React from 'react'
import FocusedStatusBar from '../../components/FocusedStatusBar'
import { createStackNavigator } from '@react-navigation/stack'
import CoffeeScreen from './CoffeeScreen'
import { themes } from '../../styles'

const CoffeeStack = createStackNavigator()

export default function CoffeeStackNavigator() {

    // get a reference to the current them, change later to update
    const theme = themes.light

    return (
        <>
            <FocusedStatusBar style="dark" />
            <CoffeeStack.Navigator
                screenOptions={theme.stackOptions}>
                <CoffeeStack.Screen name="Coffee" component={CoffeeScreen} />
            </CoffeeStack.Navigator>
        </>
    )
}
