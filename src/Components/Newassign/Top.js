import React from 'react'
import { useEffect, useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';  
import {Navbar, Container, Nav} from "react-bootstrap"
import blue from '../../Assets/Images/blue.png'
import './Style.css'

const Top = () => {
    const [activeLink,setActiveLink] = useState('home')
    const [scrolled,setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true)
            }else{
                setScrolled(false)
            }
        }

        window.addEventListener("scroll", onScroll)

        return () => window.removeEventListener("scroll",onScroll)
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value)
    }
  return (
    <div>
    <Navbar expand="lg" className={scrolled ? "scrolled":""}>
<Container>
  <Navbar.Brand href="#home">
    <img src={blue} alt="Logo" style={{width:"10rem",height:"2.5rem"}}/>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav">
    <span className="navbar-toggler-icon"></span>
  </Navbar.Toggle>
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
      <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Products</Nav.Link>
      <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Blogs</Nav.Link>
      <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Contact Us</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Container>
</Navbar>
</div>
  )
}

export default Top