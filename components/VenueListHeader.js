import React from 'react'
import { View, Text, TextInput } from 'react-native'

// this is the lsit ehader for the venue list
// using the data given in the prop it will display the number of buisnesses
// as the first item in the lsit
export default function VenueListHeader({ data, category, byline, theme, location, search, setSearch }) {

    // label to display the catagory as capitilized and if its an empty string will just be a space 
    const label = (category == "") ? ' ' : ` ${category.charAt(0).toUpperCase() + category.slice(1)} `

    handleOnTextChange = text => setSearch(text)

    return (
        <View style={{ ...theme.styles.center, ...theme.styles.cardHeader }}>
            <Text style={theme.styles.bodyText}>{data.length} Nearby{label}Venue's to {location.address.neighbourhood}</Text>
            <Text style={theme.styles.bodyText}>{byline}</Text>
            <Text style={theme.styles.bodyText}>Filter Results</Text>
            <TextInput
                style={theme.styles.textInput}
                value={search}
                onChangeText={handleOnTextChange}
            />
        </View>
    )
}
