import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Navbar, Nav, Container, Col, Form, Row, Button, InputGroup} from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import im from '../img/1.png';
import tool from '../img/tool.png';
import visa from '../img/visa.png';
import america from '../img/america.png';
import pay from '../img/pay.png';

const IreportView = () => {

   
    return (
        
        <>

        <section  className="irBa">
            
       

        <div className="sidebar">
			<Nav className="side_menu">
				<h3 className="hd">skyline</h3>
				<ul className="side_list" style={{marginTop: 50}}>
					<li className="side_item">
						<a href="" className="side_link active">
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
						<a href="" className="side_link">
							<div className="icon">
                                <Icon.StarFill  size={17}/>
								
							</div>
							<span>popular video</span>
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
						<a href="" className="side_link">
							<div className="icon">
                                <Icon.MenuUp  size={17}/>
							</div>
							<span>playlist</span>
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
							<a href="">show more</a>
						</button>
					</li>
				</ul>
				<hr></hr>
			</Nav>
		    </div>

             <div className="containerSide"></div>



             <div className='paddto'>
                <Container>
                    <Row>
                        <Col xs={8}>
                        
                        </Col>

                        <Col xs={4}>
                            <Row>
                                <Col xs={2}>
                                    <Icon.Search size={20} color="white"/>
                                 </Col>  

                                  <Col xs={2}>
                                    <Icon.Search size={20} color="white"/>
                                 </Col>   
                            </Row>
                        </Col>
                    </Row>
                </Container>
             </div>

        
        
       

    
        </section>


    
        </>
    );
}

export default IreportView;
