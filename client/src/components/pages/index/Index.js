import React from 'react'
import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import './Index.css'


const Index = () => {
    return (
        <>
            <Container>
                <div style={{textAlign: "center"}}>
            <h3 style={{margin: "50px 0px 50px 0px"}}>Bienvenidos al primer MarketPlace global que impulsa el mercado local.</h3>
            <Link to="/products">
                <Button size="xm" variant="success" style={{ marginTop: '20px' }}>Ver productos</Button>
            </Link>

                </div>

        </Container>
            <div className="info1">
            <Row className="indexrow">
                    <Col xs={7} md={2}>
                        <h5 style={{marginTop: "77px"}}>LIBRE </h5>
                        <hr/>
                        <p> Marketplace para el intercambio de productos sostenibles. Sin intermediarios. De forma directa entre productores y usuarios. </p>
                    </Col>
                    <Col xs={7} md={2}>
                        <h5>SOSTENIBLE </h5>
                        <hr/>
                        <p>Centramos todos nuestros esfuerzos para que los productores se den a conocer y hagan llegar todos sus servicios a los usuarios respetado el medio ambiente.</p>
                    </Col> 
                    <Col xs={7} md={2}>
                        <h5>OPEN SOURCE</h5>
                        <hr/>
                        <p>Nuestros usuarios tendrán acceso a todos los servicios, construidos con las últimas tecnologías, de forma gratuita. Somos por y para la comunidad.  </p>
                    </Col> 
                    <Col xs={7} md={2}>
                        <h5>COMUNITARIO</h5>
                        <hr/>
                        <p>Aplicada sobre los usuarios solo en envíos considerados no locales (+100km), nuestra tasa km0 fomenta el comercio local y es reinvertida en la comunidad. </p>
                    </Col> 
                </Row>
            </div>
            <div className="info2">
            <Row className="indexrow2">
                    <Col xs={7} md={3} >
                        <img style={{borderRadius: "20px"}} alt="Mi fotico" src="https://media-exp1.licdn.com/dms/image/C4D03AQGwHQirvTBv9w/profile-displayphoto-shrink_400_400/0?e=1608163200&v=beta&t=hIS9QWtL0E93jx7Hxgn3oASHy-qw5EHcRqM3FfenYRo"/>
                    </Col> 
                    <Col xs={7} md={3} style={{textAlign: "center"}} >
                        <h4>Gonzalo Martín Cano </h4>
              
                
                        <div >
                            <a style={{color: "black"}} href="https://www.linkedin.com/in/gonzalomartincano/"  rel="noopener noreferrer" target="_blank">

                            <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                className="feather feather-github mr-2 icon-inline">
                                <path
                                    d="m18.59 24c.103 0 4.762-.001 4.66-.001.414 0 .75-.336.75-.75-.35-7.857 1.842-16.148-6.338-16.148-1.573 0-2.826.537-3.729 1.247 0-1.461-1.579-.653-5.224-.87-.414 0-.75.336-.75.75.302 14.166-.674 15.771.75 15.771h4.66c1.353 0 .492-1.908.75-8.188 0-2.594.75-3.102 2.046-3.102 1.434 0 1.675.996 1.675 3.228.257 6.167-.598 8.063.75 8.063zm-2.425-12.791c-4.491 0-3.546 4.938-3.546 11.29h-3.16v-13.521h2.974v1.298c0 .72 1.097 1.074 1.479.35.492-.934 1.77-2.025 3.75-2.025 3.527 0 4.838 1.733 4.838 6.396v7.503h-3.16c0-7.144.756-11.291-3.175-11.291z" />
                                <path
                                    d="m1.122 7.479c-1.42 0-.448 1.585-.75 15.771 0 .414.336.75.75.75h4.665c1.42 0 .448-1.585.75-15.771 0-1.295-1.881-.531-5.415-.75zm3.915 15.021h-3.165v-13.521h3.165z" />
                                <path
                                    d="m3.452 0c-4.576 0-4.548 6.929 0 6.929 4.545 0 4.581-6.929 0-6.929zm0 5.429c-2.568 0-2.592-3.929 0-3.929 2.597 0 2.564 3.929 0 3.929z" />
                            </svg>
                            </a>
                            <a style={{color: "black"}}   href="https://github.com/Zalillo18" rel="noopener noreferrer" target="_blank">                 
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                className="feather feather-github mr-2 icon-inline">
                                <path
                                    d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
                                </path>
                            </svg>
                            </a>
                        </div>
                        <hr/>
                        <h5>Full Stack Developer Bootcamp 2020 </h5>
                    </Col>
                    <Col xs={7} md={3}>
                        <img alt="iron" src="https://coursereport-s3-production.global.ssl.fastly.net/uploads/school/logo/84/original/logo-ironhack-blue.png"/>
                    </Col> 
                </Row>
             
            </div>
        </>
    )
}

export default Index