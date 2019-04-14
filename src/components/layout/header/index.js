import {
  Container,
  SmallLogo,
  Logo,
  Menu,
  Nav,
  StyledImg
  // Spacer,
} from "./style"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
// import Icon from '../Icon/'
// import Image from "../image"
import btbLogo from "../../../images/bethebossicon.jpg"
import MenuItem from "./menuItem"

const Header = () => (
  <Nav>
    <Container>
      {/* <SmallLogo>
        <Link to="/">
          <img alt="Be The Boss" src={btbLogo} />
        </Link>
      </SmallLogo> */}
      <Logo>
        <Link to="/">
          <StyledImg alt="Be The Boss" src={btbLogo} />
        </Link>
      </Logo>
      {/* <Spacer /> */}
      <Menu>
        <MenuItem to="/about">About</MenuItem>
        <MenuItem to="/team">Team</MenuItem>
        <MenuItem to="/get-involved">Get Involved</MenuItem>
        <MenuItem to="/events">Events</MenuItem>
      </Menu>
    </Container>
  </Nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
