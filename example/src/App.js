import React from 'react'
import './index.css'
import { Viewpager, Views, Progress, Control } from 'react-spring-viewpager'

const pages = [
  'https://images.pexels.com/photos/62689/pexels-photo-62689.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/296878/pexels-photo-296878.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/1509428/pexels-photo-1509428.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/351265/pexels-photo-351265.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/924675/pexels-photo-924675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
]

const App = () => {
  return (
    <>
      <h1>react-spring-viewpage Example</h1>
      <Viewpager
        wrapperHeight='50vw'
        auto={3000}
        dragDistance='25ow'
      >
        <Views>
          {pages.map((page) => (
            <div
              key={page}
              style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                backgroundImage: `url(${page})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
          ))}
        </Views>
        <Progress />
        <div className='controls'>
          <Control type='prev' />
          <Control type='next' />
        </div>
      </Viewpager>
    </>
  )
}

export default App
