import React from 'react';
import { Card, Row, Col, Container } from 'reactstrap';
import Passion from '../../images/be-the-boss-passion.jpg';

const CriteriaRequirement = () => {
  return (
    <Container>
      <Card>
        <div className="card-header">
          <h4>Intern criteria requirements:</h4>
        </div>
        <div className="card-body">
          <Row>
            <Col className="col-sm-6">
              <ul className="mt-2 px-3">
                <li>16-24 years old</li>
                <li>Qualify as low to moderate income</li>
                <li>Part of a demographic group underrepresented in entrepreneurship including women and minorities</li>
                <li>Does not have access to a computer at home</li>
                <li>Does not have access to entrepreneurial resources from a family network</li>
              </ul>
            </Col>
            <Col className="col-sm-6 text-center py-auto">
              <img src={Passion} alt='passion' width="80%" height="80%" />
            </Col>
          </Row>
        </div>
      </Card>
    </Container>
  )
}
export default CriteriaRequirement;

