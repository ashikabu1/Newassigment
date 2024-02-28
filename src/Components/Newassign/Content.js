import React from 'react'
import { Col, Container, Row, Tab, Nav } from "react-bootstrap"
import { Contentcard } from "./Contentcard"

const Content = () => {

    const blogs = [
        {
            title: "Speaking SQL: Turning Natural Language into Database Dialogues",
            description: "Bridging Language and Data in the Enterprise Sphere: In the realm of enterprise data management, SQL databases have long stood as the backbone, housing vast quantities of invaluable information......",
            link: 'https://www.bluetickconsultants.com/speaking-sql-turning-natural-language-into-database-dialogues.html' 
        },
        {
            title: "Beyond Basics: Elevating AI with Reinforcement Learning from Human Feedback",
            description: "Reinforcement Learning from Human Feedback (RLHF) was arguably the key behind the success of ChatGPT, marking a significant advancement in AI's ability to understand and engage in human language.....",
            link: 'https://www.bluetickconsultants.com/beyond-basics-elevating-ai-with-reinforcement-learning-from-human-feedback.html' 
        },
        {
            title: "The Fine Art of Tuning: Parameter-Efficient Fine-Tuning",
            description: "Welcome to our exploration of the fascinating world of large language models! As many of you are aware, the scale of these models has skyrocketed recently. Take, for instance, GPT-4, which boasts a staggering 1.8 trillion parameters.....",
            link: 'https://www.bluetickconsultants.com/the-fine-art-of-tuning-parameter-efficient-fine-tuning.html'
        },
        {
            title: "PrivAIcy Matters: Balancing Privacy, Price, and Performance",
            description: "Welcome to the enthralling universe of Generative AI! Recognized as a realm of artificial intelligence algorithms with the magic to conjure fresh content based on available data, this technology has unassumingly......",
            link:'https://www.bluetickconsultants.com/privaicy-matters-balancing-privacy-price-and-performance-in-in-house-llm-deployments.html'
        },
     
]
    return (

        <section className="content" id="contents">
            <Container>
                <Row>
                    <Col>
                    <h2>Explore and enjoy the blogs written by our passionate techies.</h2>
                    <Tab.Container id="cts-tabs" defaultActiveKey="first">
                   <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                   <Nav.Item>
                   <Nav.Link eventKey="first">Tab One</Nav.Link>
                   </Nav.Item>
                   <Nav.Item>
                   <Nav.Link eventKey="second">Tab Two</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="third">Tab Three</Nav.Link>
                     </Nav.Item>
                     </Nav>
                     <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <Row>
                                {blogs.map((blog, index) => {
                                        return(
                    
                                           <Contentcard key={index}
                                           {...blog}/>
                                           
                                        )
                                    })
                                }
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">MERN stack web developer</Tab.Pane>
                        <Tab.Pane eventKey="third">MERN stack web developer</Tab.Pane>
                     </Tab.Content>
                     </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>

      )
    }
    
export default Content