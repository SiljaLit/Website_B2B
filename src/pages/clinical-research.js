import React from "react"
import { Row, Col, Container } from "react-bootstrap"

import Layout from "../components/layout"
import Seo from "../components/seo"
import "../styles/index.css"


const ResearchPage = () => (
  <Layout pageInfo={{ pageName: "clinical-research" }}>
    <Seo title="Clinical Research" keywords={[`equoogame`, `clinical research`, `mental health`]} />
    <Container className="text-center">
    <Row className="bg-white" style={{paddingLeft: '0', marginLeft: '0'}}>
        <Col md="12">
          <p>PsycApps, the company behind eQuoo the Emotional Fitness Game, is aware of the great responsibility that comes along with designing and 
            distributing mental wellbeing and mental health products. Everything we develop is based on studies published in peer-reviewed journals and we 
            have conducted multiple clinical trials with eQuoo and our other product, PsycApps. All studies conducted by Psychologist Silja Litvin, 
            have been approved through the Ethics Committee of Ludwig Maximilian University, and will be published in open-source peer-reviewed journals for all to read.</p>
        </Col>
    </Row>
    <Row className="bg-white" style={{paddingLeft: '0', marginLeft: '0'}}>
        <Col md="12" style={{background: "#E0E0E0"}}>
          <p style={{paddingTop: "15px"}}>3. Litvin, Silja, Markus A. Maier, Stefan Lüttke, Rob Saunders. (2020). Gamification as an approach to improve resilience 
            and reduce attrition in mobile mental health interventions: A randomized controlled trial</p>
        </Col>
    </Row>

    <Row className="bg-white" style={{paddingLeft: '0', marginLeft: '0'}}>
        <Col md="12" style={{background: "#E0E0E0"}}>
          <p style={{paddingTop: "15px"}}>1. Litvin, Silja & Markus, Maier. (2019). How mHealth programmes can treat depression: A randomised controlled trial.</p>
        </Col>
    </Row>

    <Row className="bg-white " style={{paddingLeft: '0', marginLeft: '0'}}>
        <Col md="12" style={{background: "#E0E0E0"}}>
          <p style={{paddingTop: "15px"}}>2. Litvin, Silja. (2019). A review on Digital Mental Health Applications, PsycApps and eQuoo. Integrative Clinical Medicine.</p>
        </Col>
    </Row>
    
    </Container>
  </Layout>
)

export default ResearchPage
