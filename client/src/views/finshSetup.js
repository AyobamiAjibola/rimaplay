import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from "react-router-dom";
import {useRef, useEffect} from 'react';
import {Navbar, Nav, Container, Col, Form, Row, Button, InputGroup} from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import tel3 from '../img/tel3.png';
import resp3 from '../img/resp3.png';
const FinishSetup = () => {


    const navigate = useNavigate();
    const Login = async (e) => {
        e.preventDefault();
       console.log("login");
       navigate('/profile', { replace: true });
    }

  
  
    	/* Set the width of the side navigation to 250px */


    return (
       
        <>

 
  <div className='dashB'>
    

  <div className='pdn'>
             <Container fluid>
                <Row>
                    <Col xs={6}>
                        <p className='skyL'>Skyline</p>
                    </Col>

                    <Col xs={6}>
                        <div className='flo'><a className='signOutB'>SIGN OUT</a></div>
                        
                    </Col>
                </Row>
            </Container>
              
                
              </div>

    <div className='padfini'>

        <div className='text-center'>
            <img src={tel3} className="img-responsive img-fluid finishImg" alt=""></img>
            <img src={resp3} className="img-responsive img-fluid finishImg" alt=""></img>
            <p className='finishH'>FINISH SETTING UP YOUR ACCOUNT</p>
            <p className='finishSub'>RimaPlay is personalized for you. Create a</p>
            <p className='finishSub'>profile to watch on any device at any time</p>
            <a href={"../profile"}><Button className='finishBtn'> Next</Button></a>
        </div>

    </div>


    
    
    </div>

     


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

export default FinishSetup;
