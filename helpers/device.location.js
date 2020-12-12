import * as Location from 'expo-location'

// helper function to get the device location asynchronously to be used in a useEffect function 
const getDeviceLocation = async () => {
    // request the devices location
    let { status } = await Location.requestPermissionsAsync();
    // if the user does not grant permission lets return a latitude and longitude 0 for a default location
    if (status != 'granted') {
        return {
            latitude: 0,
            longitude: 0,
        }
    }
    // if we do get the location lets return it to the supplied setter function
    let location = await Location.getCurrentPositionAsync({})
    return location
    // console.log(location)
}

export default getDeviceLocation