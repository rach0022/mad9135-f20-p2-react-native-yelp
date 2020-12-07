/* /styles/themes.js */
import { StyleSheet } from 'react-native'
import * as colours from './colours'
import * as spacing from './spacing'

// common patterns will be spread throughout dark and light themes
const commonPatterns = {
    // used for the stack navigator
    stackOptions: {
        headerStyle: { backgroundColor: colours.indigo800 },
        headerTintColor: colours.gray100
    },
    // used for the bottom tab bar navigation
    tabBarOptions: {
        activeTintColor: colours.indigo500,
        inactiveTintColor: colours.indigo100,
        style: {
            backgroundColor: colours.gray900
        }
    },
    // used to determine safe area edges
    safeAreaEdges: ['right', 'left', 'bottom'],
    styles: StyleSheet.create({
        container: {
            padding: spacing.base,
            backgroundColor: colours.indigo200
        }
    })
}

export const light = {
    primaryColor: colours.indigo800,
    accentColor: colours.indigo200,
    baseTextColor: colours.gray700,
    strongTextColor: colours.gray900,
    subduedTextColor: colours.gray500,
    inverseTextColor: colours.white,
    listSeparatorColor: colours.indigo100,
    bodyBackgroundColor: colours.indigo50,
    ...commonPatterns
}

export const dark = {
    ...commonPatterns
}