import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Fade from 'react-bootstrap/Fade';
import Image from 'react-bootstrap/Image';

function Thumbnail(props) {
  const url = `https://seanbphillips.com.s3.amazonaws.com/site_assets/thumbs/${props.img_id}.jpg`;

  return (
    <Fade in={true} appear={true}>
      <a href={`image/${props.img_id}`}><Image src={url} alt={props.alt} fluid /></a>
    </Fade>
  );
}

export default Thumbnail;
