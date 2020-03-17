import React from 'react'
import Fade from 'react-bootstrap/Fade'
import Image from 'react-bootstrap/Image'

const Thumbnail = ({ id, alt, size }) =>
  <div className={`thumbnail ${size ? size : ''}`}>
    <Fade in={true} appear={true}>
      <a href={`image/${id}`}>
        <Image
          className="thumbnail-image"
          src={`http://seanbphillips.com.s3.amazonaws.com/site_assets/thumbs/${id}.jpg`}
          alt={alt}
          fluid
        />
      </a>
    </Fade>
  </div>

export default Thumbnail
