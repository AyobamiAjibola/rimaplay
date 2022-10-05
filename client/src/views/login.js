import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from "react-router-dom"
import {Navbar, Nav, Container, Col, Form, Row, Button, InputGroup} from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';

const Login = () => {

    const navigate = useNavigate();
    const Login = async (e) => {
        e.preventDefault();
       console.log("login");
       navigate('/profile', { replace: true });
    }
    return (
       
        <>

        <section className="seclo">
             <Container>
                <div className='centerBox'>
                <div className='boxC'>
                    
                
                    <Row className='centerIntro'>
                        <Col xs={12}>
								<p className="signText">Sign In</p>
						</Col>
                    </Row>
                    <Row>
                        
                    <Col xs={12}>
                        <Form onSubmit={Login}>
                         <InputGroup>
                        
                                <Form.Control type="text" placeholder="Your Email " className='formLogin'>
                               
                                </Form.Control>
                               <div className='divm'></div>
                        </InputGroup>

                                <Form.Control type="text" placeholder="Your Password" className='formLogin divm'>

                                </Form.Control>

                                <Button className='logButton' type="submit"><Icon.SendFill /> Login</Button>
                                
                            </Form>

                            
						</Col>
                    </Row>
                    <Row className=''>
                        <Col xs={12}>
                            <Form.Check inline id="switch1" className="remM">
                                <Form.Check.Input
                                    checked={''}
                                    // onChange={handleChange(setInvalid1)}
                                />
                                <Form.Check.Label>Remember Me</Form.Check.Label>
                            </Form.Check>
                        </Col>
                    </Row>
                   
                    <Row className=''>
                        <Col xs={6}>
								<p className="signTextB1">Create Account</p>
						</Col>

                        <Col xs={6}>
								<p className="signTextB2">Forget Password ?</p>
						</Col>
                    </Row>
                        
                       
                    
                    
                
                   
                    
                </div>
                </div>
                
             </Container>
               
               
            
        </section>


     


        <footer className='footStart'>
            <Container>
                <Row>
                    <Col xs={6} md={4}>
                        <p className='footHead'>Browse</p>
                        <p className='footSmall'>Streaming Library</p>
                        <p className='footSmall'>TV Shows</p>
                        <p className='footSmall'>Movies</p>
                        <p className='footSmall'>IReport</p>
                        <p className='footSmall'>Coming Soon</p>  
                    </Col>

                    <Col xs={6} md={4}>
                        <p className='footHead'>Help Center</p>
                        <p className='footSmall'>Account & Billing</p>
                        <p className='footSmall'>Pricing & Plans</p>
                        <p className='footSmall'>Supported Devices</p>
                        <p className='footSmall'>Terms of Use</p>
                        <p className='footSmall'>Privacy Policy</p>
                    </Col>

                    <Col xs={12} md={4}>
                        <p className='footHead'>Contact Us</p>
                        <p className='footSmall'>Address</p>
                        <p className='footSmall'>Email</p>
                        <p className='footSmall'>Phone</p>
                        
                    </Col>
                </Row>

                <hr className='whit'></hr>

                <Row>
                    <Col xs={6}><a className='ases'>© 2022 Copyright</a></Col>
                    <Col xs={6}>
                        <a className='padd'><Icon.Facebook size={25} color="white"/></a>
                        <a className='padd'><Icon.Instagram size={25} color="white"/></a>
                        <a className='padd'><Icon.Twitter size={25} color="white"/></a>
                    </Col>
                </Row>
            </Container>
        </footer>
        </>
    );
}

export default Login;
