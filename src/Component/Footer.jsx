import React from 'react'
import footerimg from './alldivimage/footer-logo.svg'

const Footer = () => {
  return (
    <div>
        <div className='footermaindiv'>
            <div className='footerimgdiv'>

            
            <img width='200px' src={footerimg} alt="" />
            </div>
            <div className='footerhelp'>
                <h3 className='allheading' >Help</h3>
                <h3 className='allheading'>Feedback</h3>
                <h3 className='allheading'>Contact</h3>
                <h3 className='allheading'>About Us</h3>

            </div>
            <div className='footerhome'>
              <h3 className='allheading'>Home</h3>
              <h3 className='allheading'>Shop</h3>
              <h3 className='allheading'>Cart</h3>
            </div>

        </div>
    </div>
  )
}

export default Footer