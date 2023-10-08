
import { useState } from 'react';
import Footer from './Footer'
import './nav.css'

function ContactForm() {

  const [formData, setFormData]=useState({
    name:'',email:'',detail:'',
  })



  const handleData=(e)=>{
    const{name,value}=e.target;

    setFormData((preventDefault)=>({
     ...preventDefault,
     [name]:value,
    }));
  }


const onSubmit= ( e )=>{
e.preventDefault();
console.log('formData',formData);
}



const onViaCallSubmit = ( ) => {
  console.log('call');
};


  return (
    
        <>
          <div className='row'>
          <div className='formSection '>
          <div className='btn'>

           <button >
            <i className="bi bi-chat-left-text"></i>
            Via Sport Chat
            </button>

            <button onClick={onViaCallSubmit}>
            <i className="bi bi-chat-left-text"></i>
             Via Call
            </button>
           </div>

           <button className='btn2' >
           <i className="bi bi-envelope-fill"></i>
            Via Email Form
           </button>
           
        <div className='col-5'>
        <form  onSubmit={onSubmit}>
            <div className='formContainer'>


             <label htmlFor='name'>Name :</label>
             <input type='text' name='name' value={formData.name} onChange={handleData} required />

             <label htmlFor='email'>Email :</label>
             <input type='email' name='email' value={formData.email}  onChange={handleData} required minlength="6" maxlength="6"/>

             <label htmlFor='detail'>Detail :</label>
             <textarea style={{ height: '7em' }} type='text'name='detail' value={formData.detail} onChange={handleData} required></textarea>

            </div>

           </form>

        </div>
           
           <div className='submit'>
             <button type='submit' onClick={onSubmit}>Submit</button>
           </div>


          </div>
        
          </div>
          <Footer/>
      
        </>

  )
}

export default ContactForm