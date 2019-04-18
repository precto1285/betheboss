import React from 'react';
import { Card, Row, Col } from 'reactstrap';
import Sdth from '../../images/san-diego-tech-hub.png';
import Business from '../../images/be-the-boss-business.jpg';

const IntroParagraph = () => {
  return (
    <Card>
      <div className="card-body py-5">
        <Row>
          <Col className="col-sm-6 pt-5"><p>Our Be The Boss Passionpreneurship Program transforms youth and young adults (ages 16-24) into confident and successful  entrepreneurs. </p>

            <p>Through our six-week program, interns generate business ideas, conduct market research, write business plans, pitch to a panel of investors, and launch their very own businesses.</p></Col>
          <Col className="col-sm-6"><img src={Business} alt='business' width="80%" height="90%" /></Col>
        </Row>
      </div>
      <div className="card-footer bg-light">
        <center><img src={Sdth} alt='sdth' width="60%" height="60%" /></center>
      </div>
    </Card>
  )
}

export default IntroParagraph;