/* /styles/themes.js */
import { StyleSheet } from 'react-native'
import * as colours from './colours'
import * as spacing from './spacing'
import * as typography from './typography'

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
            backgroundColor: colours.indigo200,
        },
        view: {
            flex: 1,
            padding: spacing.larger,
            flexGrow: 0,
            height: 200
        },
        card: {
            paddingVertical: spacing.small,
            borderBottomWidth: spacing.hairline,
            borderBottomColor: colours.indigo200
        },
        title: { fontSize: typography.fs4, color: colours.darkText },
        phone: {
            paddingTop: spacing.smallest,
            fontSize: typography.fs3,
            color: colours.subduedTextColor
        },
        flex: {
            flex: 1,
            flexGrow: 0,
            justifyContent: "center"
        },
        // to make fullscreen i use absolute position with top bot left and right as 0 like css 
        fullscreen: {
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0
        },
        safeView: {
            padding: spacing.larger,
            flexGrow: 0,
        },
        spinner: {
            height: 100,
            width: 100,
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