import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, Container, Col, Form, Row, Button, InputGroup} from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import w1s from '../img/w1s.png';

const Plan = () => {

   
    return (
        
        <>

        <section className="profSec">
            <Container className='whit'>
                <p className="stepStart">step 2 of 3</p>
                <p className="stepPlan">Select your plan</p>
                <p className="steppp">no hidden fees, equipment rentals, or installation appointments</p>
                <p className="steppp">switch plan or cancel anytime</p>


                <Row style={{paddingTop: "40px"}}>
                    <Col xs={4} className="col4Ae">
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
                <hr className='gre'></hr>


                <Row>
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
                <hr className='gre'></hr>

                <Row>
                    <Col xs={4}>
                        <p>Unlimited movies, Tv show</p>
                    </Col>

                    <Col xs={2}>
                        <p><Icon.Check size={30}/></p>
                    </Col>

                    <Col xs={2}>
                        <p><Icon.Check size={30}/></p>
                    </Col>

                    <Col xs={2}>
                        <p><Icon.Check size={30}/></p>
                    </Col>

                    <Col xs={2}>
                        <p><Icon.Check size={30}/></p>
                    </Col>
                </Row>
                <hr className='gre'></hr>

                <Row>
                    <Col xs={4}>
                        <p>Watch on your mobile phone</p>
                        <p>and tablet</p>
                    </Col>

                    <Col xs={2}>
                        <p><Icon.Check size={30}/></p>
                    </Col>

                    <Col xs={2}>
                        <p><Icon.Check size={30}/></p>
                    </Col>

                    <Col xs={2}>
                        <p><Icon.Check size={30}/></p>
                    </Col>

                    <Col xs={2}>
                        <p><Icon.Check size={30}/></p>
                    </Col>
                </Row>
                <hr className='gre'></hr>

                <Row>
                    <Col xs={4}>
                        <p>Watch on your laptop and TV</p>
                    </Col>

                    <Col xs={2}>
                        <p><Icon.Check size={30}/></p>
                    </Col>

                    <Col xs={2}>
                        <p><Icon.Check size={30}/></p>
                    </Col>

                    <Col xs={2}>
                        <p><Icon.Check size={30}/></p>
                    </Col>

                    <Col xs={2}>
                        <p><Icon.Check size={30}/></p>
                    </Col>
                </Row>
                <hr className='gre'></hr>

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
                        <p><Icon.Check size={30}/></p>
                    </Col>

                    <Col xs={2}>
                        <p><Icon.Check size={30}/> </p>
                    </Col>
                </Row>
                <hr className='gre'></hr>

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
                        <p><Icon.Check size={30}/></p>
                    </Col>
                </Row>
                <hr className='gre'></hr>
                
                <div className='text-center'>
                    <a href={"../card"} className='btn plan_btn'> Next</a>
                </div>
            </Container>
        </section>


    
        </>
    );
}

export default Plan;
