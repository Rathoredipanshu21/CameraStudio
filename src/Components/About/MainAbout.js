import React from 'react'
import HeroAbout from './HeroAbout/HeroAbout'
import Main from './Main/Main'
import Feature from '../Home/Feature/Feature'
import Footer from '../Footer/Footer'
import Clients from './Clients/Clients'

const MainAbout = () => {
  return (
    <div>
        <HeroAbout/>
        <Main/>
       <Feature/>
       <Clients/>
       <Footer/>
    </div>
  )
}

export default MainAbout