import React from 'react'
import { View, Text } from 'react-native'
import { themes } from '../../styles'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function CoffeeScreen() {
    // get a reference to the current them, change later to update
    const theme = themes.light

    return (
        <SafeAreaView edges={theme.safeAreaEdges}>
            <View>
                <Text>Coffee Coffee</Text>
            </View>
        </SafeAreaView>
    )
}
