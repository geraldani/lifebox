import { useState, useEffect } from 'react'

export const useLoadImages = (iconUrl) => {
  const [icon, setIcon] = useState('')

  useEffect(() => {
    const getImage = async () => {
      const image = await import(`../../assets/${iconUrl}`)
      setIcon(image.default)
    }
    getImage()
  }, [])

  return [icon]
}
