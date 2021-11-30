import React, { useEffect } from 'react';
import './Banner.css'
import pdf from '../../../pdf/Md. Al Amin(update resume).pdf'
import Aos from 'aos'
import "aos/dist/aos.css";
import { Typewriter } from 'react-simple-typewriter'

const Banner = () => {
    useEffect(() =>{
        Aos.init({
          duration: 2000
        })
      },[])
    return (
        <div className='banner'>
            <div className='header'>
                <h2 style={{fontWeight:'bold', marginBottom:'10px'}} data-aos="fade-right">Welcome</h2>
                
                <h2>
                    I'm a 
                    <span style={{color:'red', fontWeight:'700', marginLeft:'10px'}}>
                        <Typewriter 
                                 words={['Web Designer', 'Front-end Developer']}
                                 loop
                                 cursor
                                 cursorStyle='_'
                                 typeSpeed={70}
                                 deleteSpeed={50}
                                 delaySpeed={1000}
                        />
                    </span>
                </h2>
                <h1  data-aos="fade-right">MD: Al Amin</h1>
               <div style={{marginTop:'20px'}}>
               <button data-aos="fade-up-right"><a rel="noreferrer" target="_blank" href={pdf}>Resume</a></button>
                <button data-aos="fade-up-right" style={{marginLeft:'10px'}}>Hire Me</button>
               </div>
            </div>
        </div>
    );
};

export default Banner;




