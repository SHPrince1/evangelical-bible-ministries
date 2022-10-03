import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, } from "react-bootstrap";
import "../styles/welcomePage.css";
// import Family from "..//..public/fammi.jpg";
import service from '../../src/images/service.jpeg';
import learning from "../../src/images/learning.jpeg";
import fami from "../../src/images/fammi.jpg";
import family from "../../src/images/family.jpeg";
import wordnew from "../../src/images/word.jpg";
import child from "../../src/images/child.jpg";
const first = () => {
  return (
    <>
      <section className="introBox">
        <div className="introText">
          <h4>INSPIRING A COMMUNITY WITH A PURPOSE DRIVEN LIFE.</h4>
          <p>
            A life that is committed to greatness through positive and
            progressive thinking.
          </p>
        </div>
        {/* <div className="readBtn">
          <a href="article" className="readMore">
            Get inspired
          </a>
        </div> */}
      </section>

      <section className="coreValues">
        <Container>
          <Row>
            <Col className="valHead">
              <h4>OUR VALUES</h4>
            </Col>
            <hr className="valLine" />
          </Row>
          <Row>
            <Col xs={12} lg={4}>
              <div className="valParentDiv">
                <img
                  className="valImage "
                  src={service}
                  alt="people serving"
                />

                <div className="valText">
                  <h6>SERVICE TO OTHERS</h6>
                  <p>
                    We value the individual members of the church and shall seek
                    to treat one another with respect and appropriate courtesy
                    irrespective of gender, social and physical status.
                  </p>
                </div>
              </div>
            </Col>
            <Col xs={12} lg={4}>
              <div className="valParentDiv">
                <div className="valImage">
                  <img className="valImage " src={learning} alt="" />
                </div>

                <div className="valText">
                  <h6>LIFE LONG LEARNING</h6>
                  <p>
                    We value Christlikeness. We want to be like the Lord and
                    savior in all conduct. We want to minister by serving people
                    the way He did with compassion, under the power and
                    anointing of the Holy Spirit.
                  </p>
                </div>
              </div>
            </Col>
            <Col xs={12} lg={4}>
              <div className="valParentDiv">
                <div className="valImage">
                  <img className="valImage " src={fami} alt="" />
                </div>

                <div className="valText">
                  <h6>STRENGTHENING FAMILIES</h6>
                  <p>
                    We value godly family life where parents live as examples
                    and cultivate an environment in which the spiritual,
                    emotional and social growth of their children can be fully
                    accomplished
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Container fluid>
        <Row>
          <Col>
            <div className="service">
              <Row>
                <Col>
                  <div className="conferenceHead">
                    <h1>OUR CULTURE</h1>
                  </div>
                </Col>
              </Row>

              <Row>
                <Col>
                  <div className="prayer">
                    <div className="exText">
                      <p>PRAYERS</p>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div>
                    <div className="word">
                      <div className="exText">
                        <p>UNDILUTED WORD OF GOD</p>
                      </div>
                    </div>
                  </div>
                </Col>

                <Col>
                  <div>
                    <div className="worship">
                      <div className="exText">
                        <p>WORSHIP</p>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="serviceTime">
        <Container>
          <Row>
            {/* <div className="line"></div> */}
            <Col xs={12} lg={3}>
              <div>
                <span>
                  <h5>SERVICE TIME</h5>
                </span>
                <p>Sunday Service 8am</p>
                <p> Tuesdays (Digging Deep) 7pm – 8pm </p>
                <p>
                  Service Time Sunday Service 10am Tuesdays (Digging Deep) 7pm –
                  8pm Vigil holds on the 2nd Friday of every month
                </p>
              </div>
            </Col>

            {/* <div className="line"></div> */}
            <Col xs={12} lg={4}>
              <div>
                <h5>Quote of the Week</h5>

                <p>
                  Likewise the Spirit also helps our infirmities: for we know
                  not what we should pray for as we ought: but the Spirit itself
                  makes intercession for us with groanings which cannot be
                  uttered.
                </p>
              </div>
            </Col>
            {/* <div className="line"></div> */}
            <Col xs={12} lg={4}>
              <div>
                <h5>Have you Prayed today</h5>

                <div>
                  <p>
                    {" "}
                    How many times have you prayed today? Do you know how to
                    pray? The most beautiful part of becoming a born again
                    Christian is your direct route to talking directly to God.
                  </p>
                  <p>
                    He does answer prayers. Even if you sometimes don’t have the
                    words to say, just speak from the heart and He will listen.{" "}
                    <br />
                    This is such an important part of Christian life that most
                    people forget about – talking to God can improve your life
                    in so many ways.
                  </p>
                  He may answer your prayers or maybe even give you answers to
                  question you didn’t even know you were asking. The special
                  relationship between you and God is important and you should
                  take part in it every day.
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div>
        {" "}
        <h1 className="read">NUGGETS FROM ZION</h1>
      </div>
      <Container>
        <div className="blogSection">
          <div>
            <div className="blogCard">
              <div className="blogImage">
                <img src={family} alt="family" />
              </div>
              <div className="blogText">
                <h4>God's Workmanship</h4>
                <h6>By Evangelist Dominic Udofia</h6>
                <p>
                  1 Corinthians 3:5-17 “For we are God’s workmanship, created in
                  Christ Jesus to do good works…” (Ephesians 2:10).{" "}
                </p>
                <p>
                  {" "}
                  The apostle Paul uses three beautiful figures of speech to...
                </p>
              </div>
            </div>
            <br></br>
            <div className="blogCard">
              <div className="blogImage">
                <img src={family} alt="family" />
              </div>
              <div className="blogText">
                <h4>God's Workmanship</h4>
                <h6>By Evangelist Dominic Udofia</h6>
                <p>
                  1 Corinthians 3:5-17 “For we are God’s workmanship, created in
                  Christ Jesus to do good works…” (Ephesians 2:10). The apostle
                  Paul uses three beautiful figures of speech to...
                </p>
              </div>
            </div>
          </div>

          <div>
            <br></br>

            <div className="blogCard">
              <div className="blogImage">
                <img src={family} alt="family" />
              </div>
              <div className="blogText">
                <h4>God's Workmanship</h4>
                <h6>By Evangelist Dominic Udofia</h6>
                <p>
                  1 Corinthians 3:5-17 “For we are God’s workmanship, created in
                  Christ Jesus to do good works…” (Ephesians 2:10).{" "}
                </p>
                <p>
                  {" "}
                  The apostle Paul uses three beautiful figures of speech to...
                </p>
              </div>
            </div>
            <br></br>
            <div className="blogCard">
              <div className="blogImage">
                <img src={family} alt="family" />
              </div>
              <div className="blogText">
                <h4>God's Workmanship</h4>
                <h6>By Evangelist Dominic Udofia</h6>
                <p>
                  1 Corinthians 3:5-17 “For we are God’s workmanship, created in
                  Christ Jesus to do good works…” (Ephesians 2:10). The apostle
                  Paul uses three beautiful figures of speech to...
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container>
        
        <Row>
          <Col>
            <div className="lincenceBtn">
              <a  href ="/article"className="lsBtn"> Get Inspired</a>
            </div>
          </Col>
        </Row>
      </Container>

      <Container fluid>
        <div className="pastorDeskBox">
          <Row>
            <Col xs={12} lg={6}>
              <div className="pastorDeskText">
                <h3>Pastor's Desk</h3>
                <p>
                  I welcome you to another wonderful week that the Lord has
                  made. Hold on as God is about to do a new thing in your life.
                  Every crooked path will be made straight in Jesus name. I want
                  you to meditate on these 3 truths from the word of God.
                </p>
              </div>
              <div className="pastorDeskText">
                <h3>He Can Do All Things</h3>
                <p>
                  With men this is impossible; but with God all things are
                  possible. Matt. 19:26
                </p>
              </div>
              <div className="pastorDeskText">
                <h3>He Loves You </h3>
                <p>
                  But God shows his love for us in that while we were still
                  sinners, Christ died for us. Romans 5:8
                </p>
              </div>
              <div className="pastorDeskText">
                <h3>He Has a Plan For Your Life</h3>
                <p>
                  For I know the plans I have for you," declares the LORD.. Jer.
                  29:11
                </p>
              </div>
            </Col>

            <Col xs={12} lg={6}>
              
              <img width={"80%"} src={wordnew} alt=" "/>
              

            </Col>
          </Row>
        </div>
      </Container>

      <Container fluid>
        <div className="parentBoxFollow">
          <Row>
            <Col>
              <div className="follow">
                <h1 className="followText">Meet Our Generals</h1>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="generalsBox">
                <div>
                  <img  className="genImage"src={child}  alt=" "/>
                </div>
                <div>
                  <p className="followP">Evangelist Dominc Udofia</p>
                  <p>General Supretendent</p>
                </div>
                <div></div>
              </div>
            </Col>
            <Col>
              <div className="generalsBox">
                <div>
                  <img  className="genImage" src={child} alt=" " />
                </div>
                <div>
                  <p className="followP">Evangelist Dominc Udofia</p>
                  <p>General Supretendent</p>
                </div>
                <div></div>
              </div>
            </Col>
            <Col>
              <div className="generalsBox">
                <div>
                  <img className="genImage" src={child} alt=" " />
                </div>
                <div>
                  <p className="followP">Evangelist Dominc Udofia</p>
                  <p>General Supretendent</p>
                </div>
                
              </div>
            </Col>
          </Row>
         
        </div>
      </Container>
    </>
  );
};

export default first;
