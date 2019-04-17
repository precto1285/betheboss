import React from 'react'
import { Row, Col } from 'reactstrap'
import SdWf from '../../images/San-Diego-Workforce-Partnership.png';
import Vus from '../../images/vista-unified-school-district.jpg';
import Sdth from '../../images/san-diego-tech-hub.png';

const PhotoSlider = () => {
  return (
    <Row>
      <Col className="col-sm-4 pt-5">
        <img src={Sdth} alt='sdth' />
        <center><p>With sponsorships from:</p></center>
      </Col>
      <Col className="col-sm-4">
        <img src={Vus} alt='vus' />
      </Col>
      <Col className="col-sm-4 pt-5">
        <img src={SdWf} alt='sdwf' />
      </Col>
    </Row>
  )
}

export default PhotoSlider;