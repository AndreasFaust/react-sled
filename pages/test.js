import React from 'react'
import './css/reset.css'
import './css/toggle.css'
import './css/index.css'
import './css/header.css'
import './css/settings.css'
import './css/menue.css'
import { StateProvider } from '../components/state'
import SledComponentBasic from '../components/SledComponentBasic'
import Header from '../components/header'
import Settings from '../components/settings'

const App = () => {
  return (
    <StateProvider>
      <Header />
      <Settings />
      <div className='content'>
        <SledComponentBasic />
      </div>
    </StateProvider>
  )
}

export default App
