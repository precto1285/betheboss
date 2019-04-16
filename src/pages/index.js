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
    <h1>Be The Boss Program</h1>
    <Container>
      <Row className="my-3">
        <p>Our Be The Boss Internship Program transforms youth and young adults (ages 16-24) into confident and successful  entrepreneurs. </p>
      </Row>
      <Row>
        <p>Through our six-week program, interns generate business ideas, conduct market research, write business plans, pitch to a panel of investors, and launch their very own businesses.</p>
      </Row>
      <Row className="my-5">
        <div className="col-lg-6">
          <Card>
            <div className="card-header">
              <h3>Intern criteria requirements:</h3>
            </div>
            <ul className="mt-4 px-3">
              <li>16-24 years old</li>
              <li>Qualify as low to moderate income</li>
              <li>Part of a demographic group underrepresented in entrepreneurship including women and minorities</li>
              <li>Does not have access to a computer at home</li>
              <li>Does not have access to entrepreneurial resources from a family network</li>
            </ul>
          </Card>
        </div>
        <div className="col-lg-6 mt-">
          <Card>
            <img src={Kids} />
            <div className="card-footer">
              <br />
              <center><Button className="btn btn-danger">Support Our Work</Button></center>
              <br />
            </div>
          </Card>
        </div>
      </Row>

      <Jumbotron>
        <h2> Receive free business resources and learn more about our incredible intern program by signing up.</h2>
      </Jumbotron>
    </Container>


    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
