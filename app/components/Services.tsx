import React from 'react'
import "../css/service.css"
import Image from 'next/image'

const Services = () => {

  return (
    
    <section className='service-section' id="services">
      <h1 className='service-header'>Our Services</h1>

      <div className='service-container'>

        <div className='service-row'>
          <div className='service-card'>
           <Image src="/images/webdevelopment.jpg" width={300} height={300} alt='Web Development' />
            <div className='card-body'>
              <h3>Web Development</h3>
              <p>We build responsive, high-performance websites and web applications using modern technologies.</p>
            </div>
          </div>

          <div className='service-card'>
            <Image src="/images/mobileappdev.jpg" width={300} height={300} alt='Mobile App Development' />
            <div className='card-body'>
              <h3>Mobile App Development</h3>
              <p>We build fast, responsive mobile applications for iOS and Android using modern frameworks.</p>
            </div>
          </div>
        </div>

        <div className='service-row'>
          <div className='service-card'>
            <Image src="/images/digitalmarket.jpg" width={300} height={300} alt='Digital Marketing' />
            <div className='card-body'>
              <h3>Digital Marketing</h3>
              <p>We grow your audience through SEO, paid ads, and content marketing strategies.</p>
            </div>
          </div>

          <div className='service-card'>
            <Image src="/images/UIUXdesign.jpg" width={300} height={300} alt='UI/UX Design' />
            <div className='card-body'>
              <h3>UI/UX Design</h3>
              <p>We create beautiful, user-friendly interfaces using Figma and modern design principles.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Services