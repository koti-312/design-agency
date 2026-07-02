import React from 'react'
import "../css/hero.css"

const Hero = () => {
    return (

        <section className='hero-section' id='home'>
            <div className='hero-content'>

                <span className='agency-name'>Creative Design Agency</span>
                <h1>We build brands that <span>shine bright</span></h1>

                <p className='tagline'>
                    Nova crafts bold digital experiences, stunning designs, and powerful marketing strategies that help businesses rise above the competition.
                </p>

                <div className='hero-buttons'>
                    <a href='#contact' className='getstarted-btn'>Get Started</a>
                </div>
            </div>

        </section>
    )
}

export default Hero