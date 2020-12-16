import React from 'react'
import { View, Text } from 'react-native'

export default function EmptyListItem({ category }) {
    return (
        <View>
            <Text>There were no {category || ""} venues found nearby</Text>
        </View>
    )
}
