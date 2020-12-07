import { YELP_API_KEY } from '@env'
const BASE_URL = 'https://api.yelp.com/v3/businesses/search'
const DEFAULT_OPTIONS = {
    coord: { lon: -75.76, lat: 45.35 }, // Algonquin College
}
const cache = new Map()

/**
 * @typedef {Object} APIOptions
 * @property {string} term an optional search term like coffee or restaurants
 * @property {string} location an optional location like Ottawa or Algonquin College provide if no lat lon
 * @property {Object} coord Location coordinates
 * @property {number} coord.lon Longitude
 * @property {number} coord.lat Latitude
 */

/**
 * Get the latest fodo venue buisness data for the given location.
 * @param {APIOptions} options
 * @returns {Object} Food Venue Results
 * @see https://www.yelp.com/developers/documentation/v3/get_started
 */
export async function getVenues(options) {
    const { coord, units } = Object.assign({}, DEFAULT_OPTIONS, options)
    // const cacheItem = cache.get(coord)
    // if (cacheItem && !isExpired(cacheItem.current.dt)) {
    //     return cacheItem
    // }
    const venues = await fetchVenues({ units, coord })
    // cache.set(coord, venues)
    return venues
}

/**
 * Private function to make the actual `fetch()` call to the API
 * @param {APIOptions} options
 */
async function fetchVenues({ coord: { lat, lon }, term }) {
    // create the url based on the lat lon and term (used for filtering)
    const url = `${BASE_URL}?latitude=${lat}&longitude=${lon}&term=${term}`

    // create a headers object to append on our authorization token from the yelp fusion api
    let headerParams = new Headers()
    headerParams.append('Authorization', `Bearer ${YELP_API_KEY}`)

    //crate a new request with the url, headers and the GET method as we will only be reading data
    let request = new Request(url, {
        headers: headerParams,
        method: 'GET'
    })

    const response = await fetch(request)
    if (!response.ok) throw new Error(response.statusText)
    return response.json()
}