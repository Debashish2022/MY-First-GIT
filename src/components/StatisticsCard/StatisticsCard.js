import React from 'react'
import { Col, Row } from 'react-bootstrap';
import "./StatisticsCard.css";

export default function Statistics_Card(props) {
  return (
    <>
        <Row>
            <Col id="sc1">
                <div id="sc2">{props.text}</div>
                <div id="sc3">{props.amount}</div>
            </Col>
        </Row>
    </>
  )
}
