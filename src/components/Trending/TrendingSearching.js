import React, {
  useEffect, useState
} from 'react'
import { Link } from 'wouter'
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
            <Link href={`/search/${trend}`}>{trend}</Link>
          </li>
        )
        : 'loading...'
    }
  </ul>
}

export default TrendingSearching