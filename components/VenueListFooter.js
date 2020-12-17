import React from 'react'
import { View, Text } from 'react-native'

export default function VenueListFooter({ theme }) {
    return (
        <View style={{ ...theme.styles.footer, ...theme.styles.view }}>
            <Text>Food Finder, Developed by Ravi MAD9135 Final</Text>
            <Text>powered by LocationIQ and Yelp Fusion</Text>
        </View>
    )
}
