import React from "react"
import { Link } from "gatsby"
import {Carousel} from "react-responsive-carousel"
import Layout from "../components/layout"

import "react-responsive-carousel/lib/styles/carousel.css"
import "./index.css"

import IncubatorGroup from '../images/incubator-group.jpg'
import RaceSpacePlace from '../images/race-space-place.jpg'

const IndexPage = () => (
  <Layout>
    <Carousel 
      showArrows={true} 
      autoPlay={true}
      showThumbs={false}
      stopOnHover={true}
      infiniteLoop={true}
      showStatus={false}
      dynamicHeight={true}
      transitionTime={0}>
      <div>
        <img src={RaceSpacePlace} />
        <div className="slideTitle">
          2019–2020 AADHum Scholars Program
        </div>
      </div>
      <div>
        <img src={IncubatorGroup} />
        <div className="slideTitle">
          Incubator group.
        </div>
      </div>
    </Carousel>
  </Layout>
)

export default IndexPage
