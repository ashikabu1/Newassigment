import React from 'react'
import { Col } from "react-bootstrap"

export const Contentcard = ({ title,description,link }) => {
    return(
       
        <Col sm={6} md={4}> 
            <div className="cont-imgbx">
            <h4>{title}</h4>
            <span>{description}</span>
                <div className="cont-txtx">
                <a href={link} className='hreflink' >ReadMore</a> 
                </div>
            </div>
        </Col>
    )
}