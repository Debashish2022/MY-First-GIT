import React from "react";
import "./Home.css";
import BackgndImg from "../../assets/home/homeBackgnd.png";
import { Col, Container, Row, Image, Button } from "react-bootstrap";
import Image1 from "../../assets/home/Image1.png";
import Image2 from "../../assets/home/Image2.png";
import Image3 from "../../assets/home/Image3.png";
import Image4 from "../../assets/home/Image4.png";
import Image5 from "../../assets/home/Image5.png";
import Image6 from "../../assets/home/Image6.png";
import Image7 from "../../assets/home/Image7.png";
import Image8 from "../../assets/home/Image8.png";
import Image9 from "../../assets/home/Image9.png";
import Image10 from "../../assets/home/Image10.png";
import Image11 from "../../assets/home/Image11.png";
import Image12 from "../../assets/home/Image12.png";
import Image13 from "../../assets/home/Image13.png";
import Image14 from "../../assets/home/Image14.png";
import Carousel1 from "../../assets/home/carosel1.png";
import Carousel2 from "../../assets/home/carosel2.png";
import Carousel3 from "../../assets/home/carosel3.png";
import Carousel4 from "../../assets/home/carosel4.png";
import Carousel5 from "../../assets/home/carosel5.png";




import { RiShareBoxFill } from "react-icons/ri";
import HomeCompCard from "../../components/HomeCompCard/HomeCompCard";
// import OwlCarousel from "react-owl-carousel";
import ReactOwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const options = {
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  };
  return (
    <>
      <Container fluid>
        <Row>
          <Col style={{ padding: "0px" }}>
            <Image src={BackgndImg} id="backgndImgHome" />
            <div id="backgndImgTxtDivHome">
              <div id="home1">Reliable</div>
              <h1 id="home2">
                Professionals you <br />
                can relay on
              </h1>
              <div id="home3">
                Right design and right ideas matter a lot in interior design{" "}
                <br />
                business. a style that make a statement
              </div>
              <div id="home4">
                <Link to="/about" id="home16">
                <Button variant="warning" className="seeall">
                  Read More
                </Button>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
        <Row id="home5">
          <Col lg={1} md={2} xs={3}>
            <div id="home6">FACEBOOK</div>
          </Col>
          <Col lg={1} md={2} xs={3}>
            <div id="home6">INSTAGRAM</div>
          </Col>
          <Col lg={1} md={2} xs={3}>
            <div id="home6">LINKEDIN</div>
          </Col>
          <Col lg={9} md={6} xs={3} >
            <div id="home7">
              <img src={Image1} alt="jbs_Img" id="jbsImg" />
              <div id="shareicondiv" onClick={() => navigate("/jbs.home")}>
                <RiShareBoxFill id="shareicon" />
              </div>
            </div>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col>
            <div id="home8">About Mailstone</div>
            <div id="home9">
              From the house of Konark Projects we proudly introduce Mailstone
              Pvt Ltd a one stop solution for all your Exterior & Interior
              needs. MPL carry forwards its expertise in <br /> Exterior,
              Interior and Rennovation Services, being in the competition for
              past 12 years with its dedicated and strong workforce MPL has
              catapaulted itself to the league of <br /> serving some of the big
              corporates in India. Founded by Mr.Tapan Kumar Panigrahi the
              company has grown tenfold from its inception, as a determined
              Captain Mr. Tapan <br /> Kumar Panigrahi has been successfully
              steering the ship through the tides and Storm.
            </div>
          </Col>
        </Row>

        <div id="home10">
          <Container>
            <Row className="pt-4">
              <Col>
                <div id="home11">All Services</div>
                <Row>
                  <Col md={4} id="home12">
                    <HomeCompCard img={Image2} text="Construction" />
                  </Col>
                  <Col md={4} id="home12">
                    <HomeCompCard img={Image3} text="Interiors" />
                  </Col>
                  <Col md={4} id="home12">
                    <HomeCompCard img={Image4} text="Fabrications" />
                  </Col>
                  <Col md={4} id="home12">
                    <HomeCompCard img={Image5} text="Electrical" />
                  </Col>
                  <Col md={4} id="home12">
                    <HomeCompCard img={Image6} text="Plumbing" />
                  </Col>
                  <Col md={4} id="home12">
                    <HomeCompCard img={Image7} text="Plumbing" />
                  </Col>
                </Row>
              </Col>
            </Row>
            {/* <div id="home13">
              <Button variant="warning" className="seeall">
                See All
              </Button>
            </div> */}
          </Container>
        </div>

        <Container>
          <Row className="mt-5">
            <Col>
              <div id="home8">All Projects</div>
              <Row>
                <Col md={6} id="home14">
                  <img src={Image9} alt="projects" id="home15" />
                </Col>
                <Col md={3} id="home14">
                  <img src={Image8} alt="projects" id="home15" />
                </Col>
                <Col md={3} id="home14">
                  <img src={Image11} alt="projects" id="home15" />
                </Col>
                <Col md={3} id="home14">
                  <img src={Image13} alt="projects" id="home15" />
                </Col>
                <Col md={3} id="home14">
                  <img src={Image14} alt="projects" id="home15" />
                </Col>
                <Col md={6} id="home14">
                  <img src={Image12} alt="projects" id="home15" />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row className="mt-5">
            <Col>
              <div id="home8" style={{ marginBottom: "0px" }}>
                Our Clients
              </div>
              <ReactOwlCarousel
                id="customer-testimonoals"
                className="owl-carousel owl-theme"
                loop
                center
                items={3}
                // margin={20}
                autoplay={true}
                dots={true}
                autoplayTimeout={5000}
                smartSpeed={450}
                nav
                {...options}
              >
                <div>
                  <img id="carouselImg" src={Carousel1} alt="clientsImg" />
                </div>
                <div>
                  <img id="carouselImg" src={Carousel2} alt="clientsImg" />
                </div>
                <div>
                  <img id="carouselImg" src={Carousel3} alt="clientsImg" />
                </div>
                <div>
                  <img id="carouselImg" src={Carousel4} alt="clientsImg" />
                </div>
                <div>
                  <img id="carouselImg" src={Carousel5} alt="clientsImg" />
                </div>
                {/* <div>
                  <img id="carouselImg" src={Image9} alt="clientsImg" />
                </div> */}
              </ReactOwlCarousel>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}
