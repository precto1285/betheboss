import React from 'react';
import Icon from '../../images/bethebossicon.png';
import { Row, Col, Button } from 'reactstrap';
import './HeaderImg.css';

const HeaderLogo = () => {
  return (
    <div className="JumbotronImg py-5">
      <Row>
        <Col className="py-3">
          <img className="idea" src={Icon} alt='icon' width="70%" height="100%" />
        </Col>
        <Col className="my-auto" >
          <Button className="btn btn-outline-info text-white">Support Our Work</Button>
        </Col>
      </Row>
    </div>
  )
}



export default HeaderLogo;