import React from 'react'
import { Select, Option } from './styles'
import { useForm } from '../../hooks/useForm'

const RATING = ['g', 'pg', 'pg-13', 'r']


function SearchForm({ onSubmit, initialRating = '', initialkeyword = '' }) {
  // const [keyword, setKeyword] = useState('')
  // const [keyword, setKeyword] = useState('')
  // const [rating, setRating] = useState(initialkeyword)
  const { keyword, rating, updateKeyword, updateRating } = useForm({ initialRating, initialkeyword })

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({ keyword, rating })
  }


  const handleChange = (e) => {
    updateKeyword(e.target.value)
    /*     updateKeyword({ type: ACTIONS.UPDATE_KEYWORD, payload: e.target.value }) */
  }

  const handleChangeRating = e => {
    // console.log(e.target.value)
    updateRating(e.target.value)
    /*     updateRating({ type: ACTIONS.UPDATE_RATING, payload: e.target.value }) */
  }

  return <form
    onSubmit={handleSubmit}
  >
    <input
      autoFocus
      placeholder='Search gif...'
      type="text"
      onChange={handleChange}
      value={keyword}
    />
    <button>Search</button>
    <Select active onChange={handleChangeRating} value={rating}>
      {
        RATING.map(item => (
          <Option key={item}>
            {item}
          </Option>
        ))
      }
    </Select>
  </form>
}

export default React.memo(SearchForm)