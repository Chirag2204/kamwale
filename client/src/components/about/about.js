import React from "react";
import { Row, Col } from "react-bootstrap";
//import "./about.css";
import India from "../../img/india.png";
function about(props) {
  return (
    <div className="about-section" style={{ margin: "50px auto" }}>
      <div style={{ width: "auto", textAlign: "center", fontSize: "1.5rem" , margin:"30px"}}>
        <p>
          " Our Mission is engage large number of professional service providers
          with us and empower them by delivering services at home in a touch "{" "}
        </p>
      </div>
      <div className="about-header" style={{textAlign:"center"}}>
        <div className="heading">
          <h2 style={{ fontSize: "3rem", fontWeight: "bolder" }}>About Us</h2>
          <h3 style={{ fontSize: "2rem", padding: "20px", fontWeight: "bold" }}>
            Who we are
          </h3>
        </div>
        <div
          className="about-desc"
          style={{ fontSize: "1.2rem", padding: "20px" , textAlign:"left"}}
        >
          <p>
            Our aim to provide a plaform for oneline home services. Today
            operates in different cities of the country including Pune , Indore
            , Mumbai , Banglore .The KamWale.com platform helps customers to
            book high quality and relaible services-beauty
            treatment,massages,haircut,home sevices like electrician , plumber
            and more. delivered by trained professionals . Also this platform
            provide different types of service provider a platform where they
            can register and sell their service anf get customer online.
          </p>
        </div>
      </div>
      <div
        className="about-mid"
        style={{ margin: "50px auto", textAlign: "center" }}
      >
        <div className="heading">
          <h2 style={{ fontSize: "2rem", padding: "20px" }}>How We Do It</h2>
        </div>
        <div
          className="mid-desc"
          style={{ padding: "20px", fontSize: "1.2rem", textAlign: "left" }}
        >
          <p>
            KamWale.com provides a platform over the web on which various
            skilled and professional service providers connects with the users
            who are looking for specific service. and then the user is able to
            book the service which is closest according to requirement
          </p>
        </div>
      </div>
      <div className="loc" style={{ margin: "50px auto" }}>
        <div style={{ margin: "20px", textAlign: "center" }}>
          <img src={India} style={{ width: "30rem", height: "30rem" }} />
        </div>
        <divv
          style={{ padding: "20px", fontSize: "1.2rem", textAlign: "center" }}
        >
          <p>We are currently working in Pune,Mumbai,Banglore,Indore</p>
        </divv>
      </div>
    </div>
  );
}

export default about;
