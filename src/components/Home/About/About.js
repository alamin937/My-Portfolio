import React from 'react';
import './About.css'

const About = () => {
    return (
        <div id='about' style={{backgroundColor:'#1E3768', marginTop:'40px', padding:'40px'}}> 
           <div style={{color:'white',width:'80%', margin:'0 auto'}}>
           <h1 data-aos="fade-down">About Me</h1>
            <div className='pera'>
                <h4 data-aos="fade-down">MD: Al Amin</h4>
                <p data-aos="fade-up">As a Web Developer with over 1 years of front end experience and passion for responsive website design and  in the mobile-first approach. Complete Web Development with Jhankar Mahbub certified. Implemented new responsive website approach which increased mobile.</p>
            </div>
            <div className='font'>
                <div>
                    <span data-aos="fade-left"><i data-aos="fade-down" class="fas fa-location-arrow"></i>  Mirpur-2, Dhaka-1216, Bangladesh</span>
                </div>
                <div>
                    <span data-aos="fade-up"><i data-aos="fade-down" class="fas fa-phone"></i>  01734301291</span>
                </div>
                <div>
                    <span data-aos="fade-down"><i data-aos="fade-down" class="far fa-envelope"></i> mdalamin76812@gmail.com</span>
                </div>
            </div>
           </div>
        </div>
    );
};

export default About;