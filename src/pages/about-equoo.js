import React from "react"
import "../styles/about.css"

import { Row, Col, Container, Button } from "react-bootstrap"

import Layout from "../components/layout"
import Seo from "../components/seo"

import img_placeholder from "../images/placeholder.png"

import android_store from "../images/android.png"
import apple_store from "../images/apple-1.png"

const AboutPage = () => (
  <Layout pageInfo={{ pageName: "about-equoo" }}>
    <Seo title="About eQuoo" />
    <Container className="text-center">
    <Row className="bg-white" style={{paddingLeft: '0', marginLeft: '0'}}>
        <Col md="12">
          <h1 className='text-center'>The Game that is more than just a Game </h1>
        </Col>
    </Row>
      <Row className="justify-content-center bg-white" style={{paddingBottom: "30px"}}>
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
      <Row className="justify-content-center my-1 bg-white" style={{paddingTop: "50px", paddingBottom: "50px"}}>
        <Col md="6">
          <Row>
            <img src={img_placeholder} alt="circle placeholder" className="about-main-image"></img>
          </Row>
          <Row >
            <Col md="6" style={{paddingTop: "15px"}}>
            <img src={apple_store} alt="circle placeholder" ></img>
            </Col>
            <Col md="6" style={{paddingTop: "15px"}}>
            <img src={android_store} alt="circle placeholder" ></img>
            </Col>
          </Row>
        </Col>
        <Col md="6">
          <Row style={{paddingBottom: "15px"}} id="game-details">
            <Col md="4">
              <img src={img_placeholder} alt="circle placeholder" className="about-main-image-small"></img>
            </Col>
            <Col md="8">
              <h1>Build your avatar</h1>
              <p>Transfer yourself into eQuoo by setting up your avatar. You can look like yourself or create a whole new Character!</p>
            </Col>
          </Row>
          <Row style={{paddingBottom: "15px"}}>
            <Col md="4">
              <img src={img_placeholder} alt="circle placeholder" className="about-main-image-small"></img>
            </Col>
            <Col md="8">
              <h1>Collect Gem Shards</h1>
              <p>Each gem shard represents a psychological skill that allows you to deal with whatever life throws at you</p>
            </Col>
          </Row>
          <Row >
            <Col md="4">
              <img src={img_placeholder} alt="circle placeholder" className="about-main-image-small"></img>
            </Col>
            <Col md="8">
              <h1>Wellbeing Check</h1>
              <p>Chat with Joy in our interactive chatbot and get a real-time view on how you're doing and how you're progressing.</p>
            </Col>
          </Row>
        
        </Col>
      </Row>
      <Row className="justify-content-center my-1 bg-white">
        <Col md="6" offset="2">
          <h1>How about your Emotional Health?</h1>
          <p>Answer these 10 questions to get an understanding of where you stand.</p>
          <Button>Test now</Button>
        </Col>
      </Row>
      <Row className="justify-content-center my-1 bg-white" style={{paddingTop: "50px", paddingBottom: "50px"}}>
        <Col md="6">
          <Row>
            <h1>The only game out there that Boosts your Emotional Health</h1>
            <p style={{paddingTop: "15px"}}>What is Emotional Health?</p>
            <p>Emotional Health is the ability to manage life's challenges in a positive and resilient way. By improving your emotional health, you'll reduce your vulnerability 
              to anxiety and depression.
            </p>
            <p>We've worked hard to create an enjoyable, engaging and exciting way to improve your emotional health by tapping into skills to boost the 5 most important dimensions.</p>
          </Row>
          <Row >
            <Col md="2" style={{paddingTop: "15px"}}>
              <img src={img_placeholder} alt="circle placeholder" style={{width: "64px", height: "64px"}}></img>
            </Col>
            <Col md="10" style={{paddingTop: "15px"}}>
              <h1 style={{fontSize: "18px"}}>Resilience</h1>
              <p style={{fontSize: "12px"}}>The bounce back skill: Learn how to overcome whatever life throws at you, from heartache to layoff.</p>
            </Col>
          </Row>
        </Col>
        <Col md="6">
          <Row style={{paddingBottom: "15px"}} id="game-details">
            <Col md="2" style={{paddingTop: "15px"}}>
              <img src={img_placeholder} alt="circle placeholder" style={{width: "64px", height: "64px"}}></img>
            </Col>
            <Col md="10" style={{paddingTop: "15px"}}>
              <h1 style={{fontSize: "18px"}}>Relationship skills</h1>
              <p style={{fontSize: "12px"}}>Have you been ghosted one time too many, or are you not making friends easily? Our skills have you covered.</p>
            </Col>
          </Row>
          <Row style={{paddingBottom: "15px"}} id="game-details">
            <Col md="2" style={{paddingTop: "15px"}}>
              <img src={img_placeholder} alt="circle placeholder" style={{width: "64px", height: "64px"}}></img>
            </Col>
            <Col md="10" style={{paddingTop: "15px"}}>
              <h1 style={{fontSize: "18px"}}>Personal growth</h1>
              <p style={{fontSize: "12px"}}>Rise to any challenge and emerge a stronger, better you - personal growth is all about striving.</p>
            </Col>
          </Row>
          <Row style={{paddingBottom: "15px"}} id="game-details">
            <Col md="2" style={{paddingTop: "15px"}}>
              <img src={img_placeholder} alt="circle placeholder" style={{width: "64px", height: "64px"}}></img>
            </Col>
            <Col md="10" style={{paddingTop: "15px"}}>
              <h1 style={{fontSize: "18px"}}>Anti depression</h1>
              <p style={{fontSize: "12px"}}>Depression is often described as feeling listless, unmotivated, flat and sad. Our skills train your brain to see the bright side.</p>
            </Col>
          </Row>
          <Row style={{paddingBottom: "15px"}} id="game-details">
            <Col md="2" style={{paddingTop: "15px"}}>
              <img src={img_placeholder} alt="circle placeholder" style={{width: "64px", height: "64px"}}></img>
            </Col>
            <Col md="10" style={{paddingTop: "15px"}}>
              <h1 style={{fontSize: "18px"}}>Anti anxiety</h1>
              <p style={{fontSize: "12px"}}>Sweaty palms, sleeplessness, irritability and worry can be a thing of the past.</p>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="justify-content-center my-1 bg-white">
        <Col md="6" offset="2">
          <h1>EQUOO is based on scientific facts</h1>
          <p>Take a look at our Clinical Research</p>
          <Button>Click here!</Button>
        </Col>
      </Row>
      <Row className="justify-content-center my-1 bg-white" style={{paddingTop: "50px", paddingBottom: "50px"}}>
        <Col md="6">
          <Row>
            <img src={img_placeholder} alt="slideshow placeholder" className="about-main-image"></img>
          </Row>
        </Col>
        <Col md="6" >
          <h1>Ready to go?</h1>
          <p>Immerse yourself into the strory, learn a psychological skill in the game's mental dojo and embark on an 
            interactive story where you have to use your new skills to level up in the game - and in life.
          </p>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default AboutPage
