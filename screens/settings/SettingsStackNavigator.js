import React from 'react'
import FocusedStatusBar from '../../components/FocusedStatusBar'
import { createStackNavigator } from '@react-navigation/stack'
import SettingsScreen from './SettingsScreen'
import { themes } from '../../styles'

const SettingsStack = createStackNavigator()

export default function SettingsStackNavigator() {
    // get a reference to the current them, change later to update
    const theme = themes.light

    return (
        <>
            <FocusedStatusBar style="dark" />
            <SettingsStack.Navigator
                screenOptions={theme.stackOptions}>
                <SettingsStack.Screen name="Settings" component={SettingsScreen} />
            </SettingsStack.Navigator>
        </>
    )
}
