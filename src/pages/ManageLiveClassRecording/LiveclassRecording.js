import React from 'react';
import './LiveclassRecording.css';
import { Container, Row, Col } from 'react-bootstrap';
import { RiBookFill } from "react-icons/ri";
import Header2 from '../../components/Header2/Header2';

export default function LiveclassRecording() {

  let api = [
    {
      id: '1',
      course: 'Python Class 1 , Basics and Environment Set-up',
      date: '22.06.2022',
      time: '5.00 pm - 7.00pm'
    }
  ]

  return (
    <>
    <Header2 />

      <Container>
        <Row>
          <div className='whiteDiv'>
            <div>
              <Row><div className='liveClassTxt'>Live Class Recordings</div></Row>
              {
                api.map((props, i) => (
                  <div key={i}>
                    <Row className='rows' >
                      {/* <Col md={1}></Col> */}
                      <Col xs={1} md={1} style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: "0.3rem" }}>
                      <RiBookFill className='bookIcon' />
                      </Col>
                      <Col xs={3} md={4} style={{  }}>
                        <div className='courseNameTxt'>
                          
                          {props.id}. {props.course}
                        </div>
                      </Col>
                      <Col xs={3} md={1}>
                        <div className='courseNameTxt'>
                          {props.date}
                        </div>
                      </Col>
                      <Col xs={3} md={2}>
                        <div className='courseNameTxt'>
                          {props.time}
                        </div>
                      </Col>
                      <Col xs={2} md={3} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <Row>
                          <Col xs={12} md={3}>
                            <div className="editTxt">Edit</div>
                          </Col>
                          <Col xs={12} md={4} className="editTxt">Delete</Col>
                          <Col xs={12} md={4} className="downloadTxt">Download</Col>
                        </Row>
                      </Col>
                      <Col xs={0} md={1}></Col>
                    </Row>
                  </div>
                ))
              }
            </div>
          </div>
        </Row>
      </Container>
    </>
  )
}
