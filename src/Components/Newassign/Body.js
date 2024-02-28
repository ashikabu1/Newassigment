import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Body = () => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return (

        <section className="body" id="bodies">
        <Container>
            <Row>
                <Col>
                <div className="body-bx">
                    <h2>
                       What we offer
                    </h2>
      
                <Carousel responsive={responsive} infinite={true} className="body-slider">

                    <div className="item">
                        
                        <h5>Explore AI Opportunities for Your Enterprise</h5>
                        <p>
                        Unlock the potential of generative AI by identifying tailored opportunities for integration within
                        your organization, ensuring a strategic and efficient approach to AI implementation.
                        </p>
                    </div>
                    <div className="item">
                        
                        <h5>Design AI Trust Layer</h5>
                        <p>
                        Prioritize data security and build trust in generative AI applications with a dedicated trust
                        layer, emphasizing privacy-focused solutions that safeguard both organizational and
                        customer data.
                        </p>
                    </div>
                    <div className="item">
                        
                        <h5>Scalability-Focused Solutions</h5>
                        <p>
                        Streamline and optimize business processes with comprehensive workflow automation,
                        ensuring seamless integration of AI technologies from inception to execution for increased
                        efficiency and productivity.
                        </p>
                    </div>
                    <div className="item">
                        
                        <h5>End to end Workflow automation</h5>
                        <p>
                        Implement cutting-edge, scalable generative AI solutions that not only meet current
                        organizational needs but also adapt and grow with the evolving demands of your enterprise,
                        providing a future-proof approach to AI integration.
                        </p>
                    </div>
                   
                </Carousel>
                </div>
                </Col>
            </Row>
        </Container>
       
    </section>
  )
  
}

export default Body