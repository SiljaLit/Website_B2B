import React from "react"
import { StaticQuery, graphql } from "gatsby"

import { Container, Row, Col, Button } from "react-bootstrap"

import { Link } from "gatsby"

import {navigate} from 'gatsby';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faInstagram,
  faTwitter,
  faFacebookF,
  faYoutube,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons'

import Header from "./header"
import Navbar from "./navBar"

const Layout = ({ children, pageInfo }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Container fluid className="px-0 main">
          <Row noGutters className="justify-content-center">
            <Col>
              <Header siteTitle={data.site.siteMetadata.title} />
            </Col>
          </Row>
          <Navbar pageInfo={pageInfo} />
          <Row noGutters>
            <Col style={{background: '#E0E0E0'}}>
              <Container className="container-fluid"> 
                <main>{children}</main>
              </Container>
            </Col>
          </Row>
        </Container>
        <Container fluid>
        <Row className="justify-content-center" style={{paddingBottom: '70px'}}>
          <Col md={{ span: 8, offset: 2 }}>
            <Row>
              <Col md="6">
              <ul style={{color: "gray"}}>
            <Link to="/team" className="link-no-style">
              <li>Team</li>
            </Link>
            <Link to="/blog" className="link-no-style">
              <li>Blog</li>
            </Link>
            <Link to="/letter-from-founder" className="link-no-style">
              <li>Letter from Founder</li>
            </Link>
            </ul>
              </Col>
              <Col md="6">
              <h1 style={{color: "gray"}}>Any Questions?</h1>
            <Button  onClick={()=>{navigate("/contact-us")}}>Contact Us</Button>
              </Col>
            </Row>
          </Col> 
          </Row>
        </Container >
        <Container fluid className="px-0">
          <Row noGutters >
            <Col className="footer-col">
              <footer>
                <Row>
                <span>
                <a style={{paddingRight: "20px"}} href='https://www.instagram.com/equoogame/?hl=en' target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} size="2x" style={{color: "gray"}}/>
                </a>
                <a style={{paddingRight: "20px"}} href='https://twitter.com/eQuoogame?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthors' target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faTwitter} size="2x" style={{color: "gray"}}/>
                </a>
                <a style={{paddingRight: "20px"}} href='https://www.facebook.com/eQuoogame/' target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faFacebookF} size="2x" style={{color: "gray"}}/>
                </a>
                <a style={{paddingRight: "20px"}} href='https://www.youtube.com/channel/UCvpkb8Lb7e2mwP39RVC6zHQ' target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faYoutube} size="2x" style={{color: "gray"}}/>
                </a>
                <a style={{paddingRight: "20px"}} href='https://www.linkedin.com/company/equoo/' target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} size="2x" style={{color: "gray"}}/>
                </a>
                </span>
                </Row>
              </footer>
            </Col>
          </Row>
        </Container>
      </>
    )}
  />
)

export default Layout
