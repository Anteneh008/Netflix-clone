import React, { useEffect, useState } from 'react'
import './Nav.css'

function Nav() {
    const [show, handleShow] = useState(false)

    // useEffect(() => {
    //     window.addEventListener("scroll", () => {
    //         if(window.scrollY > 100) {
    //             handleShow(true);
    //         } else handleShow(false)
    //     })
    //     return () => {
    //         window.removeEventListener("scroll")
    //     };
    // },[])

    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 100) {
            handleShow(true);
          } else {
            handleShow(false);
          }
        };
      
        window.addEventListener("scroll", handleScroll);
      
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);
      
  return (
    <div className = {`nav ${show && "nav__black"}`}>
        <img 
        className='nav__logo'
        src='https://www.freepnglogos.com/uploads/netflix-logo-drawing-png-19.png'/>
        <img 
        className='nav__avatar' 
        src='https://sportshub.cbsistatic.com/i/2022/04/27/8fe82a79-0eba-4966-9d6a-5e43373f02d3/avatar-the-way-of-water-large-logo.jpg?auto=webp&width=2048&height=1536&crop=1.333:1,smart'
        alt='Avatar logo'/>
    </div>
  )
}

export default Nav