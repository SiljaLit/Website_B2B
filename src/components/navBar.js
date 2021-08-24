import React from "react"
import { Link } from "gatsby"

import { Navbar, Nav, Button, Col, Row } from "react-bootstrap"

import logo from "../images/sprite_logo_equoo.png"
import android_store from "../images/android.png"
import apple_store from "../images/apple-1.png"

const CustomNavbar = ({ pageInfo }) => {
  console.log(pageInfo)
  return (
    <>
    <Navbar variant="dark" expand="lg" id="site-navbar">
        {/* <Container> */}
        <Link to="/" className="link-no-style">
          <Navbar.Brand as="span">
            <img src={logo} alt="equoo logo" className="navbar-logo"></img>
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto" activeKey={pageInfo && pageInfo.pageName}>
            <Link to="/" className="link-no-style" style={{width: '120px'}}>
              <Nav.Link as="span" eventKey="index" id="nav-items">
                Home
              </Nav.Link>
            </Link>
            <Link to="/about-equoo" className="link-no-style" style={{width: '150px'}}>
              <Nav.Link as="span" eventKey="about-equoo" id="nav-items">
                About Equoo
              </Nav.Link>
            </Link>
            <Link to="/about-equoo" className="link-no-style" style={{width: '150px'}}>
              <Nav.Link id="nav-items" as="span" eventKey="about-equoo">
                Clinical Research
              </Nav.Link>
            </Link>
            <Row>
            <Col md="12" align="center">
            <a href="https://apps.apple.com/us/app/equoo-the-next-generation/id1543940585" target="_blank" rel="noreferrer"> 
              <img src={apple_store} alt="Google Play" className="store-logo"></img>
            </a>
            </Col>
            <Col md="12" align="center">
            <a href="https://play.google.com/store/apps/details?id=com.psycapps.equoo&hl=en&gl=US" target="_blank" rel="noreferrer">
            <img src={android_store} alt="Google Play" className="store-logo"></img>
            </a>
            </Col>
            </Row>
          </Nav>
        </Navbar.Collapse>
        {/* </Container> */}
      </Navbar>
    </>
  )
}

export default CustomNavbar
