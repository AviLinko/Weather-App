import React from 'react'
import {ThemeProvider} from '@mui/material/styles'
import {theme} from './themes/theme'
import {DashboardContainer, MiddleContainer} from './themes/style'
import {Routes , Route} from 'react-router-dom'
import {Dashboard, Map, Saves} from './pages/allPages'
import TopNav from './components/TopNav'
import WeatherDisplay from './components/WeatherDisplay'
import LeftNav from './components/LeftNav'
import Footer from './components/Footer'


const App = () => {
  return (
    <div>
      <ThemeProvider theme = {theme}>
        <TopNav/>
        <DashboardContainer>
          
          <LeftNav />
          <MiddleContainer>
            <Routes>
              <Route path = '/' element ={<Dashboard/>}/>
            </Routes>
          </MiddleContainer>
        </DashboardContainer>
      </ThemeProvider>
    </div>
  )
}

export default App