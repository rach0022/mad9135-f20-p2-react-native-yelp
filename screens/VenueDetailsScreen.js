import React, { useState, useEffect } from 'react'
import { View, Text, Button, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { themes } from '../styles'
import { getVenues } from '../helpers'
import Loader from '../components/Loader'

export default function VenueDetailsScreen({ navigation, route }) {
    // using a useState varaible we can hold the fetched venue response inside venue
    const [venue, setVenue] = useState(null)
    const [isLoading, setLoading] = useState(true) // used for the activity indicator element

    // get the id of the venue from the route params
    const id = route.params.id

    // get a reference to our theme, change to useTheme if there is time
    const theme = themes.light

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
                .then(setVenue)
                .catch((error) => console.error(error))
                .finally(() => setLoading(false))
        }

        // console.log("location", location)
    }, [id, setVenue, setLoading])

    // return eithe rthe activity indicator if the fetch is still taking place or the return venue details
    // console.log(`Venue: \n\n\n${venue}\n\n\n`, venue)

    // map the hours to a table element to display them properly
    return (
        <SafeAreaView edges={theme.safeAreaEdges} style={{ ...theme.styles.center, ...theme.styles.container, flex: 1 }}>
            {isLoading
                ? <Loader />
                : (<>
                    {/* Will load an image in to the cache if it doesnt exist otherwise serve from cache, from react docs */}
                    {/* Since the image is provided from a uri I have to use the uri attribute instead of url */}
                    <Image
                        source={{
                            uri: venue.image_url,
                            cache: 'only-if-cached'
                        }}
                        style={{ ...theme.styles.detailImage, ...theme.styles.materialDesignShadow }}
                    />
                    {/* <Text>Details of the Selected Food Venue( id: {`${id}`})</Text> */}
                    <Text style={theme.styles.headerText}>{venue.name || ""}</Text>
                    <Text style={theme.styles.headerText}>{venue.price || "unknown price"}</Text>
                    <Text style={theme.styles.bodyText}>{venue.phone || "phone number unavaliable"}</Text>
                    <Text style={theme.styles.bodyText}>{venue.distance || "unknown distance"}</Text>
                    <Text style={theme.styles.bodyText}>Rating: {venue.rating || "unknown rating"}</Text>
                    <View style={theme.styles.button}>
                        <Button color={theme.strongTextColor} title="Back" onPress={navigation.goBack} />
                    </View>
                </>)
            }
        </SafeAreaView>
    )
}
