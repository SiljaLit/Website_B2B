import React from "react"
import { Row, Col, Container, Button } from "react-bootstrap"

import Layout from "../components/layout"
import Seo from "../components/seo"
import "../styles/index.css"
import "../styles/blog.css"

import rect_placeholder from "../images/rect.jpg"

import silja from '../images/team_avatars/silja.png'


const LetterFromFounder = () => (
  <Layout pageInfo={{ pageName: "letter-from-founder" }}>
    <Seo title="Letter from the Founder" keywords={[`equoogame`, `equoo`, `mental health`]} />
    <Container className="text-center">
    <Row className="bg-white" style={{paddingLeft: '0', marginLeft: '0', paddingTop: "15px"}}>
        <Col md="9" className="text-center">
          <h1>Letter of the Founder</h1>
          <p>One in three adults between the ages of 18-34 is struggling with mental health issues. As a result, much of the young talent that is 
              entering the workforce every day is lacking the mental and emotional skills they need to perform at their best. This negatively impacts 
              their daily engagement with work, presence at the office and ultimately, their value to their employer.
        </p>
        <p>Depression and anxiety in young adults are on the rise, growing at a faster rate than in any other age group. Since 2013, there has been a 47% increase in the number of young adults diagnosed with depression. A recent study by UK Youth found that young adults spend an average of 6 hours a day in a state of stress. Providing young adults 
            with the tools they need to cope with stressors at work is a matter of critical importance.</p>
        </Col>
        <Col md="3">
        <img src={silja} style={{width: "256px"}} alt="founder placeholder" ></img>
        </Col>
    </Row>
    <Row className="bg-white my-1" style={{paddingLeft: '0', marginLeft: '0', paddingTop: "15px"}}>
        <Col md="3">
        <img src={rect_placeholder} style={{width: "256px"}} alt="founder placeholder" ></img>
        </Col>
        <Col md="9" className="text-center">
          <p>How do you equip an entire generation with the emotional and mental tools they need to thrive at work and in their personal lives? Thus far, concerned employers have invested millions in scientifically unsubstantiated wellbeing solutions; ranging from wellness platforms and meditation apps to office perks. Meanwhile, young adults wishing to take their 
              mental wellbeing into their own hands typically find themselves waiting six months or more for access to psychological ‘talking therapies’.
        </p>
        </Col>
    </Row>

    <Row className="bg-white my-1" style={{paddingLeft: '0', marginLeft: '0', paddingTop: "15px"}}>
        <Col md="9" className="text-center">
          <p>What if it were possible to target mental and behavioural outcomes in young adults through the format of a game? Teaming up with world-leading academics and mental health professionals, we have created an evidence-based emotional fitness game specifically designed to address the emotional and behavioural challenges typically faced by 18 to 34-year-olds. We have pinpointed the critical skills lacking in young adults who struggle to function at their best in their personal and professional lives. Our mobile app, 
              developed by a team of world-leading game designers, teaches these critical skills in an approachable and enjoyable format.
        </p>
        <p>
            It has been clinically proven that deficiency in critical skills is linked to a host of mental health impacts and behavioural issues.
        </p>
        </Col>

        <Col md="3">
        <img src={rect_placeholder} style={{width: "256px"}} alt="founder placeholder" ></img>
        </Col>
    </Row>

    <Row className="bg-white my-1" style={{paddingLeft: '0', marginLeft: '0', paddingTop: "15px"}}>
        <Col md={{ span: 6, offset: 3 }} className="text-center">
            <Row>
            <h1>RESILIENCE</h1>
            <p>Lack of resilience is the single most impactful factor leading to mental ill-health.</p>
            </Row>
            <Row>
            <h1>ANXIETY AND DEPRESSION</h1>
            <p>Suffering from Anxiety and/or Depression is the number one cause of absenteeism.</p>
            </Row>
            <Row>
            <h1>INTERPERSONAL RELATIONSHIP SKILLS</h1>
            <p>Lacking the skills needed to form and maintain relationships leads to poor performance at work, troubled interactions with colleagues and absenteeism.</p>
            </Row>
            <Row>
            <h1>PERSONAL GROWTH</h1>
            <p>Lacking the ability to set goals and perform unpleasant or uninteresting duties has a huge impact on both voluntary turnover and absenteeism.</p>
            </Row>
        </Col>
    </Row>

    <Row className="bg-white my-1" style={{paddingLeft: '0', marginLeft: '0', paddingTop: "15px"}}>
        <Col md="3">
        <img src={rect_placeholder} style={{width: "256px"}} alt="founder placeholder" ></img>
        </Col>
        <Col md="9" className="text-center">
          <p>A 5-week clinical trial (3-armed RTC) found that playing the eQuoo game not only significantly improved mental wellbeing but resulted in an 
              effect three times greater than that of an antidepressant. By using psychological principles that engage emotional bids, storytelling 
              and gamification, eQuoo has achieved adherence rates of up to 90%, tackling the high drop off rates that plague most mobile health services.
        </p>
        </Col>
    </Row>

    <Row className="bg-white my-1" style={{paddingLeft: '0', marginLeft: '0', paddingTop: "15px"}}>
        <Col md="9" className="text-center">
          <p>eQuoo is the leading evidence-based mobile prevention and early intervention tool that improves the emotional fitness of 18 - 34 year-olds. 
              As an employer, you can continue to apply traditional, reactive and scientifically unsubstantiated interventions. However, to truly improve 
              the critical emotional and mental skills of your young employees, you need a program that is clinically proven. We built eQuoo for this 
              reason: we are here to help you support the population who need help, thus unlocking their full potential.
        </p>
        </Col>

        <Col md="3">
        <img src={rect_placeholder} style={{width: "256px"}} alt="founder placeholder" ></img>
        </Col>
    </Row>

    <Row className="bg-white my-1" style={{paddingLeft: '0', marginLeft: '0', paddingTop: "15px"}}>
        <Col md="3">
        <img src={silja} style={{width: "128px"}} alt="founder placeholder" ></img>
        </Col>
        <Col md="9" className="text-center">
            <h1>CLINICAL PSYCHOLOGIST</h1>
          <p>
              "Young adults matter: you have the power to give them the intervention they need, in the format they want."
        </p>
        <p>CEO and Founder of PsycApps</p>
        </Col>
    </Row>
    </Container>
  </Layout>
)

export default LetterFromFounder
