import { useState, useEffect } from 'react'
import presets from '../presets'

export default (preset) => {
  const [styles, setStyles] = useState(presets[preset] || '')
  useEffect(() => {
    if (!preset) return
    if (!presets[preset]) {
      console.log(`react-sled: Control preset "${presets[preset]}" does not exist.`)
    } else {
      setStyles(presets[preset])
    }
  }, [preset])
  return styles
}
