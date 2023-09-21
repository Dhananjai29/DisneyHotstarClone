import React from 'react'

import Logo from '../../image/logo-d-plus.svg'
import './Navbar.css'
import { Baby, Clapperboard, Home, Search, Tv, UserCircle2 } from 'lucide-react'
const Navbar = () => {


  return (
    <>
        <div className="navigation">
            <div className="logo">
                <img src={Logo} alt="Logo" /> <br />
                <button className='subs-button'>Subscribe &#62;</button>
            </div>

            <div className="navbarLink" >
                <div className="pageLink">
                    <UserCircle2 /> &nbsp; &nbsp;<span >My Space</span>
                </div>
                <div className="pageLink">
                    <Search /> &nbsp; &nbsp;<span >Search</span>
                </div>
                <div className="pageLink">
                    <Home /> &nbsp; &nbsp;<span >Home</span>
                </div>
                <div className="pageLink">
                    <Tv /> &nbsp; &nbsp;<span >Tv</span>
                </div>
                <div className="pageLink">
                    <Clapperboard /> &nbsp; &nbsp;<span >Movies</span>
                </div>
                <div className="pageLink">
                    <Baby /> &nbsp; &nbsp;<span >Kids</span>
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar
