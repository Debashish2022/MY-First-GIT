import React from 'react'
import { Col , Image, Row, Container } from "react-bootstrap";

import "./ServiceConstructionComp.css";



export default function ServiceconstructionComp(props) {
  return (
    <>
      <Row>
      <Col md={12} xs={12}  lg={12} id="servicecomp4">
         {props.text}
        </Col>
      </Row>
    <Row style={{marginBottom:'8rem'}}>
        <Col md={4} xs={12} lg={4}>
         <Image src={props.img} id="servicecomp3" />
        </Col>
        <Col md={4} xs={12} lg={4}>
         <Image src={props.img2} id="servicecomp3" />
        </Col>
        <Col md={4} xs={12} lg={4}>
         <Image src={props.img3} id="servicecomp3" />
        </Col>
       
      </Row>
      </>
  )
}
