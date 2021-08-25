import React from "react"
import "../styles/about.css"

import { Row, Col, Container, Button } from "react-bootstrap"

import Layout from "../components/layout"
import Seo from "../components/seo"

import silja from '../images/team_avatars/silja.png'
import vanessa from '../images/team_avatars/vanessa.png'
import steve from '../images/team_avatars/steve.png'

import adeline from '../images/team_avatars/adeline.png'
import will from '../images/team_avatars/will.png'
import maya from '../images/team_avatars/maya.png'

import markus from '../images/team_avatars/markus.png'
import keith from '../images/team_avatars/keith.png'
import fonagy from '../images/team_avatars/fonagy.png'

const TeamPage = () => (
  <Layout pageInfo={{ pageName: "team" }}>
    <Seo title="Team" />
    <Container className="text-center">
    <Row className="bg-white" style={{paddingLeft: '0', marginLeft: '0'}}>
        <Col md="12">
          <h1 className='text-center'>Team </h1>
          <p className='text-center'>Meet the experts behind eQuoo </p>
        </Col>
    </Row>
      <Row className="justify-content-center bg-white" style={{paddingBottom: "30px"}}>
        <Col md="4">
            <img src={silja} style={{width: "256px"}} alt="circle placeholder"></img>
            <h1 className='text-center' style={{fontSize: "24px", paddingTop: "10px"}}>Silja Litvin</h1>
            <p className='text-center' style={{fontSize: "16px"}}>CEO & Psychologist</p>
        </Col>
        <Col md="4">
        <img src={vanessa} style={{width: "256px"}} alt="circle placeholder"></img>
            <h1 className='text-center' style={{fontSize: "24px", paddingTop: "10px"}}>Vanessa Hirsch-Angus</h1>
            <p className='text-center' style={{fontSize: "16px"}}>COO of PsycApps</p>
        </Col>
        <Col md="4">
        <img src={steve} style={{width: "256px"}} alt="circle placeholder"></img>
            <h1 className='text-center' style={{fontSize: "24px", paddingTop: "10px"}}>Prof. Steve Pilling</h1>
            <p className='text-center' style={{fontSize: "16px"}}>Professor of Psychology, UCL</p>
        </Col>
      </Row>
      <Row className="justify-content-center bg-white" style={{paddingBottom: "30px"}}>
        <Col md="4">
            <img src={adeline} style={{width: "256px"}} alt="circle placeholder"></img>
            <h1 className='text-center' style={{fontSize: "24px", paddingTop: "10px"}}>Adeline Tushabe</h1>
            <p className='text-center' style={{fontSize: "16px"}}>Lead Unity Developer</p>
        </Col>
        <Col md="4">
        <img src={will} style={{width: "256px"}} alt="circle placeholder"></img>
            <h1 className='text-center' style={{fontSize: "24px", paddingTop: "10px"}}>Will Grant</h1>
            <p className='text-center' style={{fontSize: "16px"}}>Commercial Director</p>
        </Col>
        <Col md="4">
        <img src={maya} style={{width: "256px"}} alt="circle placeholder"></img>
            <h1 className='text-center' style={{fontSize: "24px", paddingTop: "10px"}}>Maya Rizk</h1>
            <p className='text-center' style={{fontSize: "16px"}}>Content and Marketing</p>
        </Col>
      </Row>
      <Row className="justify-content-center my-1 bg-full" style={{paddingTop: "50px", paddingBottom: "50px"}}>
        <Col md="12">
            <h1 className='text-center' style={{fontSize: "24px", paddingTop: "10px"}}>Our Clinical Advisory Board</h1>
        </Col>
      </Row>
      <Row className="justify-content-center bg-full mb-1" style={{paddingBottom: "30px"}}>
        <Col md="4">
            <img src={markus} style={{width: "256px"}} alt="circle placeholder"></img>
            <h1 className='text-center' style={{fontSize: "24px", paddingTop: "10px"}}>Prof. Markus Maier</h1>
            <p className='text-center' style={{fontSize: "16px"}}>Professor of Psychology and Head of the Research Unit Emotion and Motivation, LMU</p>
        </Col>
        <Col md="4">
        <img src={keith} style={{width: "256px"}} alt="circle placeholder"></img>
            <h1 className='text-center' style={{fontSize: "24px", paddingTop: "10px"}}>Keith Gibbs</h1>
            <p className='text-center' style={{fontSize: "16px"}}>Ex CEO of AXA PPP</p>
        </Col>
        <Col md="4">
        <img src={fonagy} style={{width: "256px"}} alt="circle placeholder"></img>
            <h1 className='text-center' style={{fontSize: "24px", paddingTop: "10px"}}>Prof. Peter Fonagy</h1>
            <p className='text-center' style={{fontSize: "16px"}}>Head of the Division of Psychology and Language Sciences, UCL</p>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default TeamPage
