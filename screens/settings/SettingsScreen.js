import React from 'react'
import { View, Text, Button } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { themes } from '../../styles'

// this screen will display the user settings like theme (dark light, and location??)
export default function SettingsScreen({ navigation }) {
    // get a reference to the current them, change later to update
    const theme = themes.light

    // function callback to navigate to the previous page when the user is done with settings
    const goBack = () => navigation.goBack()
    return (
        <SafeAreaView edges={theme.safeAreaEdges}>
            <View>
                <Text>Settings</Text>
                {/* Hardcoded for now will change when this info is accessible */}
                <Text>Current Theme: Light</Text>
                <Button title="Back" onPress={goBack} />
            </View>
        </SafeAreaView>
    )
}
