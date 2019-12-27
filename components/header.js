import React from 'react'
import Github from './github-logo'

export default () => (
  <header className='header' >
    <h1 className="bold">
      <span role='img' aria-label='sled-emoji'>
        🛷
      </span>
      {' '}
      react-sled
    </h1>
    <a href='https://github.com/AndreasFaust/react-sled' className='github'>
      <Github />
    </a>
  </header >
)