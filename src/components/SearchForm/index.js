import React, { useState } from 'react'


function SearchForm({ onSubmit }) {
  const [keyword, setKeyword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(keyword)
    onSubmit({ keyword })
  }

  const handleChange = (e) => {
    setKeyword(e.target.value)
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
      name=""
      id=""
    />
    <button>Search</button>
  </form>
}

export default React.memo(SearchForm)