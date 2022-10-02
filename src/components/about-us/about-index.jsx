import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import "../../styles/about.css";


const aboutIndex = () => {
  return (
    <div>
      <div>
        <Container fluid>
            <Container>
            <Row>
            <div className="aboutHead">
              <Col>
                {" "}
                <h1>About Us</h1>
                <h4>About us</h4>
                <h4>About us</h4>
              </Col>
            </div>
          </Row>
            </Container>
         
        </Container>
        <Container>
          <div className="aboutTitle">
            <h6>About Evangelical Bibile Ministries</h6>
          </div>
          <div>
            <p>
              RCCG Prague – Rehoboth Centre is an English-speaking Church that
              was inaugurated by the mandate of the Holy Spirit on the 31st of
              October 2010. It was established as a parish of Christ the
              Redeemer’s Ministries z.s (The Redeemed Christian Church of God).
              RCCG Prague – Rehoboth Centre is a home for all. A place of the
              undiluted word of God, prayers, and fellowship. A place where
              voices are raised together in intercession, and hands lifted in
              support of one another. A place where the Holy Spirit leads, and
              we follow. According to scripture (Genesis 26:22), Rehoboth means
              God has given us room to be fruitful in the land, therefore, we
              trust God by His word that you are already marching into
              fruitfulness as you join us. Join us for any of our services and
              experience the presence of God.
            </p>
          </div>

          <div>
            <Row>
                <Col><h6>Our Vission and Mission</h6></Col>
                <Col><h6>What we do</h6></Col>
                <Col><h6>Our Beliefs</h6></Col>
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default aboutIndex;
