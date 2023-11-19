const API_KEY = ''

export const getMovie = async search => {
  const base = 'http://www.omdbapi.com/'
  const query = `?s=${search}&apikey=${API_KEY}`
  const res = await fetch(base + query)
  const data = await res.json()
  return data
}
