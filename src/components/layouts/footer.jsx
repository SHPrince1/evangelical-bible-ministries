import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../styles/footer.css";

const footer = () => {
  return (
    <>
      <div className="footerParentDiv">
        <div className="footerHeader">
          <Container fluid>
            <Container>
                <div className="footerContent">
                <Row>
                <Col sm={12} lg={1}>
                  <a href="https://fb.com"><h5>Home</h5></a>
                </Col><br />
                <Col sm={12} lg={1}>
                  <a href="/about-us"> <p>About us</p></a>
                  <br />

                 
                 

      
                </Col>
                <Col sm={12} lg={4}>
                  <a href="/contact"><h5>Contact us</h5>  </a>
                  <br />
                  <Row>
                    <Col>
                     090 32 800 275
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      emailebm@enm.info
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      7 Bankole street Abule I jesha Yaba Lagos
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                     222 street maya ikd Maya Ikorodu 
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                    222 street maya ikd Maya Ikorodu 
                    </Col>
                  </Row>
                </Col>
                <Col sm={12} lg={3}>
                  <h5>Media</h5>
                  <br />
                  <Row>
                    <Col>
                    <a href="/article">   <h6> Articles</h6></a>
                     
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                    <a href="https://fb.com">   <h6> Gallery</h6></a>
                  
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                    <a href="https://abc.com">   <h6> Articles</h6></a>
                    </Col>
                  </Row>

                  
                </Col>
                <Col sm={12} lg={3}>
                  {" "}
                  <h5>Online Giving</h5>
                  <br />
                  <Row>
                    <Col>
                      <h6> Offering </h6>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <h6>Tithe</h6>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <h6>Give to a project</h6>
                    </Col>
                  </Row>
                </Col>

                
              </Row>
                </div>
              
            </Container>
          </Container>
        </div>
      </div>
    </>
  );
};

export default footer;
