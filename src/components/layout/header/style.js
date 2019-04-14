import styled from 'styled-components'
import { NAV_HEIGHT } from "../../../utils/constants"

export const StyledImg = styled.img`
  height: 80px;
`;

export const StyledHeader = styled.header`
    background: #DF6439;
    margin-bottom: 1.45rem;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap-reverse;
  height: fit-content;
  max-width: 1600px;
  width: 100%;
`

export const Logo = styled.div`
  background: #F7CD47;
  /* border-radius: 0 0 50px; */
  box-shadow: 1px 3px 3px rgba(255,255,255,0.2);
  height: ${NAV_HEIGHT};
  width: 350px;
  flex: 1;
  img {
    margin-bottom: 0;
  }
  /* @media (max-width: 1140px) {
    display: none;
  }
  @media (max-width: 900px) {
    display: block;
  }
  @media (max-width: 450px) {
    display: none;
    width: 100%;
  } */
`

export const Menu = styled.ul`
  background-color: #F7CD47;
  align-items: center;
  flex: 4;
  display: flex;
  flex-grow: 3;
  font-size: 2rem;
  height: ${NAV_HEIGHT};
  justify-content: stretch;
  list-style-type: none;
  margin: 0;
  min-width: 915px;
  text-align: center;
  @media(max-width: 900px) {
    display: none;
  }
`

export const Nav = styled.nav`
  background: ${props => props.theme.primary};
  color: #E06339;
  display: flex;
  height: ${NAV_HEIGHT};
  justify-content: center;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  transition: box-shadow 0.5s ease-in-out;
  z-index: 2;
  a {
    color: #E06339;
    display: block;
    text-decoration: none;
  }
  &.box-shadow {
    box-shadow:
      0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14),
      0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    transition: box-shadow 0.5s ease-in-out;
  }
`

export const SmallLogo = styled.div`
  img {
    height: ${NAV_HEIGHT};
    padding: 8px;
  }
  @media(min-width: 450px) {
    display: none;
  }
`

export const Spacer = styled.div`
  height: ${NAV_HEIGHT};
  width: 200px;
  @media(min-width: 450px) {
    display: none;
  }
`