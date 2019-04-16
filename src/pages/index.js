import React from "react"
import { Link } from "gatsby"
import 'bootstrap/dist/css/bootstrap.css'
import { Container, Row, Jumbotron, Button, Card } from 'reactstrap'
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Kids from '../images/be-the-boss-business.jpg'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Container>
      <div className="my-5 text-dark text-center">
        <h1>Be The Boss Program</h1>
      </div>
      <Row className="my-3 bg-light p-3">
        <p>Our <span className="text-uppercase">Be The Boss Internship Program</span> transforms youth and young adults (ages 16-24) into confident and successful  entrepreneurs. </p>

        <p>Through our six-week program, interns generate business ideas, conduct market research, write business plans, pitch to a panel of investors, and launch their very own businesses.</p>
      </Row>

      <Row className="my-5">
        <div className="col-lg-6">
          <Card>
            <div className="card-header">
              <h4>Intern criteria requirements:</h4>
            </div>
            <div className="card-body">
              <ul className="mt-2 px-3">
                <li>16-24 years old</li>
                <li>Qualify as low to moderate income</li>
                <li>Part of a demographic group underrepresented in entrepreneurship including women and minorities</li>
                <li>Does not have access to a computer at home</li>
                <li>Does not have access to entrepreneurial resources from a family network</li>
              </ul>
            </div>
            <div className="card-footer">
              <Button className="btn-block btn-danger">Support Our Work</Button>
            </div>
          </Card>
        </div>
        <div className="col-lg-6 mt-5">
          <img src={Kids} />
        </div>
      </Row>
      <Jumbotron>
        <h2> Receive free business resources and learn more about our incredible intern program by signing up.</h2>
      </Jumbotron>
    </Container>



    <h1>Be The Boss Program</h1>
    <p>Intern Criteria for Be the Boss Program</p>
    <ul>
      <li>Between 16-24 years old</li>
      <li> Qualify as low to moderate income</li>
      <li>
        Part of a demographic group underrepresented in entrepreneurship
        including women and minorities
      </li>
      <li>Does not have access to a computer at home</li>
      <li>
        Does not have access to entrepreneurial resources from a family network
      </li>
    </ul>
    <p>Intern Expectations</p>
    <ul>
      <li>
        Interns should expect a total of at least 6 hours a week to successfully
        complete the program over the course of 8 weeks
      </li>
      <li>
        Interns will spend 2 hours a week actively participating in each session
        over the course of the 8 week (2 of the sessions will be a fun team
        building event and graduation)
      </li>
      <li>
        Interns will touch base with their mentor remotely for at least an hour
        a week to receive assistance and support on each week’s lessons
      </li>
      <li>
        Interns will be provided with a refurbished laptop in working condition
        for the duration of the program and will be expected to return the
        laptop at the end of the program or if the intern cannot for any reason
        complete the program
      </li>
    </ul>
    <p>Application</p> 
    <p>Name</p>
    <p>Age </p>
    <p>Why do you want to take part in this internship program?</p> 
    <p>Do you have any hobbies?</p> 
    <p>What do you like to do in your free time?</p>
    <p>What are you passionate about? How do you express your passion in your life?</p>
    <p>Name someone who you look at as a role model and explain why you see them in that way?</p> 
    <p>Are you prepared to devote at least 6 hours a week over the summer for 8 weeks in order 
      to successfully complete the program?
    </p> 
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
