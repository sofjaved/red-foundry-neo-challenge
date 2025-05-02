const API_KEY = 'lTHPxbpwqnn3thI5aiCieLtOpT1MZ85pxbkRI9tN'
const BASE_URL = 'https://api.nasa.gov/neo/rest/v1'

export const fetchNeosByDate = async (date) => {
  try {
    const formattedDate = date.toISOString().split('T')[0] // Format: YYYY-MM-DD
    const url = `${BASE_URL}/feed?start_date=${formattedDate}&end_date=${formattedDate}&api_key=${API_KEY}`
    
    const response = await fetch(url)
    const data = await response.json()
    
    // The API returns objects grouped by date
    const neosByDate = data.near_earth_objects
    return neosByDate[formattedDate] || []
  } catch (error) {
    console.error('Error fetching NEOs:', error)
    throw error
  }
}