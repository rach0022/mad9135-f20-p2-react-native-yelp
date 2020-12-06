/* /styles/themes.js */

import * as colours from './colours'

export const light = {
    primaryColor: colours.indigo800,
    accentColor: colours.indigo200,
    baseTextColor: colours.gray700,
    strongTextColor: colours.gray900,
    subduedTextColor: colours.gray500,
    inverseTextColor: colours.white,
    listSeparatorColor: colours.indigo100,
    bodyBackgroundColor: colours.indigo50,
    // used for the stack navigator
    stackOptions: {
        headerStyle: { backgroundColor: colours.primaryColor },
        headerTintColor: colours.backgroundColor
    },
    // used for the bottom tab bar navigation
    tabBarOptions: {
        activeTintColor: colours.activeColor,
        inactiveTintColor: colours.inActiveColor,
        style: {
            backgroundColor: colours.backgroundColor
        }
    },
    // used to determine safe area edges
    safeAreaEdges: ['right', 'left', 'bottom']
}

export const dark = {}
