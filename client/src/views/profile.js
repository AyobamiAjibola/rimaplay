import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, Container, Col, Form, Row, Button, InputGroup} from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import w1s from '../img/w1s.png';
import { Link, useNavigate } from "react-router-dom"

const Profile = () => {

    const navigate = useNavigate();
    const Profile = async (e) => {
        e.preventDefault();
       console.log("login");
       navigate('/movie_list', { replace: true });
    }
    return (
        
        <>

        <section className="profSec">
            <Container>
                <div className='centerBox'>
                    <div className='text-center'>
                        <p className='intr'>SKYLINE</p>

                        <p className='intrSmal'>Who's Watching ?</p>
                        <p className='intrsml'>Select a profile that suits your present mood in order to give you what you that experience you presently crave</p>
                    </div>
                    <Row>
                        <Col xm={6} md={3} className='paddpro' onClick={Profile}>
                            <div className='proCover'>
                            <img src={w1s} className="img-responsive img-fluid sec2img" alt=""></img>
                                <p className='proNa'>Amobi</p>
                            </div>
                        </Col>

                        <Col xm={6} md={3} className='paddpro'>
                            <div className='proCover'>
                            <img src={w1s} className="img-responsive img-fluid sec2img" alt=""></img>
                                <p className='proNa'>John Mack</p>
                            </div>
                        </Col>
                        <Col xm={6} md={3} className='paddpro'>
                            <div className='proCover'>
                            <img src={w1s} className="img-responsive img-fluid sec2img" alt=""></img>
                                <p className='proNa'>Family</p>
                            </div>
                        </Col>

                        <Col xm={6} md={3} className='paddpro'>
                            <div className='proCover'>
                            <img src={w1s} className="img-responsive img-fluid sec2img" alt=""></img>
                                <p className='proNa'>Kids</p>
                            </div>
                        </Col>
                    </Row>
                </div>
                
            </Container>
        </section>


    
        </>
    );
}

export default Profile;
