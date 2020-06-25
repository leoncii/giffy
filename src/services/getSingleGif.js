
const API_KEY = 'jiljXIrLPT3TcmYiJIIMXZSnkKl6IHst'


const fromApiResponseToGifs = (apiResponse) => {
  const { data } = apiResponse
  const { id, title, url } = data
  console.log(data)
  return { id, title, url }
}

export default function getSingleGif({ id }) {

  const API_URL = `https://api.giphy.com/v1/gifs/${id}?api_key=${API_KEY}`

  return fetch(API_URL)
    .then(res => res.json())
    .then(fromApiResponseToGifs)
}