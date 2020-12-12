// file not in use until its determined the best way to get location on react-native app
import { LOCATIONIQ_API_KEY } from '@env'
const BASE_URL = 'https://us1.locationiq.com/v1'
const GEOCODE_PATH = 'search.php?key='
const REVERSE_GEOCODE_PATH = '/reverse.php?key='


// based on location.service.demo from react weather app demo in MAD9135
// will modify for reverse geocoding 
export default async function getGeolocation({ latitude, longitude }) {
    const url = `${BASE_URL}${REVERSE_GEOCODE_PATH}${LOCATIONIQ_API_KEY}&lat=${latitude}&lon=${longitude}&format=json`
    // const url = `${BASE_URL}${GEOCODE_PATH}${LOCATIONIQ_API_KEY}&q=${location}&format=json`

    const response = await fetch(url)
    if (!response.ok) {
        throw new Error(response.statusText)
    }
    const data = await response.json()
    console.log("data:", data, url, latitude, longitude)
    return data
}