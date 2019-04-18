import React from 'react';
import Logo from '../../images/bethebossicon.png'
import { Row, Col, Button } from 'reactstrap';
import './HeaderImg.css';

const HeaderLogo = () => {
  return (
    <div className="JumbotronImg py-5">
      <Row className="mb-3">
        <Col className="col-sm-6 py-3">
          <img className="idea" src={Logo} alt='icon' width="70%" height="100%" />
        </Col>
      </Row>
      <Row>
        <Col className="col-sm-12 "><Button className="btn btn-info text-white">Support Our Work</Button></Col>
      </Row>
    </div>
  )
}



export default HeaderLogo;