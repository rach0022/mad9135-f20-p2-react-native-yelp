import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

export default function VenueListItem({ venue, onPress, theme }) {
    return (
        <TouchableOpacity style={theme.styles.card} onPress={onPress}>
            <Text style={theme.styles.title}>{venue.name}</Text>
            <Text style={theme.styles.phone}>
                Phone Number:  {venue.phone || 'unavaliable'}
            </Text>
        </TouchableOpacity>
    )
}