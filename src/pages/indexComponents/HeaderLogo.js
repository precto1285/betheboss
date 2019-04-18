import React from 'react';
import Business from '../../images/be-the-boss-business.jpg';
import { Row, Col, Button } from 'reactstrap';
import './HeaderImg.css';

const HeaderLogo = () => {
  return (
    <div className="JumbotronImg py-5">
      <Row>
        <Col className="col-sm-6 py-3">
          <img className="idea" src={Business} alt='icon' width="60%" height="90%" />
        </Col>
      </Row>
      <Row>
        <Col className="col-sm-4"><Button className="btn btn-info text-white">Support Our Work</Button></Col>
      </Row>
    </div>
  )
}



export default HeaderLogo;