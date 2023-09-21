import React from 'react'
import './Home.css'
import HomeCarousel from './HomePageContent/HomeCarousel'
import ShowsCarousel from './HomePageContent/ShowsCarousel'
// import { gsap } from "gsap";
// import { TweenMax, Power3 } from 'gsap/gsap-core';


const Home = () => {

  

  return (
    <>
        <HomeCarousel />
        <div id='Homebody'>
            <ShowsCarousel />
        </div>
    </>
  )
}

export default Home
