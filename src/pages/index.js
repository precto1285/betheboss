import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Be The Boss Program</h1>
    <div>

      <p>Our Be The Boss Internship Program transforms youth and young adults (ages 16-24) into confident and successful  entrepreneurs. </p>

      <p>Through our six-week program, interns generate business ideas, conduct market research, write business plans, pitch to a panel of investors, and launch their very own businesses.</p>

      <h3>Intern criteria requirements:</h3>
      <ul>
        <li>16-24 years old</li>
        <li>Qualify as low to moderate income</li>
        <li>Part of a demographic group underrepresented in entrepreneurship including women and minorities</li>
        <li>Does not have access to a computer at home</li>
        <li>Does not have access to entrepreneurial resources from a family network</li>
      </ul>
      <br />
      <center><button className="red_button">Support Our Work</button></center>
      <br />
      <h2> Receive free business resources and learn more about our incredible intern program by signing up.</h2>
    </div>


    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
