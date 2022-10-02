import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import Contact from "../../pages/contact";
import "../../styles/contact.css";
import { MdEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { FiFacebook, FiYoutube } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const contactUs = () => {
  return (
    <>
      <div className="cardsDiv">
        <Container fluid>
          <Container>
            <Row>
              <Col>
              <h1>CONTACT US</h1>
                <h6>Get in touch with us for prayers, testimonies, counselling and other support</h6>
                {/* <p>We are ready to meet with you</p> */}
                <br />
              </Col>
            </Row>
            <Row>
              <Col mt={3}>
                {/* Send a mail */}
                <div className="parentCards">
                  <div className="iconText">
                    <Container>
                      <MdEmail size={80} color={"green"} />
                      <h5 className="email">Email</h5>
                    </Container>
                  </div>
                  <Container>
                    <div className="cardText">
                      <p>
                        <Container>
                          Send a mail to us and we will be glad to reach out to
                          you, as soon as possible. And help in any possible
                          way.
                        </Container>
                      </p>
                    </div>
                  </Container>
                  <div className="cardBtn">
                    <Container>
                      <button className="cardBtns">Email us</button>
                    </Container>
                  </div>
                </div>
              </Col>
              <Col>
                {/* Call us */}
                <div className="parentCards">
                  <div className="iconText">
                    <Container>
                      <FiPhoneCall size={80} color={"green"} />
                      <h5 className="email">Call Us</h5>
                    </Container>
                  </div>
                  <Container>
                    <div className="cardText">
                      <p>
                        <Container>
                          <p>
                            If you desire to speak with us, feel free to give us
                            a call. We will be also glad to hear from you.{" "}
                          </p>
                        </Container>
                      </p>
                    </div>
                  </Container>
                  <div className="cardBtn">
                    <Container>
                      <button className="cardBtns">+234 000 999 777 1</button>
                    </Container>
                  </div>
                </div>
              </Col>
              <Col>
                {/* Locate us */}
                <div className="parentCards">
                  <div className="iconText">
                    <Container>
                      <GoLocation size={80} color={"green"} />
                      <h5 className="email">Locate Us</h5>
                    </Container>
                  </div>
                  <Container>
                    <div className="cardText">
                      <p>
                        <Container>
                          <p>
                            You can worship with us in any of our worship center
                            near you. We will be glad to have you around and we
                            just God that you will be greatly blessed. <p> </p>
                          </p>
                        </Container>
                      </p>
                    </div>
                  </Container>
                  <div className="cardBtn">
                    <Container>
                      <button className="cardBtnsF">Find us</button>
                    </Container>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </Container>
      </div>

      {/* Follow Us on Social Media */}
      <div className="followUsCards">
        <Container fluid>
          <Container>
            <div className="followus">
              <div className="contactContent">
                <h1>Follow Us</h1>
                <p>On all of our available social meida handles</p>
              </div>

              <div className="socialMedia">
                <Row>
                  <Col> <a href="https://fb.com"> < FiFacebook size={30} color={"green"} /></a> </Col>
                  <Col> <a  href="https://instgram.com">  < FaInstagram size={30} color={"green"} /></a> </Col>
                  <Col> <a href="https://youtube.com">  <FiYoutube size={30} color={"green"} /> </a></Col>
                </Row>
            
          
              </div>
            </div>
          </Container>
        </Container>
      </div>
      {/* Write to us */}
    </>
  );
};

export default contactUs;
