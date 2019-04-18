import React from "react"
import 'bootstrap/dist/css/bootstrap.css'
import { Container, Row } from 'reactstrap'
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import PhotoSlider from './indexComponents/PhotoSlider'
import IntroParagraph from "./indexComponents/IntroParagraph";
import BusinessResourceLink from "./indexComponents/BusinessResourceLink";
import HeaderLogo from "./indexComponents/HeaderLogo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div>
      <div className="text-center">
        <HeaderLogo />
      </div>
      <Row className="mb-2 bg-primary text-white p-3">
        <div className="col-lg-12">
          <BusinessResourceLink />
        </div>
      </Row>
      <Container>
        <Row className="my-3 p-3">
          <div className="col-lg-12">
            <IntroParagraph />
          </div>
        </Row>
        <Row className="m-auto">
          <div className="col-lg-12 p-5">
            <PhotoSlider />
          </div>
        </Row>
      </Container>
    </div>

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>

  </Layout>
)

export default IndexPage
