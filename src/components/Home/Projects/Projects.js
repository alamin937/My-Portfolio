import React, { useEffect, useState } from 'react';
import './Projects.css'
import Aos from 'aos'
import "aos/dist/aos.css";
import { Row } from 'react-bootstrap';
import ShowProject from './ShowProject';

// const services = [
//     { id: 1, name:'Food Corner', img:'https://i.ibb.co/Tc03DJ5/food1.png', img2: 'https://i.ibb.co/bLV9H0v/food2.png', img3: 'https://i.ibb.co/TbmVsX5/food3.png', livesite: '', servercode: '', clientcode: '' },

//     { id: 2, name:'Car House', img:'https://i.ibb.co/ByLfCZt/car1.png', img2: 'https://i.ibb.co/chNr7Jk/car2.png', img3: 'https://i.ibb.co/pPZy58B/car3.png', livesite: '', servercode: '', clientcode: '' },

//     { id: 3, name:'Medi Care', img: 'https://i.ibb.co/sWrKL90/medi1.png', img2: 'https://i.ibb.co/XFkN0Cv/medi2.png', img3: 'https://i.ibb.co/1rfLGQR/medi3.png', livesite: '', servercode: '', clientcode: '' },

//     { id: 4, name:'Tourist Agency', img: 'https://i.ibb.co/PjSx0zK/t1.png', img2: 'https://i.ibb.co/xzFqV6T/t2.png', img3: 'https://i.ibb.co/mGdhTmW/t3.png', livesite: '', servercode: '', clientcode: '' },
// ]

const Projects = () => {

    const [services, setServices] = useState([])

    useEffect(() =>{
        fetch('/services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    useEffect(() => {
        Aos.init({
            duration: 2000
        })
    }, [])
    return (
        <div id='project' style={{ width: '80%', margin: '0 auto', marginTop: '50px' }}>
            <h1 data-aos="fade-down" style={{color:'white', fontWeight:'700', marginBottom:'40px'}}>My Projects</h1>
            <Row xs={1} md={2} className="g-4">
                
                   {
                       services.map(service => <ShowProject service={service}></ShowProject>)
                   }
               
            </Row>
        </div>
    );
};

export default Projects;


