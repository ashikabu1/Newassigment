import React from 'react'
import { useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import {ArrowRightCircle} from "react-bootstrap-icons"
import generativeAI from '../../Assets/Images/generativeAI.png'

const Head = () => {
    const [loopNum,setLoopNum] = useState(0)
    const [isDeleting,setIsDeleting] = useState(false)
    const toRotate = ["Bluetick Consultants"]
    const [text,setText] = useState('')
    const [delta,setDelta] = useState(300 - Math.random() * 100)
    const period = 2000

    useEffect(() => {
        let ticker = setInterval(() => {
            tick()
        },delta)

        return () => {clearInterval(ticker)}
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)
        
        setText(updatedText)

        if (isDeleting) {
            setDelta(prevDelta => prevDelta /2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true)
            setDelta(period)
        }else if (isDeleting && updatedText === '') {
            setIsDeleting(false)
            setLoopNum(loopNum + 1)
            setDelta(500)
        }
    }
  return (
    <div className="Ban">
        <section className="banner" id="home">
        <Container>
            <Row className="align-items-center">
                <Col xs={12} md={6} xl={7}>
                    <h1>{`BC for`} <span className="wrap">{text}</span></h1>
                    <p>Founded in 2017, Bluetick Consultants is a technology-driven firm that has made a
                       significant impact in the Indian and US startup ecosystems.
                       <h2>Transforming Enterprises</h2>
                       <p className='p1'>with cutting-edge, scalable, privacy-focused Generative AI Solutions.
                       </p>
                    </p>
                    <a href="https://www.bluetickconsultants.com/generative-ai.html">
                    <button onClick={()=> console.log('connect')}>Explore Now <ArrowRightCircle size={25}/> </button>
                    </a>
                </Col>
                <Col xs={12} md={6} xl={5}>
                    <img src={generativeAI} alt="Headder Img"/>
                </Col>
            </Row>
        </Container>
        </section>
        </div>
  )
}

export default Head