
const API_KEY = 'jiljXIrLPT3TcmYiJIIMXZSnkKl6IHst'

export default function getGifs({ limit = 5, keyword, page = 0 } = {}) {

  const API_URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${page * limit}&rating=R&lang=en`

  return fetch(API_URL)
    .then(res => res.json())
    .then(response => {
      const { data } = response
      const gifs = data.map(image => {
        const { title, id } = image
        const { url } = image.images.downsized_medium
        return { title, id, url }
      })
      return gifs
    })
}