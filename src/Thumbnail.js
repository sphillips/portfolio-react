import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Fade from 'react-bootstrap/Fade';
import Image from 'react-bootstrap/Image';

function Thumbnail(props) {
  return (
    <Fade in={true} appear={true}>
      <a href={`image/${props.img_id}`}><Image src={props.url} alt={props.alt} fluid /></a>
    </Fade>
  );
}

export default Thumbnail;
