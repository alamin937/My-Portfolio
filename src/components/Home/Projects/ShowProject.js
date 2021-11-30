import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ShowProject = ({service}) => {
    const {id, img, name} = service;
    return (
        <div>
             <Col >
                        <Card data-aos="fade-up">
                            <Card.Img variant="top" src={
                                img
                            } />
                            <Card.Body>
                                <Card.Title data-aos="fade-down" style={{fontSize:'40px'}}>{name}</Card.Title>
                                <Link to={`/details/${id}`}><button data-aos="fade-down" style={{backgroundColor:'blue', border:'1px solid grey', borderRadius:'10px', color:'white', fontWeight:'700', padding:'6px 20px'}}>Show Details</button></Link>
                            </Card.Body>
                        </Card>
                    </Col>
        </div>
    );
};

export default ShowProject;