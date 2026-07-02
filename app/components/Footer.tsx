import React from 'react'
import Image from 'next/image'
import "../css/footer.css"

const Footer = () => {
    return (
        <section className='footer-section' id='footer'>
            <div className='footer-container'>

                <div className='footer-logo'>
                    <Image src="/images/logo.jpg" width={75} height={75} alt='Spark Marketing' />
                    <h1>Spark Marketing</h1>
                </div>
                

                <div className='footer-services'>
                    <h1> Services</h1>
                    <ul>
                        <li>Web Development</li>
                        <li>Mobile App Development</li>
                        <li>Digital Marketing</li>
                        <li>UI/UX Design</li>
                    </ul>
                </div>

                <div className='footer-contact'>
                    <h1> Contact</h1>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>

            </div>
        </section>
    )
}

export default Footer