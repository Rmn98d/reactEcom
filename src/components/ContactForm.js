
import { useState } from 'react';
import Footer from './Footer'
import './nav.css'

import axios from 'axios';

function ContactForm() {


  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [details,setDetails]=useState('');



const handleSubmit= async(e)=>{
  e.preventDefault();
  try{
    const response = await axios.post('http://127.0.0.1:8000/api/inputData',{name,email,details});


    alert('form successfully submit');

    console.log(`sent successfully`,response.data);
    setName('');
    setEmail('');
    setDetails('');
  }
    catch(error){
     console.error('error sending data:',error);
  }
  
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
        <form  onSubmit={handleSubmit}>
            <div className='formContainer'>


           
             <input type='text' name='name' value={name} onChange={(e)=>setName(e.target.value)} required />

             <label htmlFor='email'>Email :</label>
             <input type='email' name='email' value={email}  onChange={(e)=>setEmail(e.target.value)} required />

             <label htmlFor='detail'>Detail :</label>
             <textarea style={{ height: '7em' }} type='text'name='detail' value={details} onChange={(e)=>setDetails(e.target.value)} required></textarea>

            </div>
            <div className='submit'>
             <button type='submit' onClick={handleSubmit}>Submit</button>
           </div>

           </form>

        </div>
           
         

           

          </div>
        
          </div>
          <Footer/>
      
        </>

  )
}

export default ContactForm;
