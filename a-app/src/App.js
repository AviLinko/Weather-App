import React from 'react'
import {ThemeProvider} from '@mui/material/styles'
import {theme} from './themes/theme'
import {Routes , Route} from 'react-router-dom'
import {Dashboard, Map, Saves} from './pages/allPages'
import TopNav from './components/TopNav'
import WeatherDisplay from './components/WeatherDisplay'
import LeftNav from './components/LeftNav'
import Footer from './components/Footer'


const App = () => {
  return (
    <div>
      <TopNav />
    </div>
  )
}

export default App