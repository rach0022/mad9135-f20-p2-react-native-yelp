import React from 'react'
import { View, ActivityIndicator } from 'react-native'
import { themes } from '../styles'

// loading spinner built using an activity indicator
export default function Loader() {

    // change later to a useTheme or something:
    const theme = themes.light

    // return a view with an activity indicator spinning in the middle
    return (
        <View style={{ ...theme.styles.fullscreen, ...theme.styles.flex, ...theme.styles.center }}>
            <ActivityIndicator size="large" color={theme.primaryColor} style={theme.styles.spinner} />
        </View>
    )
}
