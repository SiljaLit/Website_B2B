import React from "react"
import { StaticQuery, graphql } from "gatsby"

import { Container, Row, Col, Button } from "react-bootstrap"

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
          <Col md="4" className="ml-auto">
            <ul>
              <li>Team</li>
              <li>Blog</li>
              <li>Letter from Founder</li>
            </ul>
          </Col>
          <Col md="4" className="ml-auto">
            <h1>Any Questions?</h1>
            <Button>Contact Us</Button>
          </Col>
          </Row>
        </Container >
        <Container fluid className="px-0">
          <Row noGutters>
            <Col className="footer-col">
              <footer>
                <span>
                  © {new Date().getFullYear()}, by PsycApps Ltd
                  {` `}
                </span>
              </footer>
            </Col>
          </Row>
        </Container>
      </>
    )}
  />
)

export default Layout
