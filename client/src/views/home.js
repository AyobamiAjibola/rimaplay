import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, Container, Col, Form, Row, Button, Accordion} from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import tel3 from '../img/tel3.png';
import resp3 from '../img/resp3.png';
import imd from '../img/tor.jpeg';
import vid from '../img/vid.png';
const Home = () => {


      
    return (
        
        <>
        
        <section className="section1">
            <div className='pdn'>
             <Container fluid>
                <Row>
                    <Col xs={6}>
                        <p className='skyL'>Skyline</p>
                    </Col>

                    <Col xs={6}>
                        <div className='flo'><a href ={"login"} className='logB'>Login</a></div>
                        
                    </Col>
                </Row>
            </Container>
              
                
              </div>
             <div className='intro_hold'>
                    <p className="intro_text1">unlimited movies,<span className="">tv</span></p>
                    <p className="intro_text2">Shows, News And More.</p>
                    <p className="intro_text3">Watch anywhere. Cancel anytime.</p>
                    <p className='intro_text4'>Ready to watch? Sign Up</p>
                    <a className='sinU' href={"#signupl"}>Sign Up</a>
                {/* <Row className='centerIntro' style={{marginRight:"0rem"}}>
                  
                  <Col xs={5} md={3}>
                 
                  <Form>
                          <Form.Control type="text" placeholder="Enter Email Address" className='formE'>

                          </Form.Control>
                          
                      </Form>

                     
                  </Col>

                 
              </Row> */}

                    
                  
                    
                </div>
             
               
               
            
        </section>

        <section className='section2'>
            <Container>
                <Row>
                    <Col>
                        <img src={tel3} className="img-responsive img-fluid sec2img" alt=""></img>
                    </Col>

                    <Col>
                        <img src={resp3} className="img-responsive img-fluid sec2img" alt=""></img>
                    </Col>
                    <Col md={6}>
                        <p className='sec2Big'>Enjoy on any device.</p>
                        <div>
                            <p className='sec2Small'>Watch on Smart TVs, Playstation,</p>
                            <p className='sec2Small'>Laptop, Chromecast, Ipad,</p>
                            <p className='sec2Small'>Blu-ray players, and more.</p>
                        </div>
                       
                    </Col>
                </Row>
            </Container>
        </section>


        <section className='section3'>
            <Container>
                <Row>
                    <Col xs={12} md={6}>
                        <p className='sec3Big'>Online Streaming.</p>
                        <div className="sec3small">   
                            <p>Live News, Movies &amp; Tv Shows for friends</p>
                            <p>and family</p>
					    </div>
                        <Button className='playbtn'><Icon.PlayFill /> Watch Now</Button>
                    </Col>

                    <Col xs={12} md={6}>
                        <img src={vid} className="img-responsive img-fluid resp" alt=""></img>
                    </Col>
                </Row>
            </Container>
        </section>


        <section className="plan">
            <Container>
                <div>
                    <h3 className="plan_h"><span className="plan_l"></span>&nbsp;our plan</h3>
                </div>
                <div className="plan_p">
                    <p>No hidden fees, equipment rentals, or installation appointments</p>
                    <p>switch plans or cancel anytime</p>
			    </div>

                <Row style={{marginRight:"0rem"}}>
                    <Col xs={4} className="col4A">
                    </Col>

                    <Col xs={2}>
                        <Button className="step_link2">
                            starter
                        </Button>
                    </Col>

                    <Col xs={2}>
                        <Button className="step_link">
                            fun pack
                        </Button>
                    </Col>

                    <Col xs={2}>
                        <Button className="step_link">
                            giddy
                        </Button>
                    </Col>

                    <Col xs={2}>
                        <Button className="step_link">
                            premium
                        </Button>
                    </Col>
                </Row>

                <Row className='mg50'>
                    <Col xs={4}>
                        <p>Number of scenes you can</p>
                        <p>watch on at the same time</p>
                    </Col>

                    <Col xs={2}>
                        <p>1</p>
                    </Col>

                    <Col xs={2}>
                        <p>1</p>
                    </Col>

                    <Col xs={2}>
                        <p>2</p>
                    </Col>

                    <Col xs={2}>
                        <p>4</p>
                    </Col>
                </Row>
                <hr></hr>


                <Row style={{marginRight:"0rem"}}>
                    <Col xs={4}>
                        <p>Number of phone or tablet</p>
                        <p>you can have download on</p>
                    </Col>

                    <Col xs={2}>
                        <p>1</p>
                    </Col>

                    <Col xs={2}>
                        <p>1</p>
                    </Col>

                    <Col xs={2}>
                        <p>2</p>
                    </Col>

                    <Col xs={2}>
                        <p>4</p>
                    </Col>
                </Row>
                <hr></hr>

                <Row>
                    <Col xs={4}>
                        <p>Unlimited movies, Tv show</p>
                    </Col>

                    <Col xs={2}>
                        <p>√</p>
                    </Col>

                    <Col xs={2}>
                        <p>√</p>
                    </Col>

                    <Col xs={2}>
                        <p>√</p>
                    </Col>

                    <Col xs={2}>
                        <p>√</p>
                    </Col>
                </Row>
                <hr></hr>

                <Row>
                    <Col xs={4}>
                        <p>Watch on your mobile phone</p>
                        <p>and tablet</p>
                    </Col>

                    <Col xs={2}>
                        <p>√</p>
                    </Col>

                    <Col xs={2}>
                        <p>√</p>
                    </Col>

                    <Col xs={2}>
                        <p>√</p>
                    </Col>

                    <Col xs={2}>
                        <p>√</p>
                    </Col>
                </Row>
                <hr></hr>

                <Row>
                    <Col xs={4}>
                        <p>Watch on your laptop and TV</p>
                    </Col>

                    <Col xs={2}>
                        <p>√</p>
                    </Col>

                    <Col xs={2}>
                        <p>√</p>
                    </Col>

                    <Col xs={2}>
                        <p>√</p>
                    </Col>

                    <Col xs={2}>
                        <p>√</p>
                    </Col>
                </Row>
                <hr></hr>

                <Row>
                    <Col xs={4}>
                        <p>HD available</p>
                    </Col>

                    <Col xs={2}>
                        <p></p>
                    </Col>

                    <Col xs={2}>
                        <p></p>
                    </Col>

                    <Col xs={2}>
                        <p>√</p>
                    </Col>

                    <Col xs={2}>
                        <p>√</p>
                    </Col>
                </Row>
                <hr></hr>

                <Row>
                    <Col xs={4}>
                        <p>Ultra HD available</p>
                    </Col>

                    <Col xs={2}>
                        <p></p>
                    </Col>

                    <Col xs={2}>
                        <p></p>
                    </Col>

                    <Col xs={2}>
                        <p></p>
                    </Col>

                    <Col xs={2}>
                        <p>√</p>
                    </Col>
                </Row>
                <hr></hr>
            </Container>
                
        </section>


        <section className='section4' id="signupl">
            <Container>
                <Row>
                    <Col xs={12} md={6}>
                        <div>
							<p className="tril">trial starts first for 30 days</p>
						</div>
						<div>
							<p className='whit'>Ready to watch? Enter your email to create or</p>
							<p className='whit'>start your membership</p>
						</div>
                    </Col>

                    <Col xs={12} md={6}>
                        <Row>
                            <Col xs={8}>
                                <Form.Control type="text" placeholder="Enter Email Address" className='trial_i'>

                                </Form.Control>
                            </Col>

                            <Col xs={4}>
                                <a href={"../plan"}>
                                    <Button className="trial_btn">
                                        Get Started
                                    </Button>
                                </a>
                                
                            </Col>
                        </Row>
                   
                    </Col>
                </Row>
            </Container>
        </section>

        <section className='section5'>
            <Container>

            <div className="text-center">
				<h3 class="faq_h">frequently asked questions</h3>
			</div>

            <Row>
                <Col xs={12}>
                   
                    <Accordion  defaultActiveKey="0" flush>
                        <Accordion.Item eventKey="0" className='accordion-item' >
                            <Accordion.Header className='accordion-link'>Accordion Item #1</Accordion.Header>
                            <Accordion.Body>
                                <div className='answer'>
                                    <p> 
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                        pariatur. Excepteur sint occaecat cupidatat non proident, 
                                        sunt inculpa qui officia deserunt mollit anim id est laborum.
                                    </p>
                                </div>
                               
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>
            </Row>
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

export default Home;
