import { YELP_API_KEY } from '@env'
const BASE_URL = 'https://api.yelp.com/v3/businesses/'
const SEARCH_ROUTE = 'search'
const DEFAULT_OPTIONS = {
    coord: {
        lon: -75.76,
        lat: 45.35, // Algonquin College
    },
    radius: 2500, // 2.5km
    limit: 20,
    term: '',
    category: '',
}
// const cache = new Map()
/**
 * @typedef {Object} APIOptions
 * @property {string} term an optional search term like coffee or restaurants
 * @property {string} location an optional location like Ottawa or Algonquin College provide if no lat lon
 * @property {Object} coord Location coordinates
 * @property {number} coord.lon Longitude
 * @property {number} coord.lat Latitude
 * @property {number} radius the search radius in meters
 * @property {number} limit the number of lcoatiosn defaults 20
 * @property {string} category the type of lcoations to return like bar, discgolf etc
 * @property {string?} id optional string value containing the id of the restaurant for specific searches
 */

/**
 * Get the latest fodo venue buisness data for the given location.
 * @param {APIOptions} options
 * @returns {Object} Food Venue Results
 * @see https://www.yelp.com/developers/documentation/v3/get_started
 */
export default async function getVenues(options) {
    const { coord, units, term, limit, radius, category } = Object.assign({}, DEFAULT_OPTIONS, options)
    // const cacheItem = cache.get(coord)
    // if (cacheItem && !isExpired(cacheItem.current.dt)) {
    //     return cacheItem
    // }
    const venues = await fetchVenues({ units, coord, term, limit, radius, category })
    // console.log(venues)
    // cache.set(coord, venues)
    return venues
}

/**
 * Private function to make the actual `fetch()` call to the API
 * @param {APIOptions} options
 */
async function fetchVenues({ coord, term, limit, radius, category, id = null }) {
    // if an id is specified we will change the url to be based on the 
    // create the url based on the lat lon and term (used for filtering)
    const url = (id) 
        ? `${BASE_URL}/${id}`
        : `${BASE_URL}${SEARCH_ROUTE}?latitude=${coord.lat}&longitude=${coord.lon}&term=${term}&limit=${limit}&radius=${radius}&categories=${category}`
    // console.log(url)
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