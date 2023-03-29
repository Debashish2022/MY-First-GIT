import React from "react";
import { Col, Container, Form, Image, Row, Table } from "react-bootstrap";
import "./PatholabDetailsComp1.css";
import { AiFillStar } from "react-icons/ai";
import { TbEdit } from "react-icons/tb";
import { RiDeleteBin6Line } from "react-icons/ri";
import sag from "../../asset/sagarika.png";

export default function PatholabDetailsComp1() {
  return (
    <div>
      <Container fluid id="patholab1">
        <Row>
          <Col id="patholabcomp2">
            <Row>
              <Col md="3" id="patholabcomp7">Review</Col>
            </Row>
            <Table style={{ padding: "1rem" }}>
              <tbody>
                {/* 1st row */}
                <tr id="patholabcomp3">
                  <td id="patholabcomp4">
                    <Image id="patholabcomp5" src={sag} />
                  </td>
                  <td id="patholabcomp6">Sagarika Mohanty</td>
                  <td id="patholabcomp6">dineshpanda1256@gmail.com</td>
                  <td id="patholabcomp6">
                    <div style={{ flexDirection: "row" }}>
                      <AiFillStar id="starIcon" />
                      <AiFillStar id="starIcon" />
                      <AiFillStar id="starIcon" />
                      <AiFillStar id="starIcon" />
                      <AiFillStar id="starIcon" />
                    </div>
                  </td>
                </tr>

                {/* 2nd row */}
                <tr id="patholabcomp3">
                  <td id="patholabcomp4">
                    <Image id="patholabcomp5" src={sag} />
                  </td>
                  <td id="patholabcomp6">Sagarika Mohanty</td>
                  <td id="patholabcomp6">dineshpanda1256@gmail.com</td>
                  <td id="patholabcomp6">
                    <div style={{ flexDirection: "row" }}>
                      <AiFillStar id="starIcon" />
                      <AiFillStar id="starIcon" />
                      <AiFillStar id="starIcon" />
                      <AiFillStar id="starIcon" />
                      <AiFillStar id="starIcon" />
                    </div>
                  </td>
                </tr>

                {/* 3rd row */}
                <tr id="patholabcomp3">
                  <td id="patholabcomp4">
                    <Image id="patholabcomp5" src={sag} />
                  </td>
                  <td id="patholabcomp6">Sagarika Mohanty</td>
                  <td id="patholabcomp6">dineshpanda1256@gmail.com</td>
                  <td id="patholabcomp6">
                    <div style={{ flexDirection: "row" }}>
                      <AiFillStar id="starIcon" />
                      <AiFillStar id="starIcon" />
                      <AiFillStar id="starIcon" />
                      <AiFillStar id="starIcon" />
                      <AiFillStar id="starIcon" />
                    </div>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
