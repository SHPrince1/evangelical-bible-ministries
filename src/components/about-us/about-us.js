import React from "react";
// import { Container } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import "../../styles/about-us.css";
import mission from "../../../src/images/mission.jpg";
import vission from "../../../src/images/vission.jpg";
import praymis from "../../../src/images/praymis.jpg";
import child from "../../../src/images/child.jpg";
import music from "../../../src/images/music.jpg";
import evang from "../../../src/images/evang.jpg";
import hospitality from "../../../src/images/hospitality.jpg";
import bibstudy from "../../../src/images/bibstudy.jpg";


const aboutUs = () => {
  return (
    <>
      <div className="parentDiv">
        <p>WHO WE ARE</p>
      </div>
      <Container>
        <div className="whoWeAre">
          <div>
            <h4>WHO WE ARE</h4>
          </div>
          <div>
            <p>
              We are a bible believing church who seek to reach out to those in
              our communities, to make a difference in the world one step at a
              time. We believe that God is very much interested in us enjoying
              life without sickness. By being in good health all the time and
              living an all sufficient life by prospering us as he is interested
              in salvation of our soul. (3 John 1:2)
            </p>
          </div>
          <div className="line"></div>
        </div>

        <div className="mission">
          <Row>
            <Col xs={12} lg={6}>
              <img width={"100%"} height={"90%"} src={mission} alt="added" />
            </Col>
            <Col xs={12} lg={6}>
              <div>
                <h3>Our Mission</h3>
              </div>
              <div>
                <ul>
                  <li>
                    To inspire a community with a purpose driven life. A life
                    that is committed to greatness through positive and
                    progressive thinking.
                  </li>
                  <li>
                    We strive to inspire people through people whose abilities
                    and potentials have been deposited and implanted by God
                    through Jesus
                  </li>
                  <li>
                    We are a church with relevant scripture teaching, heartfelt
                    worship, honest friendship, constant prayer and
                    compassionate care for those in need.
                  </li>
                  <li>
                    We are building a contagious church that’s committed to
                    influencing the entire community one life at a time.
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
        <hr />
        <div className="vission">
          <Row>
            <Col xs={12} lg={6}>
              <div>
                <h3>Our Vision</h3>
              </div>
              <p>
                To see a purpose inspired community, a community that is driven
                by purpose, a community that does not depend on their ability to
                make things happen but the ability of God, a community that
                strongly believe that through Christ Jesus they can achieve
                anything and everything.
              </p>
              <p>
                (Philippians 4-13) We envision a people inspiring people
                community and a positive and forward thinking people that
                believe strongly that nothing is impossible to achieve. We
                envision people that thinks great and achieve greatness not by
                their own might but by the ability and potential that have being
                deposited and implanted in us through Jesus Christ our God.
              </p>
            </Col>
            <Col xs={12} lg={6}>
              <div>
                <img width={"100%"} height={"70%"} src={vission} alt=" " />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      <div className="beliefs">
        <Container>
          <div className="beliefsText">
            <h1> OUR BELIEFS </h1>
            <p>
              We believe that God’s vision for our life is bigger than what we
              can either see or imagine as God reveals every new phase of his
              purpose for us based on our believe and faith. At The House of
              David we are proving that every word of the scripture is right
              once God’s intent & purpose for our creation has being clearly
              identified, understood and stay connected to it. Begin a new
              experience in your life, start Living a meaningful life and Making
              a difference.
            </p>
          </div>
        </Container>
      </div>

      <div className="whatWeDo">
        <Container>
          <h4  className="whatWeDoHeadText">
            OUR MINISTRIES <p>WHAT WE DO</p>
          </h4>

          <div>
            <Row>
              <Col xs={12} lg={4}>
                <div className="wwwContent">
                  <div>
                    <img width={"100%"} src={child} alt=" " />
                  </div>

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
              </Col>
              <Col xs={12} lg={4}>
                <div className="wwwContent">
                  <div>
                    <img width={"100%"} src={praymis} alt = " " />
                  </div>

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
                  </div>
                </div>
              </Col>
              <Col xs={12} lg={4}>
                <div className="wwwContent">
                  <div>
                    <img width={"100%"} src={music} alt = "" />
                  </div>

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
                    <img width={"100%"} src={evang} alt="" />
                  </div>

                  <div className="wwwText">
                    <div>
                      <h4>Evangelism/Fellow-up Ministry</h4>
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
                </div>
              </Col>
              <Col xs={12} lg={4}>
                <div className="wwwContent">
                  <div>
                    <img width={"100%"} src={hospitality}  alt=" "/>
                  </div>

                  <div className="wwwText">
                    <div>
                      <h4>Hospitality Ministry </h4>
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
                </div>
              </Col>
              <Col xs={12} lg={4}>
                <div className="wwwContent">
                  <div>
                    <img width={"100%"} src={bibstudy} alt=" " />
                  </div>

                  <div className="wwwText">
                    <div>
                      <h4>Bible Study</h4>
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
                </div>
              </Col>
            </Row>
          </div>

          {/* Row three of what we do */}
        </Container>
      </div>
    </>
  );
};

export default aboutUs;
