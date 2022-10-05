import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from "react-router-dom";
import {Navbar, Nav, Container, Col, Form, Row, Button, InputGroup} from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import Carousel from 'react-bootstrap/Carousel';
import lion from '../img/lis.jpg';
import im from '../img/1.png';
import { openNav, closeNav } from './func';
const Movies = () => {

  
    const navigate = useNavigate();
    const Detail = async (e) => {
        e.preventDefault();
       console.log("movie_detail");
       navigate('../movie_detail');
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
    


        <div className='navInside'>
            <Container fluid>
                <Row>
                    <Col xs={6}>
                    
                        
                        <p className='inP'><span style={{paddingRight:"10px", cursor:"pointer"}} onClick={openNav}><Icon.List size={29} color="white"/></span>  RimaPlay</p>
                    </Col>

                    <Col xs={6} >
                      <div style={{float:"right", paddingTop:"12px"}}>
                      <Icon.Search size={20} color="white"/>
                       
                      </div>  
                    
                    </Col>
                </Row>
            </Container>
        </div>

        <section className=''>
        
        <Carousel style={{zIndex: "0"}}> 
        <Carousel.Item interval={4000}>
        <img
          className="d-block w-100 caH"
          src={lion}
          alt="First slide"
        />
        <Carousel.Caption>
                <p className='caros'>Showing on Wildlife Report</p>
                <h3 className='caroN'>The King of</h3>
                <h3 className='caroN'>the jungle</h3>
                <p className='caroD'> Lorem ipsum dolor sit amet, consectetur</p>
                <p className='caroD'> eiusmod tempor incididunt ut labore et</p>
                <p className='caroL'> eiusmod tempor incididunt ut labore et</p>
                <a className='carB'><Icon.PlayFill size={25} color="white"/> Watch Now</a>
                <a className='carB2'><Icon.Plus size={25} color="white"/>Add to List</a>
                
        
        </Carousel.Caption>

      </Carousel.Item>


      <Carousel.Item interval={4000}>
        <img
          className="d-block w-100 caH"
          src={lion}
          alt="First slide"
        />
        <Carousel.Caption>
                <p className='caros'>Showing on Wildlife Report</p>
                <h3 className='caroN'>The King of</h3>
                <h3 className='caroN'>the jungle</h3>
                <p className='caroD'> Lorem ipsum dolor sit amet, consectetur</p>
                <p className='caroD'> eiusmod tempor incididunt ut labore et</p>
                <p className='caroL'> eiusmod tempor incididunt ut labore et</p>
                <a className='carB'><Icon.PlayFill size={25} color="white"/> Watch Now</a>
                <a className='carB2'><Icon.Plus size={25} color="white"/>Add to List</a>
                
        
        </Carousel.Caption>

      </Carousel.Item>

        </Carousel>
    </section>
    <Container  >
     
       
    
    <section>
     <p className='latestH'>Still Watching</p>
        <div className='outer'>
            <a href={'../movie_detail'}><div style={{backgroundImage: "url(/img/slsl1.jpeg)"}} > </div></a>
            <a href={'../movie_detail'}><div style={{backgroundImage: "url(/img/slsl2.jpeg)"}}></div></a>
            <div style={{backgroundImage: "url(/img/slsl3.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slsl4.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slsl1.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slsl2.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slsl3.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slsl4.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slsl1.jpeg)"}}></div>

            <div style={{backgroundImage: "url(/img/slsl1.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slsl2.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slsl3.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slsl4.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slsl1.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slsl2.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slsl3.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slsl4.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slsl1.jpeg)"}}></div>

            <div style={{backgroundImage: "url(/img/slsl1.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slsl2.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slsl3.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slsl4.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slsl1.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slsl2.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slsl3.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slsl4.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slsl1.jpeg)"}}></div>

            <div style={{backgroundImage: "url(/img/slsl1.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slsl2.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slsl3.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slsl4.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slsl1.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slsl2.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slsl3.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slsl4.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slsl1.jpeg)"}}></div>

            <div style={{backgroundImage: "url(/img/slsl1.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slsl2.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slsl3.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slsl4.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slsl1.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slsl2.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slsl3.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slsl4.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slsl1.jpeg)"}}></div>
        </div>

    
        <p className='latestH'>Action</p>
        <div className='outer'>
            <div style={{backgroundImage: "url(/img/slaction1.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slaction2.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slaction3.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slaction4.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slaction5.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slaction1.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slaction2.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slaction3.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slaction4.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slaction5.jpeg)"}}></div>

            <div style={{backgroundImage: "url(/img/slaction1.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slaction2.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slaction3.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slaction4.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slaction5.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slaction1.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slaction2.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slaction3.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slaction4.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slaction5.jpeg)"}}></div>

            <div style={{backgroundImage: "url(/img/slaction1.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slaction2.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slaction3.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slaction4.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slaction5.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slaction1.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slaction2.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slaction3.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slaction4.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slaction5.jpeg)"}}></div>

            <div style={{backgroundImage: "url(/img/slaction1.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slaction2.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slaction3.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slaction4.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slaction5.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slaction1.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slaction2.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slaction3.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slaction4.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slaction5.jpeg)"}}></div>

          
        </div>

        <p className='latestH'>Horror</p>
        <div className='outer'>
            <div style={{backgroundImage: "url(/img/slhorror1.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slhorror2.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slhorror3.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slhorror4.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slhorror5.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slhorror1.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slhorror2.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slhorror3.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slhorror4.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slhorror5.jpeg)"}}></div>

            <div style={{backgroundImage: "url(/img/slhorror1.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slhorror2.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slhorror3.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slhorror4.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slhorror5.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slhorror1.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slhorror2.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slhorror3.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slhorror4.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slhorror5.jpeg)"}}></div>

            <div style={{backgroundImage: "url(/img/slhorror1.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slhorror2.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slhorror3.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slhorror4.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slhorror5.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slhorror1.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slhorror2.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slhorror3.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slhorror4.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slhorror5.jpeg)"}}></div>

            <div style={{backgroundImage: "url(/img/slhorror1.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slhorror2.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slhorror3.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slhorror4.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slhorror5.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slhorror1.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slhorror2.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slhorror3.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slhorror4.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slhorror5.jpeg)"}}></div>

            
        </div>

        <p className='latestH'>Romance</p>
        <div className='outer'>
            <div style={{backgroundImage: "url(/img/slrom1.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slrom2.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slrom3.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slrom4.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slrom5.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slrom1.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slrom2.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slrom3.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slrom4.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slrom5.jpeg)"}}></div>

            <div style={{backgroundImage: "url(/img/slrom1.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slrom2.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slrom3.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slrom4.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slrom5.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slrom1.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slrom2.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slrom3.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slrom4.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slrom5.jpeg)"}}></div>
            

            <div style={{backgroundImage: "url(/img/slrom1.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slrom2.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slrom3.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slrom4.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slrom5.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slrom1.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slrom2.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slrom3.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slrom4.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slrom5.jpeg)"}}></div>

            <div style={{backgroundImage: "url(/img/slrom1.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slrom2.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slrom3.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slrom4.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slrom5.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slrom1.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slrom2.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slrom3.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slrom4.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slrom5.jpeg)"}}></div>

            <div style={{backgroundImage: "url(/img/slrom1.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slrom2.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slrom3.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slrom4.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slrom5.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slrom1.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slrom2.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slrom3.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slrom4.jpeg)"}}></div>
            <div style={{backgroundImage: "url(/img/slrom5.jpeg)"}}></div>

            
        </div>
    </section>
    

      {/* <section className='lastSec'>
        <p className='latestH'>Latest Movies</p>
        <Row>
         
           <Col xs={6} md={3}>
                <div className='movieSli'>

                </div>
            </Col>

            <Col xs={6} md={3}>
                <div className='movieSli'>

                </div>
            </Col>

            <Col xs={6} md={3}>
                <div className='movieSli'>

                </div>
            </Col>

            <Col xs={6} md={3}>
                <div className='movieSli'>

                </div>
            </Col>

            
          </Row>
      </section> */}
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

export default Movies;
