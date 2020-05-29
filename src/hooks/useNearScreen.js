import { useEffect, useState, useRef } from 'react'


export const useNearScreen = () => {
  const [isNearScreen, setShow] = useState(false)
  const fromRef = useRef()
  useEffect(() => {

    const onChange = (entries, observer) => {
      // console.log(entries)
      const el = entries[0]
      // console.log(el)
      if (el.isIntersecting) {
        setShow(true)
        console.log('esta observando')
        observer.disconnect()
        // observer.unobserve(el)
      }
    }

    const observer = new IntersectionObserver(onChange, {
      rootMargin: '10px'
    })
    observer.observe(fromRef.current)
    return () => observer.disconnect()
  })
  return { isNearScreen, fromRef }
}