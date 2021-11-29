import React, { useEffect } from 'react';
import './Banner.css'
import pdf from '../../../pdf/Md. Al Amin(update resume).pdf'
import Aos from 'aos'
import "aos/dist/aos.css";

const Banner = () => {
    useEffect(() =>{
        Aos.init({
          duration: 2000
        })
      },[])
    return (
        <div className='banner'>
            <div className='header'>
                <h3 data-aos="fade-right">Front-end Developer</h3>
                <h1 data-aos="fade-left">MD: Al Amin</h1>
                <p data-aos="fade-up">As a Web Developer with over 1 years of front end experience and passion for responsive website design and  in the mobile-first approach. Complete Web Development with Jhankar Mahbub certified. Implemented new responsive website approach which increased mobile.</p>
                <button data-aos="fade-up-right"><a rel="noreferrer" target="_blank" href={pdf}>Resume</a></button>
                <button data-aos="fade-up-right" style={{marginLeft:'10px'}}>Hire Me</button>
            </div>
        </div>
    );
};

export default Banner;