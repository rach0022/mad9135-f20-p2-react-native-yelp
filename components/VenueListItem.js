import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

// the venue list item will display the restaurant name, phone nubmer and distance from user
export default function VenueListItem({ venue, onPress, theme }) {
    return (
        <TouchableOpacity style={theme.styles.card} onPress={onPress}>
            <Text style={theme.styles.title}>{venue.name}</Text>
            <Text style={theme.styles.phone}>
                Phone Number:  {venue.phone || 'unavaliable'}
            </Text>
            <Text style={theme.styles.phone}>
                {/* Using to fixed and dividing by 1000 we can show kilometers to two decimal places */}
                Distance:  {`${(venue.distance / 1000).toFixed(2)}km` || 'unknown'}
            </Text>
        </TouchableOpacity>
    )
}