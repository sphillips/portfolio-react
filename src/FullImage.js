import React from 'react'
import { useParams } from "react-router-dom"
import './FullImage.scss'
import Figure from 'react-bootstrap/Figure'
import Fade from 'react-bootstrap/Fade'
import Header from './Header'

function FullImage(props) {
  let { id } = useParams()
  let url = `http://seanbphillips.com.s3.amazonaws.com/site_assets/img/${id}.jpg`

  return (
    <div>
      <Header />
      <div className="portfolio-image-full text-center">
        <Figure>
          <Fade in={true} appear={true}><Figure.Image src={url} alt={props.alt} /></Fade>
          <Figure.Caption className="img-caption">
            Bristol Waterfront, November 2019.
        </Figure.Caption>
        </Figure>
      </div>
    </div>
  )
}

export default FullImage
