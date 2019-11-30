import React from 'react';
import './App.css';
import './About.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Media from 'react-bootstrap/Media';
import Fade from 'react-bootstrap/Fade';

function About() {
  return (
    <div>
      <Header />
      <Container className="About">
        <Row>
          <Media>
            <Fade in={true} appear={true}>
                <img src="https://s3.amazonaws.com/vdr/site_assets/sean_phillips_headshot.jpg" width="400px" alt="Sean Phillips headshot" className="mr-3" />
            </Fade>
            <Media.Body className="about-copy">
              <p>Musician, photographer, and web developer living in Berlin.</p>
              <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
      ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
      tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
      Donec lacinia congue felis in faucibus.</p>
            </Media.Body>
          </Media>
        </Row>
      </Container>
    </div>
  );
}

export default About;
