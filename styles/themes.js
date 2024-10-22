/* /styles/themes.js */
import { StyleSheet } from 'react-native'
import * as colours from './colours'
import * as spacing from './spacing'
import * as typography from './typography'

const brandColour = '#ff5722'
const lightBrandColour = '#ff8a50'
const darkBrandColour = '#c41c00'

// common patterns will be spread throughout dark and light themes
const commonPatterns = {
    // used for the stack navigator
    stackOptions: {
        headerStyle: { backgroundColor: colours.orange800 },
        headerTintColor: colours.gray100
    },
    // used for the bottom tab bar navigation
    tabBarOptions: {
        activeTintColor: colours.orange500,
        inactiveTintColor: colours.orange100,
        style: {
            backgroundColor: colours.gray900
        }
    },
    // used to determine safe area edges
    safeAreaEdges: ['right', 'left', 'bottom'],
    styles: StyleSheet.create({
        container: {
            padding: spacing.base,
            backgroundColor: colours.orange200,
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
            borderColor: colours.orange900,
            backgroundColor: colours.orange300,
            borderWidth: 2,
            borderBottomRightRadius: 10,
            borderBottomLeftRadius: 10,
            marginTop: 10,
            justifyContent: 'center',
            alignItems: 'center'
        },
        cardHeader: {
            backgroundColor: colours.orange200,
            paddingVertical: 10
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
        },
        detailImage: {
            width: 250,
            height: 250,
            borderRadius: 15,
            borderWidth: 2,
            borderColor: colours.orange900
        },
        bodyText: {
            ...typography.bodyText
        },
        headerText: {
            ...typography.headerText
        },
        byLine: {
            ...typography.byLine
        },
        center: {
            justifyContent: 'center',
            alignItems: 'center'
        },
        footer: {
            marginBottom: 15
        },
        button: {
            width: 100,
            height: typography.lh5,
            backgroundColor: colours.orange500,
            borderRadius: 5
            // marginBottom: typography.lh8
        },
        textInput: {
            height: 40,
            borderColor: colours.orange900,
            borderWidth: 2,
            width: 200
        },
        // taken from https://ethercreative.github.io/react-native-shadow-generator/
        materialDesignShadow: {
            shadowColor: colours.orange900,
            shadowOffset: {
                width: 0,
                height: 1,
            },
            shadowOpacity: 0.99,
            shadowRadius: 2.22,
        }
    })
}

export const light = {
    primaryColor: colours.orange800,
    accentColor: colours.orange200,
    baseTextColor: colours.gray700,
    strongTextColor: colours.gray900,
    subduedTextColor: colours.gray500,
    inverseTextColor: colours.white,
    listSeparatorColor: colours.orange100,
    bodyBackgroundColor: colours.orange50,
    ...commonPatterns
}

export const dark = {
    ...commonPatterns
}