// /**
//  * Layout component that queries for data
//  * with Gatsby's StaticQuery component
//  *
//  * See: https://www.gatsbyjs.org/docs/static-query/
//  */

// import React from "react"
// import PropTypes from "prop-types"
// import { StaticQuery, graphql } from "gatsby"

// import Header from '../header'
// import "./layout.css"

// const Layout = ({ children }) => (
//   <StaticQuery
//     query={graphql`
//       query SiteTitleQuery {
//         site {
//           siteMetadata {
//             title
//           }
//         }
//       }
//     `}
//     render={data => (
//       <>
//         <Header siteTitle={data.site.siteMetadata.title} />
//         <div
//           style={{
//             margin: `0 auto`,
//             maxWidth: 960,
//             padding: `0px 1.0875rem 1.45rem`,
//             paddingTop: 0,
//           }}
//         >
//           <main>{children}</main>
//           <footer>
//             © {new Date().getFullYear()}, Built with
//             {` `}
//             <a href="https://www.gatsbyjs.org">Gatsby</a>
//           </footer>
//         </div>
//       </>
//     )}
//   />
// )

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

// export default Layout

import React from "react"
// import PropTypes from "prop-types"
import { ThemeProvider } from "styled-components"
// import AppContext from "Utils/context"
// import { ToastContainer } from "react-toastify"
// import { library } from "@fortawesome/fontawesome-svg-core"
// import { faCaretDown, faMapMarker, faClock } from "@fortawesome/free-solid-svg-icons"
// import {
//   faLinkedin,
//   faFacebookSquare,
//   faTwitterSquare,
//   faSlack,
// } from "@fortawesome/free-brands-svg-icons"
// import Footer from "./footer"
import Header from "./header"
// import StayConnected from "../forms/stay-connected"
import { Wrapper, theme } from "./style"
// import "@fortawesome/fontawesome-svg-core/styles.css"
import "./layout.css"
// import "react-toastify/dist/ReactToastify.min.css"

// library.add(
//   faCaretDown,
//   faClock,
//   faFacebookSquare,
//   faLinkedin,
//   faMapMarker,
//   faSlack,
//   faTwitterSquare
// )

const Layout = ({ children, pageProps }) => (
  <ThemeProvider theme={theme}>
    {/* <AppContext.Provider value={{ path: pageProps.location.pathname }}> */}
      <div style={{ maxWidth: "100vw", overflowX: "hidden" }}>
        {/* <ToastContainer autoClose={6000} /> */}
        <Header />

        <Wrapper>{children}</Wrapper>
        {/* <StayConnected /> */}

        {/* <Footer /> */}
      </div>
    {/* </AppContext.Provider> */}
  </ThemeProvider>
)

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
//   pageProps: PropTypes.object.isRequired,
// }

export default Layout