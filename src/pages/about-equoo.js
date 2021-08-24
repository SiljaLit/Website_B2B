import React from "react"
import { Link } from "gatsby"

import { Row, Col, Container, Button } from "react-bootstrap"

import Layout from "../components/layout"
import Seo from "../components/seo"

import circle_placeholder from "../images/circle.jpg"
import rect_placeholder from "../images/rect.jpg"

const SecondPage = () => (
  <Layout pageInfo={{ pageName: "about-equoo" }}>
    <Seo title="About eQuoo" />
    <Container className="text-center">
    <Row className="bg-white" style={{paddingLeft: '0', marginLeft: '0'}}>
        <Col md="12">
          <h1 className='text-center'>The Game that is more than just a Game </h1>
        </Col>
    </Row>
      <Row className="justify-content-center bg-white">
        <Col md="6">
          <p>
              Over the years, all the greed, corruption and pain in the world has gelled into The Quavering, a being of power and darkness… 

              It’s sole goal is to snuff out our inner light that brings us joy and happiness 

              But there is hope: The Lodestars… Brave people who, over the ages, have set on a path of emotional and psychological transformation to keep the light of the world alive… </p>
        </Col>
        <Col md="6">
          <p>
            Until now, it has looked dire, but they might have found the tipping-point: YOU 

            Your Guide, Lodestar Joy, is offering you THE DIAL, a mystical device to travel through time on a quest to gather the 5 gems needed to fight The Quavering 

            Dive into a magical world written by award-winning DC and Marvel writer Arie Kaplan - </p>
        </Col>
      </Row>
      <Row className="justify-content-center bg-white">
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

export default SecondPage
