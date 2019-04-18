import React from 'react';
import Business from '../../images/be-the-boss-business.jpg';
import { Row, Col, Button } from 'reactstrap';
import './HeaderImg.css';

const HeaderLogo = () => {
  return (
    <div className="JumbotronImg py-5">
      <Row>
        <Col className="col-sm-12 py-3">
          <img className="idea" src={Business} alt='icon' width="30%" height="80%" />
        </Col>
      </Row>
      <Row>
        <Col className="col-sm-12 "><Button className="btn btn-info text-white">Support Our Work</Button></Col>
      </Row>
    </div >
  )
}



export default HeaderLogo;