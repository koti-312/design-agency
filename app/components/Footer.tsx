import React from 'react'
import Image from 'next/image'
import "../css/footer.css"

const Footer = () => {
    return (
        <section className='footer-section' id='footer'>
            <div className='footer-container'>

                <div className='footer-logo'>
                    <Image src="/images/logo.jpg" width={75} height={75} alt='Spark Marketing' />
                    <h1>Nova Agency</h1>
                </div>


                <div className='footer-services'>
                    <h1> Services</h1>
                    <ul>
                        <li><a href="#services">Web Development</a></li>
                        <li><a href="#services">Mobile App Development</a></li>
                        <li ><a href="#services">Digital Marketing</a></li>
                        <li><a href="#services">UI/UX Design</a></li>
                    </ul>
                </div>

                <div className='footer-company'>
                    <h1>Company</h1>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#contact">Contact Us</a></li>
                    </ul>
                </div>

            </div>
        </section>
    )
}

export default Footer