
const API_KEY = 'jiljXIrLPT3TcmYiJIIMXZSnkKl6IHst'

export default function getGifs({ keyword }) {

  const API_URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=10&offset=0&rating=R&lang=en`

  return fetch(API_URL)
    .then(res => res.json())
    .then(response => {
      const { data } = response
      const gifs = data.map(image => {
        const {  title, id } = image
        const { url } = image.images.downsized_medium
        return { title, id, url }
      })
      return gifs
    })
}