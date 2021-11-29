import React, {useEffect} from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './Projects.css'
import first from '../../../images/1.png'
import second from '../../../images/2.png'
import third from '../../../images/3.png'
import fourth from '../../../images/4.png'
import Aos from 'aos'
import "aos/dist/aos.css";

const Projects = () => {
    useEffect(() =>{
        Aos.init({
          duration: 2000
        })
      },[])
    return (
        <div id='project' style={{width:'80%', margin:'0 auto', marginTop:'50px'}}>
            <h1 data-aos="fade-down-right" style={{marginBottom:'30px'}}>My Projects</h1>
            <Row xs={1} md={2} sm={1} className="g-4">
                
                    <Col>
                        <Card data-aos="flip-left">
                            <Card.Img variant="top" src={first} />
                            <Card.Body>
                                <Card.Title style={{fontSize:'40px', fontWeight:'700',color:'#484048'}}>Food Corner</Card.Title>
                                <Card.Text>
                                        <div data-aos="flip-up" className='span'>
                                            <div><p>html</p></div>
                                            <div><p>css</p></div>
                                            <div><p>react</p></div>
                                            <div><p>firebase</p></div>
                                            <div><p>material ui</p></div>
                                            <div><p>node.js</p></div>
                                            <div><p>express.js</p></div>
                                            <div><p>mongodb</p></div>
                                        </div>
                                        <div>
                                            <div data-aos="flip-up" className='anchor'>
                                            <a rel="noreferrer" target='_blank' href="https://food-corner-fb438.web.app/">Live Site</a>
                                            <a rel="noreferrer" target='_blank' href="https://github.com/alamin937/food-corner-client-side-13"><i class="fab fa-github"></i>Client Site</a>
                                            <a rel="noreferrer" target='_blank' href="https://github.com/alamin937/food-corner-mongo-work-13"><i class="fab fa-github"></i>Server Site</a>
                                            </div>
                                        </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card data-aos="flip-down">
                            <Card.Img variant="top" src={second} />
                            <Card.Body>
                            <Card.Title style={{fontSize:'40px', fontWeight:'700',color:'#484048'}}>Car House</Card.Title>
                                <Card.Text>
                                <div data-aos="flip-up" className='span'>
                                            <div><p>html</p></div>
                                            <div><p>css</p></div>
                                            <div><p>react</p></div>
                                            <div><p>firebase</p></div>
                                            <div><p>material ui</p></div>
                                            <div><p>node.js</p></div>
                                            <div><p>express.js</p></div>
                                            <div><p>mongodb</p></div>
                                        </div>
                                        <div>
                                            <div className='anchor'>
                                            <a rel="noreferrer" target='_blank' href="https://cars-house.web.app/">Live Site</a>
                                            <a rel="noreferrer" target='_blank' href="https://github.com/alamin937/Car-house-client"><i class="fab fa-github"></i>Client Site</a>
                                            <a rel="noreferrer" target='_blank' href="https://github.com/alamin937/car-house-server"><i class="fab fa-github"></i>Server Site</a>
                                            </div>
                                        </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card data-aos="fade-left">
                            <Card.Img variant="top" src={third} />
                            <Card.Body>
                            <Card.Title style={{fontSize:'40px', fontWeight:'700',color:'#484048'}}>Medi Care</Card.Title>
                                <Card.Text>
                                <div data-aos="flip-up" className='span'>
                                            <div><p>html</p></div>
                                            <div><p>css</p></div>
                                            <div><p>react</p></div>
                                            <div><p>firebase</p></div>
                                            <div><p>reactbootstrap</p></div>
                                            
                                        </div>
                                        <div>
                                            <div className='anchor'>
                                            <a rel="noreferrer" target='_blank' href="https://medi-care-2438b.web.app/">Live Site</a>
                                            <a rel="noreferrer" target='_blank' href="https://github.com/alamin937/Health-Care"><i class="fab fa-github"></i>Client Site</a>
                                            
                                            </div>
                                        </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card data-aos="fade-right">
                            <Card.Img variant="top" src={fourth} />
                            <Card.Body>
                            <Card.Title style={{fontSize:'40px', fontWeight:'700',color:'#484048'}}>Tourist Agency</Card.Title>
                                <Card.Text>
                                <div data-aos="flip-up" className='span'>
                                            <div><p>html</p></div>
                                            <div><p>css</p></div>
                                            <div><p>react</p></div>
                                            <div><p>firebase</p></div>
                                            <div><p>reactbootstrap</p></div>
                                            <div><p>node.js</p></div>
                                            <div><p>express.js</p></div>
                                            <div><p>mongodb</p></div>
                                        </div>
                                        <div>
                                            <div className='anchor'>
                                            <a rel="noreferrer" target='_blank' href="https://tourist-agency-3e0d4.web.app/">Live Site</a>
                                            <a rel="noreferrer" target='_blank' href="https://github.com/alamin937/Tourist-Agency-Client"><i class="fab fa-github"></i>Client Site</a>
                                            <a rel="noreferrer" target='_blank' href="https://github.com/alamin937/Tourist-agancy"><i class="fab fa-github"></i>Server Site</a>
                                            </div>
                                        </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
               
            </Row>
        </div>
    );
};

export default Projects;