// file not in use until its determined the best way to get location on react-native app
import { LOCATIONIQ_API_KEY } from '@env'
const BASE_URL = 'https://us1.locationiq.com/v1'

// based on location.service.demo from react weather app demo in MAD9135
export async function getGeolocation(location) {
    const url = `${BASE_URL}/search.php?key=${LOCATIONIQ_API_KEY}&q=${location}&format=json`

    const response = await fetch(url)
    if (!response.ok) {
        throw new Error(response.statusText)
    }
    const data = await response.json()
    return { lat: data[0].lat, lon: data[0].lon }
}