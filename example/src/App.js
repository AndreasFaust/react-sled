import React from 'react'
import './index.css'
import Viewpager from 'react-spring-viewpager'

const pages = [
  'https://images.pexels.com/photos/62689/pexels-photo-62689.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/296878/pexels-photo-296878.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/1509428/pexels-photo-1509428.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/351265/pexels-photo-351265.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/924675/pexels-photo-924675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
]

const App = () => {
  return (
    <Viewpager
      wrapperHeight='50%'
      auto={1000}
    >
      {pages.map((page) => (
        <div
          key={page}
          className='slide'
        >
          <img
            src={page}
            alt='Hallo!'
          />
        </div>
      ))}
    </Viewpager>
  )
}

export default App
