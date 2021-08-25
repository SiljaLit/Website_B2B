import React from "react"
import { Row, Col, Container, Form, Button } from "react-bootstrap"

import Layout from "../components/layout"
import Seo from "../components/seo"
import "../styles/index.css"

import LeafletMap from "../components/leafletmap"


const ContactPage = () => (
  <Layout pageInfo={{ pageName: "contact-us" }}>
    <Seo title="Contact Us" keywords={[`equoogame`, `clinical research`, `mental health`]} />
    <Container>
    <Row className="bg-white" style={{paddingLeft: '0', marginLeft: '0'}}>
        <Col md="12" className="text-center">
          <h1 className="text-center">Contact Us</h1>
        </Col>
    </Row>
        <Row noGutters className="bg-white">
        {typeof window !== 'undefined' &&
        <LeafletMap
          position={[51.49913112002332, -0.11607405915134195]}
          zoom={13}
          markerText={"PSYCAPPS LTD"}
        />
    }
        </Row>
        <Row className="bg-white mb-1" style={{paddingTop: "15px"}}>
            <Col md="6" style={{background: "#D0D0D0", padding: "20px", paddingLeft: "20px"}}>
                <Row>
                    <h1>Get In Touch</h1>
                </Row>
                <Row>
                    <p>PsycApps, Health Foundry, 1 Royal Street, SE17LL London UK</p>
                </Row>
                <Row>
                    <p>info@equoogame.com</p>
                </Row>
            </Col>
            <Col md="6">
            <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control type="email" placeholder="Your name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control type="email" placeholder="Subject" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control type="email" placeholder="Your email address" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" placeholder="Your message" rows={3} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
            </Col>
        </Row>
    </Container>
  </Layout>
)

export default ContactPage
