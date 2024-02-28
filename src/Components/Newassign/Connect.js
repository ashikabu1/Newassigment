import React from 'react'
import { useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import getin2 from '../../Assets/Images/getin2.jpg'

const Connect = () => {

    const formInitialDetails = {
        firstName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails)
    const [buttonText,setButtonText] = useState('Submit form')
    

    const onFormupdate = (category, value) => {
        setFormDetails({
            ...formDetails,[category]: value
        })
    }

    const handleSubmit = () =>{
        
    }
  return (
    <div className="ti_cum">

    <section className="contact" id="connect">
        <Container>
            <Row className="align-items-center">
                <Col md={6}>
                    <img src={getin2} alt="Contact Us"/>
                </Col>
                <Col md={6}>
                    <h2 className="h2">Let’s connect</h2>
                    <p>Contact our support team or make an appointment with our experts.</p>
                    <form onSubmit={handleSubmit}>
                        <Row>
                            <Col sm={6} className="px-1">
                                <input type="text" value={formDetails.firstName} placeholder="Full Name" onChange={(e)=> onFormupdate('firstName',e.target.value)}/>
                            </Col>
                            <Col sm={6} className="px-1">
                                <input type="email" value={formDetails.email} placeholder="Email" onChange={(e)=> onFormupdate('email',e.target.value)}/>
                            </Col>
                            <Col sm={6} className="px-1">
                                <input type="tel" value={formDetails.phone} placeholder="Contact Number" onChange={(e)=> onFormupdate('phone',e.target.value)}/>
                            </Col>
                            <Col sm={6} className="px-1">
                                <input type="text" value={formDetails.subject} placeholder="Subject" onChange={(e)=> onFormupdate('subject',e.target.value)}/>
                            </Col>
                            <Col className="px-2">
                            <textarea row="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormupdate('message',e.target.value)}></textarea>
                            <button className="btn" type="submit"><span>{buttonText}</span></button>
                            </Col>
                
                        </Row>
                    </form>
                </Col>
            </Row>
        </Container>
    </section>
     </div>
   
  )
}

export default Connect