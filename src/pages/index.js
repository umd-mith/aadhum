import React from "react"
import { Link } from "gatsby"
import {Carousel} from "react-responsive-carousel"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "react-responsive-carousel/lib/styles/carousel.css"
import "./home.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    AADHUM Content!
    <Carousel showArrows={true} autoPlay showThumbs={false}
     stopOnHover infiniteLoop showStatus={false} dynamicHeight
     transitionTime={0}>
      <div>
        <img src="https://mith.umd.edu/aadhum/wp-content/uploads/sites/5/2017/02/race-space-place_events_rg.jpg"/>
        <div className="slideTitle">
          2019–2020 AADHum Scholars Program
        </div>
      </div>
      <div>
        <img src="https://mith.umd.edu/aadhum/wp-content/uploads/sites/5/2017/02/slide_incubator-group-2.jpg"/>
      </div>
    </Carousel>
  </Layout>
)

export default IndexPage
