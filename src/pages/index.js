import React from "react"
import { Link } from "gatsby"
import 'bootstrap/dist/css/bootstrap.css'
import { Container, Row } from 'reactstrap'
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Kids from '../images/be-the-boss-business.jpg'
import PhotoSlider from './indexComponents/PhotoSlider'
import IntroParagraph from "./indexComponents/IntroParagraph";
import CriteriaRequirements from "./indexComponents/CriteriaRequirements";
import BusinessResourceLink from "./indexComponents/BusinessResourceLink";
import Sdth from "../images/san-diego-tech-hub.png";
import HeaderLogo from "./indexComponents/HeaderLogo";
const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div>
      <div className="my-5 text-center">
        <HeaderLogo />
      </div>

      <Row className="my-3 bg-light p-3">
        <div className="col-lg-6">
          <img src={Kids} width='100%' />
        </div>
        <div className="col-lg-6">
          <IntroParagraph />
        </div>
      </Row>

      <Row className="my-5  bg-primary text-white p-3">
        <div className="col-lg-12">
          <BusinessResourceLink />
        </div>
      </Row>

      <Container>
        <Row className="mb-5">
          <div className="col-lg-12">
            <CriteriaRequirements />
          </div>
        </Row>

        <Row>
          <div className="col-sm-8 my-auto">
            <Row>
              <img src={Sdth} width="100%" height="100%" />
            </Row>
          </div>
          <div className="col-sm-4">
            <PhotoSlider />
          </div>
        </Row>
      </Container>
    </div>

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
