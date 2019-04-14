import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Be The Boss Program</h1>
    <p>Marzipan wafer chupa chups wafer fruitcake candy. Croissant 
      jujubes cotton candy cake caramels jelly beans jelly beans 
      lemon drops cupcake. Dragée bear claw icing. Danish cheesecake 
      dessert donut icing jelly-o macaroon wafer muffin. Liquorice 
      marzipan caramels brownie carrot cake ice cream. Dragée tootsie 
      roll pie. Sweet roll oat cake marshmallow jelly beans.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
