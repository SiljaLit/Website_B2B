import React from "react"
import { Row, Col, Container, Button } from "react-bootstrap"

import Layout from "../components/layout"
import Seo from "../components/seo"
import "../styles/index.css"

import circle_placeholder from "../images/circle.jpg"
import rect_placeholder from "../images/rect.jpg"

const IndexPage = () => (
  <Layout pageInfo={{ pageName: "index" }}>
    <Seo title="Equoo Game - Conquer Anxiety with eQuoo" keywords={[`gatsby`, `react`, `bootstrap`]} />
    <Container className="text-center">
    <Row className="justify-content-center my-3 bg-full">
        <Col md="4" offset="2">
          <h1>eQuoo, the #1 Emotional Health App</h1>
          <p>The only game out there that boosts your emotional health and helps you build your base level resilience from which you can release your AWESOME potential - all while playing a game.</p>
        </Col>
        <Col md="6">
        </Col>
      </Row>
      <Row className="justify-content-center my-3 bg-white">
        <Col md="3">
          <img src={circle_placeholder} alt="circle placeholder"></img>
        </Col>
        <Col md="9">
          <h1>Lorem ipsum</h1>
          <p>Answer these 10 questions to get an understanding of where you stand.</p>
        </Col>
      </Row>
      <Row className="justify-content-center my-3 bg-white">
        <Col md="6" offset="2">
          <h1>How about your Emotional Health?</h1>
          <p>Answer these 10 questions to get an understanding of where you stand.</p>
          <Button>Test now</Button>
        </Col>
      </Row>
      <Row className="justify-content-center my-3 bg-full">
        <Col md="6" offset="2">
          <h1>Try eQoo for Free</h1>
          <p>
          Download eQuoo, build your avatar and learn psychological skills while you go on
          interactive adventures - free trial.
          </p>
          <Button>Download</Button>
        </Col>
      </Row>
      <Row className="justify-content-center bg-white">
      <Col md="5">
      <img src={rect_placeholder} alt="circle placeholder"></img>
        </Col>
        <Col md="7">
          <h1>Recent blog</h1>
          <p>
          Learn more about everything surrounding emotional health, resilience and mental health on our
          blog.
          </p>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default IndexPage
