import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import './Details.css';

const Details = () => {
    const [details, setDetails] = useState([])
    const { id } = useParams()

    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => {
                const main = data.find(cors => cors.id == id)
                setDetails(main)
            })
    }, [id])


    return (
        <div>
            <div style={{ width: '80%', margin: '0 auto', marginTop: '40px', backgroundColor: 'black', padding: '40px' }}>
                <h1 data-aos="fade-down" style={{ textAlign: 'center', color: 'white', marginBottom: '20px' }}>{details.name}</h1>
                <Row xs={1} md={3} className="g-4">
                    <Col>
                        <Card>
                            <Card.Img data-aos="fade-up" variant="top" src={details.img} />
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img data-aos="fade-down" variant="top" src={details.img2} />
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img data-aos="fade-down" variant="top" src={details.img3} />
                        </Card>
                    </Col>
                    <div className='anchorfoo'>
                        <div>
                            <a data-aos="fade-down" rel="noreferrer" target='_blank' href={details.livesite}>Live Site</a>
                        </div>
                        <div>
                            <a data-aos="fade-down" rel="noreferrer" target='_blank' href={details.clientcode}>Client Code</a>
                        </div>
                        <div>
                            <a data-aos="fade-down" rel="noreferrer" target='_blank' href={details.servercode}>Server Code</a>
                        </div>
                    </div>

                </Row>
                <div className='main'>
                    <span data-aos="fade-down" className='spanfoo'>{details.html}</span>
                    <span data-aos="fade-down" className='spanfoo'>{details.css}</span>
                    <span data-aos="fade-down" className='spanfoo'>{details.react}</span>
                    <span data-aos="fade-down" className='spanfoo'>{details.firebase}</span>
                    <span data-aos="fade-down" className='spanfoo'>{details.material}</span>
                    <span data-aos="fade-down" className='spanfoo'>{details.node}</span>
                    <span data-aos="fade-down" className='spanfoo'>{details.express}</span>
                    <span data-aos="fade-down" className='spanfoo'>{details.mongodb}</span>
                </div>
                <div className='first'>
                    <h2>Project Overview</h2>
                    <hr />
                    <p>* {details.first}</p>
                    <p>* {details.second}</p>
                    <p>* {details.third}</p>
                    <p>* {details.fourth}</p>
                </div>
            </div>
        </div>
    );
};

export default Details;