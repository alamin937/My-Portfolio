import React, { useRef,useEffect } from 'react';
import emailjs from 'emailjs-com';
import './ContactMe.css'
import Aos from 'aos'
import "aos/dist/aos.css";

const ContactMe = () => {
    useEffect(() =>{
        Aos.init({
          duration: 2000
        })
      },[])
    const form = useRef();
    const sendEmail = e =>{
        e.preventDefault();
        emailjs.sendForm('gmail', 'template_bl0gdbi', form.current, 'user_yCtXMTdgvCETUb8wTccHD')
        .then((result) => {
            if(result.text){
                alert('Send Message Successfully')
            }
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }
   
        return (
            <div  className='contact' id='contact'>
                <div className='form-area'>
                <h1 data-aos="fade-right">Contac Me</h1>
                <form data-aos="fade-left" ref={form} onSubmit={sendEmail}>
                    
                    <input placeholder='Name' type="text" required name="name" />
                    
                    <input placeholder="Email" type="email" required name="email" />
                    
                    <textarea placeholder='Write Something' required name="message" />
                   
                    <input style={{marginBottom:'20px',backgroundColor:'blue',color:'white'}} type="submit" value="Send" />
                </form>
                
                </div>
            </div>
            
        );
    };

    export default ContactMe;