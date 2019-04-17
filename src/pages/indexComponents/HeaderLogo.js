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
          <Button ClassName="btn-lg m-auto">Enroll Now!</Button>
        </Col>
      </Row>
    </Jumbotron>


  )
}



export default HeaderLogo;