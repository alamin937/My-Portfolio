import React, { useEffect } from 'react';
import './MySkill.css'
import Aos from 'aos'
import "aos/dist/aos.css";

const MySkills = () => {
    useEffect(() =>{
        Aos.init({
          duration: 2000
        })
      },[])
    return (
        <div className='flex' id='skills'>
            <h1 data-aos="fade-down-right" style={{marginTop:'40px'}}>My Skills</h1>
           <div className='myskill'>
               
               <div data-aos="flip-up" className='icon'>
                   <span><i class="fab fa-html5"></i></span>
                   <h5>html5</h5>
               </div>
               <div data-aos="flip-down" className='icon'>
                   <span><i class="fab fa-css3-alt"></i></span>
                   <h5>CSS</h5>
               </div>
               <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className='icon'>
                   <span><i class="fab fa-js"></i></span>
                   <h5>javaScript</h5>
               </div>
               <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className='icon'>
                   <span><i class="fab fa-react"></i></span>
                   <h5>React</h5>
               </div>
               <div data-aos="zoom-in-up" className='icon'>
                   <img src='https://cdn.dribbble.com/users/528264/screenshots/3140440/media/ffd94de89eccc1f7b1e76c999f1adeec.png' alt='' />
                   <h5>Firebase</h5>
               </div>
               <div data-aos="zoom-in-up" className='icon'>
               <img style={{width:'70px', marginTop:'15px'}} src='data:image/png;base64,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' alt='' />
                   <h5>React Bootstrap</h5>
               </div>
               <div data-aos="zoom-in-up" className='icon'>
               <img style={{marginTop:'15px'}} src='https://www.pngitem.com/pimgs/m/577-5779757_react-material-ui-logo-hd-png-download.png' alt='' />
                   <h5>Material Ui</h5>
               </div>
               <div data-aos="fade-left" className='icon'>
               <img style={{marginTop:'15px'}} src='https://w7.pngwing.com/pngs/777/698/png-transparent-node-js-javascript-software-developer-npm-github-angle-text-logo.png' alt='' />
                   <h5>Node.js</h5>
               </div>
               <div data-aos="fade-left" className='icon'>
               <img style={{marginTop:'15px',width:'70px'}} src='https://toppng.com/uploads/preview/9kib-354x415-unnamed-mongodb-logo-sv-11562860723mgempnmrq3.png' alt='' />
                   <h5>MongoDB</h5>
               </div>
           </div>
        </div>
    );
};

export default MySkills;