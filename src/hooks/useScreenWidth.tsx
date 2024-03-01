'use client'
import { useEffect, useState } from 'react'

const UseScreenWidth = () => {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const checkScreenWidth = () => {
        const width = window.innerWidth
        const mobile = width < 1120
        setIsMobile(mobile)
        localStorage.setItem('windowWidth', width.toString())
      }
      checkScreenWidth()
      window.addEventListener('resize', checkScreenWidth)

      return () => {
        window.removeEventListener('resize', checkScreenWidth)
      }
    }
  }, [])

  return isMobile
}

export default UseScreenWidth
