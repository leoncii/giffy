import React, { Suspense } from 'react'
import { useNearScreen } from 'hooks/useNearScreen'


const TrendingSearching = React.lazy(() => {
  return import('./TrendingSearching')
})
// export default TrendingSearching
export default function LazyTrendings() {
  const { isNearScreen, fromRef } = useNearScreen()

  
  return <div ref={fromRef}>
    <Suspense fallback='cargandooooo'>
      {
        isNearScreen
          ? <TrendingSearching />
          : 'cargandooooo'
      }
    </Suspense>
  </div>
}
