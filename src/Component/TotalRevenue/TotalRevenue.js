import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap';
import "./TotalRevenue.css";
import rectangle from "../../asset/rectangle.png"

export default function TotalRevenue() {
  return (
    <div>
        <Container fluid>
            <Row>
                <Col  id="totalrevenue1">
                    <Row>
                        <Col id="totalrevenue4">Total Revenue</Col>
                    </Row>
                    <Row>
                        <Col id="totalrevenue2"><Image id="totalrevenue5" src={rectangle} /></Col>
                    </Row>
                    <Row>
                        <Col id="totalrevenue3">509808</Col>
                    </Row>
                </Col>
            </Row>
        </Container>


    </div>
  )
}
