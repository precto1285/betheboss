import React from 'react';
import Icon from '../../images/bethebossicon.png';
import { Jumbotron, Row, Col, Button } from 'reactstrap';
import './HeaderImg.css';

const HeaderLogo = () => {
  return (
    <Jumbotron className="bg-white JumbotronImg">
      <Row className="my-5">
        <Col className="py-3">
          <img className="idea" src={Icon} width="70%" height="70%" />
        </Col>
        <Col className="my-auto" >
          <Button className="btn-warning text-white">Support Our Work</Button>
        </Col>
      </Row>
    </Jumbotron>


  )
}



export default HeaderLogo;