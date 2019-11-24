import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function About() {
  return (
    <div className="About">
      <Header />
      <Container>
        <Row>
          <Col><img src="https://s3.amazonaws.com/vdr/site_assets/sean_phillips_headshot.jpg" width="600px" alt="Sean Phillips headshot"/></Col>
          <Col>I'm a musician, photographer, and web developer living in Berlin.</Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
