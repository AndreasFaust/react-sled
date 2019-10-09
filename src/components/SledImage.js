import React, { useState, useEffect } from 'react'
import { useSledStore } from '../sled'

const SledImage = ({ image, index }) => {
  const [{ currentIndex }] = useSledStore()
  const [src, setSrc] = useState('data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7')
  const [hasLoaded, setHasLoaded] = useState(false)

  useEffect(() => {
    if (image === src) return
    switch (index) {
      case currentIndex:
      case currentIndex - 1:
      case currentIndex + 1:
        setSrc(image)
    }
  }, [currentIndex, image, index, src])

  function onLoad() {
    setHasLoaded(true)
  }

  return (
    <img
      key={image}
      alt={"This is an interesting thing."}
      src={src}
      onLoad={onLoad}
      style={{
        position: 'absolute',
        background: '#fff',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        objectFit: 'cover',
        objectPosition: 'center',
        transition: 'opacity 1s',
        opacity: hasLoaded ? 1 : 0
      }}
    />
  )
}

export default SledImage
