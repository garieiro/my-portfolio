'use client'
import { useEffect, useState } from 'react'

const UseScreenWidth = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkScreenWidth = () => {
      setIsMobile(window.innerWidth <= 800)
    }
    checkScreenWidth()
    window.addEventListener('resize', checkScreenWidth)

    return () => {
      window.removeEventListener('resize', checkScreenWidth)
    }
  }, [])

  return isMobile
}

export default UseScreenWidth
