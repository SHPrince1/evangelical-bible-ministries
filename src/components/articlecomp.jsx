import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ModalFirst from "./modals/modal-first";
import ModalSecond from "./modals/modal-second";
import ModalThird from "./modals/modal-third";
import "../styles/about-us.css";
import cam1 from "../../src/images/cam1.jpg";

const ArticleComponent = () => {
  return (
    <>
      <section className="firstSection">
        {/* <container> */}
        <div>
          <Container>
            <div className="blogHead">
              <img width={"100%"} src={cam1} alt=" " />
            </div>
          </Container>
        </div>
        {/* </container> */}
      </section>
<Container>
<div className="whatWeDo">
        <Container>
          <h4 className="articleHead">
            <p>HOPE FOR ALL</p>
          </h4>

          <div>
            <Row>
              <Col xs={12} lg={4}>
                <div className="wwwContent">
                  {/* <div>
                    <img width={"100%"} src="child.jpg" />
                  </div> */}

                  <div className="wwwText">
                    <div className="wwwHead">
                      <h4 className="wwwHead">Chidren and Teens Ministry</h4>
                    </div>
                    Through the guidance of the Holy Spirit and in partnership
                    with parents and the Church, we shall faithfully teach the
                    gospel and demonstrate the love of Christ to all children
                    and teens so that they will become Disciples of Christ who
                    trust, serve, worship, and obey Him now and into eternity to
                    the glory of God, the Father.
                  </div>
                </div>
                <ModalFirst />
              </Col>
              <Col xs={12} lg={4}>
                <div className="wwwContent">
                  {/* <div>
                    <img width={"100%"} src="praymis.jpg" />
                  </div> */}

                  <div className="wwwText">
                    <div className="wwwHead">
                      <h4>Prayer Ministry</h4>
                    </div>
                    “And I sought for a man among them, that should make up the
                    hedge, and stand in the gap before me for the land, that I
                    should not destroy it: but I found none.” Ezekiel 22:30.
                    This ministry is made up of passionate, committed, and
                    prayer champions who intercede for the church, nations,
                    people, etc.
                    {/* <ModalFirst /> */}
                  </div>
                  <div></div>
                  <ModalSecond />
                </div>
              </Col>
              <Col xs={12} lg={4}>
                <div className="wwwContent">
                  {/* <div>
                    <img width={"100%"} src="music.jpg" />
                  </div> */}

                  <div className="wwwText">
                    <div>
                      <h4>Music Ministry</h4>
                    </div>
                    <p>
                      “David appointed the following Levites to lead the people
                      in worship before the Ark of the Lord—to invoke his
                      blessings, to give thanks, and to praise the Lord, the God
                      of Israel.” 1 Chronicles 16:4. This ministry consists of
                      gifted, dynamic and enthusiastic members who lead us into
                      God’s presence to invoke His blessings.
                    </p>
                  </div>
                  <ModalThird />
                </div>
              </Col>
            </Row>
          </div>

          {/* what we do row two */}

          <div>
            <Row>
              <Col xs={12} lg={4}>
                <div className="wwwContent">
                  <div>
                    {/* <img width={"100%"} src="evang.jpg" /> */}
                  </div>

                  <div className="wwwText">
                    <div>
                      <h4>Topic</h4>
                    </div>
                    <p>
                      Then Jesus came to them and said, “All authority in heaven
                      and on earth has been given to me. Therefore go and make
                      disciples of all nations, baptizing them in the name of
                      the Father and of the Son and of the Holy Spirit, and
                      teaching them to obey everything I have commanded you. And
                      surely I am with you always, to the very end of the age.”
                      Matthew 28:18-20. This ministry has passion in soul
                      winning, witnessing and embarking on the Great Commission.
                    </p>
                  </div>
                  <ModalThird />
                </div>
              </Col>
              <Col xs={12} lg={4}>
                <div className="wwwContent">
                  <div>
                    {/* <img width={"100%"} src="hospitality.jpg" /> */}
                  </div>

                  <div className="wwwText">
                    <div>
                      <h4>Topic </h4>
                    </div>
                    <p>
                      Our vision is to be a good representative of Christ,
                      creating an atmosphere where members of the Church can
                      easily fellowship in love, relax, and just have fun. Food
                      is one of the best ways to bring people together. To
                      consistently provide the church refreshments during any
                      events or gatherings when it is needed or required.
                    </p>
                  </div>

                  <ModalThird />
                </div>
              </Col>
              <Col xs={12} lg={4}>
                <div className="wwwContent">
                  <div>
                    {/* <img width={"100%"} src="bibstudy.jpg" /> */}
                  </div>

                  <div className="wwwText">
                    <div>
                      <h4>Topic</h4>
                    </div>
                    <p>
                      The Bible study department is responsible for coordinating
                      and ensuring the smooth running of Bible Study and Sunday
                      school. Our vision is to rightly share the word of truth,
                      which is based on the scripture 2 Timothy 2:15 (Be
                      diligent to present yourself approved to God, a worker who
                      does not need to be ashamed, rightly dividing the word of
                      truth NKJV). The department also follow-up with church
                      members to know how they are faring with regards to
                      treated lessons and other bible-related interests.
                    </p>
                  </div>
                  <ModalThird />
                </div>
              </Col>
            </Row>
          </div>

          {/* Row three of what we do */}
        </Container>
      </div>
</Container>
      
    </>
  );
};

export default ArticleComponent;
