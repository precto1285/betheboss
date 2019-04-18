import React from 'react'
import { Row, Col } from 'reactstrap'
import SdWf from '../../images/San-Diego-Workforce-Partnership.png';
import Vus from '../../images/vista-unified-school-district.jpg';

const PhotoSlider = () => {
  return (
    <Row>

      <Col className="col-sm-6">
        <img src={Vus} alt='vus' />
      </Col>
      <Col className="col-sm-6 pt-5">
        <img src={SdWf} alt='sdwf' />
      </Col>
    </Row>
  )
}

export default PhotoSlider;