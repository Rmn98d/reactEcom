import React from 'react'
import './nav.css'
import ContactForm from './ContactForm'
import Header from './Header'

function NavigationHeading() {
  const cartItems = []; 
    return (

        <>
        <Header cartItems={cartItems}/>


           <div className='headingSection'>
         <div className='row'>
         <div className='movingContact '>
                <img src="images/contact.jpg" alt="not-found " />
              <h1>Contact us</h1>
            </div>
        
         
   <div className='col-lg-7 pg'>
   <p>
             "Our customer support is available round the clock, 24 hours a day" means that our customer service team 
             is accessible and ready to assist you at any time of the day or night. Regardless of the hour, you can 
             reach out to us for help, inquiries,or support. We understand the importance of being available whenever 
             our customers need assistance, ensuring that you receive timely and reliable support whenever you require
              it.
         </p>
   </div>
         </div>
            </div>



          <div className='contactSection'>

          <div className='contactImg'>
           <img src="images/contact-us.jpg" alt="not-found"/>
           </div>

           <ContactForm/>
          </div>
        </>
    )
}

export default NavigationHeading