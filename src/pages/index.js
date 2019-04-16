import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
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
