import React from 'react'
import { View, Text } from 'react-native'

export default function VenueListHeader({ category, byline }) {
    return (
        <View>
            <Text>Nearby {category} Location</Text>
            <Text>{byline}</Text>
        </View>
    )
}
