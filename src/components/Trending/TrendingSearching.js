import React, { useEffect, useState } from 'react'
import getTrendings from 'services/getTrendings'


const TrendingSearching = () => {
  const [trends, setTrends] = useState([])

  useEffect(() => {
    getTrendings()
      .then(setTrends)
  }, [])


  return <ul>
    {
      trends.length > 1
        ? trends.map(trend =>
          <li key={trend}>
            <a href="/">{trend}</a>
          </li>
        )
        : 'loading...'
    }
  </ul>
}

export default TrendingSearching