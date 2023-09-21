import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ShowCarousel.css'

gsap.registerPlugin(ScrollTrigger);

const ShowsCarousel = () => {

  const main = useRef();

  useLayoutEffect(() => {
    
    let ctx = gsap.context(() => {
      // use scoped selectors
      gsap.to(".mainBox", { 
        backgroundColor: '#000',
        scrollTrigger: {
          trigger: ".mainBox",
          scroller:'body',
          start: 'top -50%',
          end : 'top -100%',
          scrub: 2
        }
      });
      
    }, main);
    
    return () => ctx.revert();
  }, []);
  

  return (
    <>
      <div className="main" ref={main}>
        <div className="watchlist">
          <h3>Watchlist</h3>
          <div className="cards">
            <div className="cards-inner"></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ShowsCarousel
