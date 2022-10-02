import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {  Row, Col } from "react-bootstrap";
import "../../styles/banner.css";

function banner() {
  return (
    <>
      <head>
        <title></title>
      </head>
      <>
        <div className= "bannerParentDiv">
          <div className="headerContainer" >
            <Row>
              <Col>
                <h1 className="contentHeader">Welcome to </h1>
              </Col>
            </Row>
            <Row>
              <Col>
                <h1 className="contentHeader">Evangelical Bible Ministries</h1>
              </Col>
            </Row>
          </div>

          <div className="bannerBtnDiv">
            
              
                <a  href= "https://fb.com"className="bannerBtn">Find a Church</a>
                {/* <a className="bannerBtn">I am member</a> */}
             
              
          </div>
        </div>
      </>
    </>
  );
}

export default banner;
