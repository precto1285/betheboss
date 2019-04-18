import React from 'react'
import { Row, Col } from 'reactstrap'
import SdWf from '../../images/San-Diego-Workforce-Partnership.png';
import Vus from '../../images/vista-unified-school-district.jpg';

const PhotoSlider = () => {
  return (
    <div>
      <Row className="p-2">
        <Col className="col-sm-6">
          <center><img src={Vus} alt='vus' width="55%" height="90%" /></center>
        </Col>
        <Col className="col-sm-6 pt-5">
          <img src={SdWf} alt='sdwf' height="70%" width="100%" />
        </Col>
      </Row>
    </div>
  )
}

export default PhotoSlider;