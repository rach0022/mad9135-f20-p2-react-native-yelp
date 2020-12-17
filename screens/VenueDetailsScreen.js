import React, { useState, useEffect } from 'react'
import { View, Text, Button, ActivityIndicator } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { safeAreaEdges } from '../styles'
import { getVenues } from '../helpers'
import Loader from '../components/Loader'

export default function VenueDetailsScreen({ navigation, route }) {
    // using a useState varaible we can hold the fetched venue response inside venue
    const [venue, setVenue] = useState(null)
    const [isLoading, setLoading] = useState(true) // used for the activity indicator element

    // get the id of the venue from the route params
    const id = route.params.id

    // // this is an example of how I will handle the currently displayed restaurant
    // const [val, setVal] = React.useState('')
    // React.useEffect(() => {
    //     setVal('Taco Place')
    // }, [])
    // console.log(val)

    // using a use effect hook we can fetch the specific venue using our id as the 
    useEffect(() => {
        // check if we have an id
        if (id) {
            // get the venue only suppliying the id to get the details of the venue from the yelp api
            getVenues({ id })
                .then(data => {
                    console.log(data)
                    return data
                })
                .then(setVenue)
                .catch((error) => console.error(error))
                .finally(() => setLoading(false))
        }

        // console.log("location", location)
    }, [id, setVenue, setLoading])

    // return eithe rthe activity indicator if the fetch is still taking place or the return venue details
    console.log(`Venue: \n\n\n${venue}\n\n\n`, venue)

    // map the hours to a table element to display them properly
    return (
        <SafeAreaView edges={safeAreaEdges}>
            {isLoading
                ? <Loader />
                : (<View>
                    <Text>Details of the Selected Food Venue( id: {`${id}`})</Text>
                    <Text>{venue?.name || ""}</Text>
                    <Text>{venue?.phone || "phone number unavaliable"}</Text>
                    <Text>{venue?.distance || "unknown distance"}</Text>
                    <Text>{venue?.price || "unknown price"}</Text>
                    <Text>{venue?.rating || "unknown rating"}</Text>
                    <Button title="Back" onPress={navigation.goBack} />
                </View>)
            }
        </SafeAreaView>
    )
}
