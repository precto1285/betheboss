import React from 'react'
import { UncontrolledCarousel } from 'reactstrap'
import SdWf from '../../images/San-Diego-Workforce-Partnership.png';
import Vus from '../../images/vista-unified-school-district.jpg';

const items = [

  { src: SdWf },
  { src: Vus },
]

const PhotoSlider = () => {
  return (
    <UncontrolledCarousel items={items} />
  )
}

export default PhotoSlider;