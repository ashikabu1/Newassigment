import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Linklogo from '../../Assets/Images/Linklogo.png';
import Falogo from '../../Assets/Images/Falogo.png';
import Instagramlogo from '../../Assets/Images/Instagramlogo.png';
import blue from '../../Assets/Images/blue.png';
import glassdoor from '../../Assets/Images/glassdoor.webp';
import bluetick from '../../Assets/Images/bluetick.webp';

const Footer = () => {
    return (
        <div className='footer'>
            <Container>
                <Row>
                    <Col xs={12} md={5} lg={3}>
                        <div className='footer-info'>
                            <img src={blue} alt='Icon' />
                            <h5 className='footerh5'>Bluetick Consultant LLP</h5>
                            <p>contact@bluetickconsultants.com</p>
                            <div className='glassdoor'>
                                <img src={glassdoor} alt='Icon' />
                                <img src={bluetick} alt='Icon' />
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={7} lg={9}>
                      <div className='footer-resources'>
                        <h6>Resources</h6>
                         <h6>Products</h6>
                        </div>
                        <div className='footerspan'>
                       <p>
                        <span>Blogs</span>
                       <span>talk to code</span>
                        <span>Interview Gpt</span>
                        <span>PrivacyDoc</span>
                        <span>Sales call evaluator</span>
                         </p>
                         </div>
                        
                       </Col>

                </Row>
                <Row className='align-items-center'>
                    <Col xs={12} sm={12} className='text-center text-sm-center'>
                        <div className='social-icon'>
                            <a href='#'><img src={Linklogo} alt='Icon' /></a>
                            <a href='#'><img src={Falogo} alt='Icon' /></a>
                            <a href='#'><img src={Instagramlogo} alt='Icon' /></a>
                        </div>
                        <p>Copyrigth 2023. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;
