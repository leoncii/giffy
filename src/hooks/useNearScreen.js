import { useEffect, useState, useRef } from 'react'


export const useNearScreen = ({ externalRef, once = true } = {}) => {
  const [isNearScreen, setShow] = useState(false)
  const fromRef = useRef()

  useEffect(() => {
    let observer
    const element = externalRef ? externalRef.current : fromRef.current

    const onChange = (entries, observer) => {
      // console.log(entries)
      const el = entries[0]
      // console.log(el)
      if (el.isIntersecting) {
        setShow(true)

        console.log('esta observando')
        once && observer.disconnect()
        // observer.unobserve(el)
      } else {
        !once && setShow(false)
      }
    }

    observer = new IntersectionObserver(onChange, {
      rootMargin: '100px'
    })

    if (element) {
      observer.observe(element)
    }
    return () => observer && observer.disconnect()
  })
  return { isNearScreen, fromRef }
}