import React from "react"
import { Row, Col, Container, Button } from "react-bootstrap"

import Layout from "../components/layout"
import Seo from "../components/seo"
import "../styles/index.css"
import "../styles/blog.css"

import rect_placeholder from "../images/rect.jpg"


const BlogPage = () => (
  <Layout pageInfo={{ pageName: "blog" }}>
    <Seo title="Blog" keywords={[`equoogame`, `equoo`, `mental health`]} />
    <Container className="text-center">
    <Row noGutters className="bg-full" style={{paddingLeft: '0', marginLeft: '0'}}>
        <Col md="12" className="text-center">
          <ul className="blog-ul">
              <li className="blog-li">All</li>
              <li className="blog-li">Emotional Fitness</li>
              <li className="blog-li">Emotional Intelligence</li>
              <li className="blog-li">Equoo Game</li>
              <li className="blog-li">Mental Health </li>
              <li className="blog-li">Uncategorized</li>
          </ul>
        </Col>
    </Row>
    <Row className="bg-white" style={{paddingLeft: '0', marginLeft: '0'}}>
        <Col md="6">
        <img src={rect_placeholder} style={{width: "300px"}} alt="rect placeholder" ></img>
        <h1>Lorem ipsum</h1>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore 
            magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, 
            no sea takimata sanctus est Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet…
        </p>
        <p>Read more</p>
        </Col>
        <Col md="6">
        <img src={rect_placeholder} style={{width: "300px"}} alt="rect placeholder" ></img>
        <h1>Lorem ipsum</h1>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore 
            magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, 
            no sea takimata sanctus est Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet…
        </p>
        <p>Read more</p>
        </Col>
    </Row>
    <Row className="bg-white" style={{paddingLeft: '0', marginLeft: '0'}}>
        <Col md="6">
        <img src={rect_placeholder} style={{width: "300px"}} alt="rect placeholder" ></img>
        <h1>Lorem ipsum</h1>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore 
            magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, 
            no sea takimata sanctus est Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet…
        </p>
        <p>Read more</p>
        </Col>
        <Col md="6">
        <img src={rect_placeholder} style={{width: "300px"}} alt="rect placeholder" ></img>
        <h1>Lorem ipsum</h1>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore 
            magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, 
            no sea takimata sanctus est Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet…
        </p>
        <p>Read more</p>
        </Col>
    </Row>
    <Row className="bg-white mb-1" style={{paddingLeft: '0', marginLeft: '0'}}>
        <Col md="12" className="text-left">
        <Button>SHOW MORE ARTICLES</Button>
        </Col>
    </Row>
    </Container>
  </Layout>
)

export default BlogPage
