
const API_KEY = 'jiljXIrLPT3TcmYiJIIMXZSnkKl6IHst'



export default function getTrendings() {

  const API_URL = `https://api.giphy.com/v1/trending/searches?api_key=${API_KEY}`

  return fetch(API_URL)
    .then(res => res.json())
    .then(response => {
      const { data } = response
      const gifs = data.map(trends => {
        return trends
      })
      return gifs
    })
}