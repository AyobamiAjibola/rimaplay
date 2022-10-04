import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, Container, Col, Form, Row, Button, InputGroup} from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import w1s from '../img/w1s.png';
import tool from '../img/tool.png';
import visa from '../img/visa.png';
import america from '../img/america.png';
import pay from '../img/pay.png';

const Card = () => {

   
    return (
        
        <>

            <section  className="cardBa">
            <Container>
            <Row>
                <Col xs={6}>
                    <div >
                        <h3 className='whit payc'>Card details</h3>
                        <p className="payt">Payment type</p>
                    </div>
                </Col>
                <Col xs={6}>
                    <div>
                        <a href="#">

                            <img src={w1s} className="img-responsive img-fluid cardPi" alt=""></img>
                        </a>
                    </div>
                </Col>
            </Row>
           
            <div className='padtp'>
                <div className="row">
                    <Col xs={2}>
                        <a href="">
                            <img src={tool} className="img-responsive img-fluid" alt=""></img>
                        </a>
                    </Col>
                    <Col xs={2}>
                        <a href="">
                            <img src={visa} className="img-responsive img-fluid" alt=""></img>
                        </a>
                    </Col>
                    <Col xs={2}>
                        <a href="">
                            <img src={america} className="img-responsive img-fluid" alt=""></img>
                        </a>
                    </Col>
                    <Col xs={2}>
                        <a href="">
                            <img src={pay} className="img-responsive img-fluid" alt=""></img>
                        </a>
                    </Col>
                    <Col xs={4}>

                    </Col>
                </div>
            </div>

            <Row>
                    <Col xm={12}>
                        <Form>
                                <Form.Label className='labelP'>Card Name</Form.Label>
                                <Form.Control type="text" placeholder="John Doe " className='formLogin'>
                               
                                </Form.Control>
                               <div className='divm'></div>
                      
                               <Form.Label className='labelP divm'>Card Number</Form.Label>
                                <Form.Control type="number" placeholder="0000 0000 0000 0000" className='formLogin'>

                                </Form.Control>
                                <div className='divm'></div>
                                <Row>
                                    <Col xs={3}>
                                        <Form.Label className='labelP divm'>Expiry Date</Form.Label>
                                        <Form.Control type="number" placeholder="mm" className='formLogin'>

                                        </Form.Control>
                                    </Col>

                                    <Col xs={3}>
                                        <Form.Label className='labelP divm'>Expiry Year</Form.Label>
                                        <Form.Control type="number" placeholder="yy" className='formLogin'>

                                        </Form.Control>
                                    </Col>

                                    <Col xs={6}>
                                        <Form.Label className='labelP divm'>CVV</Form.Label>    
                                        <Form.Control type="number" placeholder="321" className='formLogin'>

                                        </Form.Control>
                                    </Col>
                                </Row>

                                <hr className='line'></hr>

                                <Row>
                                    <Col xs={6}>
                                        <p className='totalP'> Total Package Cost </p>
                                    </Col>

                                    <Col xs={6}>
                                     <p className='totalC'>NGN 4000</p>
                                    </Col>
                                </Row>

                                <div className='text-center'>
                                    <a href={"../finish_setup"}>
                                        <Button className='cardButton' type="button">Next</Button>
                                    </a>
                                </div>
                                
                                
                            </Form>

                            
						</Col>
                    </Row>
        </Container>

            </section>


    
        </>
    );
}

export default Card;
