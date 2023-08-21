import React, { useState } from 'react'
import Logo from '../../image/logo-d-plus.svg'
import './Navbar.css'
import { Baby, Clapperboard, Home, Search, Tv, UserCircle2 } from 'lucide-react'
const Navbar = () => {

    const [hide, setHide] = useState({
        visibility:'hidden',
    })

    const [backGround, setBackGround] = useState({
        backgroundImage: 'none',
    })
    const onHover = () =>{
            setHide({visibility: 'visible'})
            setBackGround({backgroundImage: "linear-gradient(to right, #00030898,#00030837,#0003082d, #16161600)"})
    }

    const onNotHover = () => {
        setHide({visibility: 'hidden'})
        setBackGround({backgroundImage: 'none'})
    }
  return (
    <>
        <div className="navigation" style={backGround}>
            <div className="logo">
                <img src={Logo} alt="Logo" /> <br />
                <button className='btn'>Subscribe &#62;</button>
            </div>

            <div className="navbarLink" onMouseEnter={onHover} onMouseLeave={onNotHover}>
                <div className="pageLink">
                    <UserCircle2 /> &nbsp; &nbsp;<span style={hide}>My Space</span>
                </div>
                <div className="pageLink">
                    <Search /> &nbsp; &nbsp;<span style={hide}>Search</span>
                </div>
                <div className="pageLink">
                    <Home /> &nbsp; &nbsp;<span style={hide}>Home</span>
                </div>
                <div className="pageLink">
                    <Tv /> &nbsp; &nbsp;<span style={hide}>Tv</span>
                </div>
                <div className="pageLink">
                    <Clapperboard /> &nbsp; &nbsp;<span style={hide}>Movies</span>
                </div>
                <div className="pageLink">
                    <Baby /> &nbsp; &nbsp;<span style={hide}>Kids</span>
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar
