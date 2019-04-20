import React from 'react';
import Logo from '../../images/bethebossicon.png'
import { Row, Col, Button } from 'reactstrap';
import './HeaderImg.css';

const HeaderLogo = () => {
  return (
    <div className="JumbotronImg py-5">
      <Row className="mb-4">
        <Col className="col-sm-6 py-3">
          <img className="idea" src={Logo} alt='icon' width="70%" height="100%" />
        </Col>
      </Row>
    </div>
  )
}



export default HeaderLogo;