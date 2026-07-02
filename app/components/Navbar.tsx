import React from 'react'
import Image from 'next/image'
import "../css/navbar.css"

const Navbar = () => {
  return (
    <>
        <nav className='navbar'>
            <div className='logo-img'>
                <Image src="/images/logo.jpg" width={75} height={75} alt='Spark Marketing' />
                <h2 className='logo-text'>Nova Agency</h2>

            </div>

            <ul className='navbar-section'>
                <a href="#home">Home</a>
                <a href="#services">Services</a>
                <a href="#portfolio">Portfolio</a>
                <a href="#contact">Contact</a>
            </ul>
        </nav>
    </>
  )
}

export default Navbar