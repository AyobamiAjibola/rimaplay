import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from "react-router-dom";
import {useRef, useEffect} from 'react';
import {Navbar, Nav, Container, Col, Form, Row, Button, InputGroup} from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import Carousel from 'react-bootstrap/Carousel';
import lion from '../img/lis.jpg';
import im from '../img/1.png';
import { openNav, closeNav } from './func';
const Upload = () => {


    const navigate = useNavigate();
    const Login = async (e) => {
        e.preventDefault();
       console.log("login");
       navigate('/profile', { replace: true });
    }

  
  
    	/* Set the width of the side navigation to 250px */


    return (
       
        <>

<div id="mySidenav" className="sidenav">
  
  <Nav className="side_menu">
  <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
				<h3 className="hd">skyline</h3>
				<ul className="side_list" style={{marginTop: 50}}>
					<li className="side_item">
						<a href={"../dashboard"} className="side_link active">
							<div className="icon" >
                            <Icon.HouseFill size={17}/>
							</div>
							<span>dashboard</span>
						</a>
					</li>
					<li className="side_item">
						<a href="" className="side_link">
							<div className="icon">
                                <Icon.PersonCircle  size={17}/>
							</div>
							<span>my channel</span>
						</a>
					</li>
					<li className="side_item">
						<a href={"../my_list"} className="side_link">
							<div className="icon">
                                <Icon.StarFill  size={17}/>
								
							</div>
							<span>my list</span>
						</a>
					</li>
					<li className="side_item">
						<a href="" className="side_link">
							<div className="icon">
                                <Icon.PlayBtn  size={17}/>
							</div>
							<span>subscription</span>
						</a>
					</li>
					<li className="side_item">
						<a href="" className="side_link">
							<div className="icon">
                                <Icon.ClockHistory  size={17}/>
							</div>
							<span>History views</span>
						</a>
					</li>
					<li className="side_item">
						<a href="" className="side_link">
							<div className="icon">
                                <Icon.ClockFill  size={17}/>
							</div>
							<span>watch later</span>
						</a>
					</li>
					<li className="side_item">
						<a href="" className="side_link">
							<div className="icon">
                            <Icon.HandThumbsUpFill  size={17}/>
							</div>
							<span>liked video</span>
						</a>
					</li>
					<li className="side_item">
						<a href={"../movie_list"} className="side_link">
							<div className="icon">
                                <Icon.MenuUp  size={17}/>
							</div>
							<span>Movies</span>
						</a>
					</li>
				</ul>
				<hr className='line_ire'></hr>
				<h3 className='sideH'>subscription</h3>
				<ul className="side_list">
					<li className="side_item">
						<a href="" className="side_link active">
							<div className="mage">
								 <img src={im} className="img-responsive img-fluid sixS"/>
							</div>
							<span className="sli">CNN</span>
						</a>
					</li>
					<li className="side_item">
						<a href="" className="side_link">
							<div className="mage">
                                <img src={im} className="img-responsive img-fluid sixS"/>
							</div>
							<span className="sli">maude mann</span>
						</a>
					</li>
					<li className="side_item">
						<a href="" className="side_link">
							<div className="mage">
                                <img src={im} className="img-responsive img-fluid sixS"/>
							</div>
							<span className="sli">francis wolfe</span>
						</a>
					</li>
					<li className="side_item">
						<a href="" className="side_link">
							<div className="mage">
                                <img src={im} className="img-responsive img-fluid sixS"/>
							</div>
							<span className="sli">liela french</span>
						</a>
					</li>
					<li className="side_item">
						<a href="" className="side_link">
							<div className="mage">
                                <img src={im} className="img-responsive img-fluid sixS"/>
							</div>
							<span className="sli">bessie casey</span>
						</a>
					</li>
					<li className="side_item">
						<a href="" className="side_link">
							<div className="mage">
                                <img src={im} className="img-responsive img-fluid sixS"/>
							</div>
							<span className="sli">anna norton</span>
						</a>
					</li>
					<li className="side_item">
						<button className="side_button btn">
							<a href={"../channel_list"}>show more</a>
						</button>
					</li>
				</ul>
				<hr></hr>
			</Nav>
</div>
  <div className='dashB'>
    

            
  <div className='paddto'>
                <Container fluid className='fluidD'>
                    <Row>
                        <Col xs={4} md={8}>
                          <a onClick={openNav} className="hov"><Icon.List size={17} color="white"/></a>
                        </Col>

                        <Col xs={8} md={4}>
                          <div style={{float:"right"}}>
                            <a><Icon.Search size={14} color="white"/></a>
                            <a href={"../upload"}className='notUp'><Icon.CloudArrowUpFill size={12} color="white"/> Upload</a>
                            <Icon.BellFill size={15} color="white"/>
                          </div>
                            
                        </Col>
                    </Row>
                </Container>
             </div>

    <Container className='fluidC secb'>
     
        <section className='uploadbox'>
            <div className='text-center'>
              <p className='uploadStH'>Upload & Share Your Videos With The World</p>
              <Icon.CloudArrowUpFill  size={120} color="white"/>
              <div>
                <Button className='uploBtn'> Select Files</Button>
              </div>
              
              <p className='uploadST'>Or</p>
              <p className='uploadST'>Drag and Drop Video Files</p>
            </div>
        </section>

        <section className='uploadbox'>
            <div className='text-center'>
              <p className='uploadStH' style={{color:'#0f6efb'}}>Video Information</p>
              <hr  style={{width:'4%', margin: "auto",color: "#0f6efb"}}></hr> 
            
            

              <Row>
                    <Col xm={12}>
                        <Form>
                       
                                <Form.Control type="text" placeholder="Video Name " className='formUpload'>
                               
                                </Form.Control>

                              
                     

                                <Form.Control type="text" placeholder="Video Description" className='formUpload divm'>

                                </Form.Control>

                              
                            </Form>

                            
						            </Col>
                    </Row>
              <div className='upPad'>
                <Button className='uploBtn'> Upload Now</Button>
                <Button className='uploBtn' style={{marginLeft:'10px'}}> Cancel</Button>
              </div>
              
    
            </div>
        </section>
    </Container>
     

    
    
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

export default Upload;
