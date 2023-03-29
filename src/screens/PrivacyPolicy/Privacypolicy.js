import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import about1 from "../../assets/image 1.png";
import "./Privacypolicy.css";

export default function Privacypolicy() {
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
  return (
    <>
      <Container fluid>
        <Row>
          <img src={about1} alt="logo" id="privacypolicy1" />
        </Row>
        <Container className="pb-5">
          <div id="privacypolicy2">Privacy Policy</div>
          <div id="privacypolicy3">
            This privacy policy describes the usage of information provided or
            collected by Mailstone and/or its subsidiary (ies) and/or
            affiliate(s), which operates various <br /> websites/ Mobile
            applications & other services including but not limited to delivery
            of information and content via any mobile or internet connected
            device or <br />
            otherwise. We follow this privacy policy in accordance with
            applicable law in the places where we operate. In some cases, we may
            provide additional data privacy <br /> notices specific to certain
            services or regions. Those terms are to be read in combination with
            this policy. <br /> Mailstone.co.in is a property of Mailstone
            Private Limited, an Indian Company registered under the Companies
            Act, having its corporate office at Bangalore <br /> - 560067.With a
            view to offer most enriching and holistic internet experience to its
            users Mailstone offers a vast repository of services. You may read
            'About Us' to know <br /> more about Mailstone.{" "}
          </div>
          <div id="privacypolicy4">What does this privacy policy cover?</div>
          <div id="privacypolicy3">
            The objective of the privacy policy is to inform you regarding the
            processing of your personal information which is collected during
            your visit to our website/ mobile <br /> application. This policy applies
            to current and former visitors of the website/ mobile application,
            users who reach us on Mailstone in connection with use of our <br />
            services, or whose information Mailstone otherwise receives in
            connection with its services.
          </div>
        </Container>
      </Container>
    </>
  );
}
