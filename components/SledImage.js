import React, { useState, useEffect } from 'react'
import { useSledStore } from '../sled'

const defaultImage = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'

const SledImage = ({ image, index }) => {
  const [{ currentIndex }] = useSledStore()
  const [src, setSrc] = useState(defaultImage)
  const [hasLoaded, setHasLoaded] = useState(false)

  useEffect(() => {
    if (image === src) return
    switch (index) {
      case currentIndex:
      case currentIndex - 1:
      case currentIndex + 1:
        setSrc(image)
        break
      default:
    }
  }, [currentIndex, image, index, src])

  function onLoad() {
    if (src !== defaultImage) {
      setHasLoaded(true)
    }
  }

  return (
    <div
      style={{
        position: 'absolute',
        background: `rgb(1${index}5, 1${index}0, 1${index}0)`,
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      <h3>{index}</h3>
      <img
        alt={'This is an interesting thing.'}
        src={src}
        onLoad={onLoad}
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          objectFit: 'cover',
          objectPosition: 'center',
          transition: 'opacity 1s',
          opacity: hasLoaded ? 1 : 0,
          pointerEvents: 'none'
        }}
      />
    </div>
  )
}

export default SledImage
