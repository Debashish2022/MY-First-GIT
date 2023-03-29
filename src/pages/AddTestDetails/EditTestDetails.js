import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import "./AddTestDetails.css";
import { IoIosAddCircle } from "react-icons/io";

const AddTestDetails = () => {

  const [selectedNoPreparation, setSelectedNoPreparation] = useState(false);
  const [clickedSample, setClickedSample] = useState(" ");
  const [clickedAge, setClickedAge] = useState(" ");
  const [clickedGender, setClickedGender] = useState(" ");

  return (
    <Container>

      {/* header */}
      <Row id="addtest_01">
        Logo
      </Row>

      <Row id="addTestPanelTxt">Add Test Panel</Row>

      {/* body start */}
      <Row>
        <Col md={2}></Col>

        {/* input divs start  */}
        <Col md={8}>
          <Form>

            <Form.Group>
              <Form.Control type="text" placeholder="Add Test Title" id="addTestTitleDiv" />

              <Row className='mb-2 mt-4' id="uploadTestImgTxt">Upload Test Image</Row>
              <Row id='fileChooseDiv'>
                <label id="details1" htmlFor="myfile">
                  <IoIosAddCircle style={{ fontSize: '2rem' }} />
                </label>
                <Form.Control className='mb-4' type="file" id="myfile" />
              </Row>

              <Row className='mb-2 mt-4' id="uploadTestImgTxt">Preparation Details</Row>
              <Row style={{ margin: 0 }}>
                <Col md={5} xs={7} style={{ paddingRight: '1rem', paddingLeft: '0rem' }}>
                  <div onClick={() => setSelectedNoPreparation(!selectedNoPreparation)} id="noPreparationTxt"
                    style={selectedNoPreparation === true ? { backgroundColor: '#029967', color: '#fff' } : { backgroundColor: '#fff', color: '#029967' }}>No preparation is required</div>
                </Col>
                <Col md={7} xs={5} style={{ padding: 0 }}>
                  <div ><Form.Control type="text" placeholder="Type Manually" id="addTestTitleDiv" /></div>
                </Col>
              </Row>

              <Form.Control type="number" pattern="[0-9]*" className='mt-4' placeholder="Add Price in INR" id="addTestTitleDiv" />

              <Row className='mb-2 mt-4' id="uploadTestImgTxt">Type of sample</Row>
              <Row style={{ margin: 0, gap: '1rem' }}>
                <Col id='bloodCoughUrineOthersBtn' onClick={() => setClickedSample('first')}
                  style={
                    clickedSample === "first" ? { backgroundColor: '#029967', color: '#fff' } : { backgroundColor: '#fff', color: '#029967' }
                  }>Blood</Col>
                <Col id='bloodCoughUrineOthersBtn' onClick={() => setClickedSample('second')}
                  style={
                    clickedSample === "second" ? { backgroundColor: '#029967', color: '#fff' } : { backgroundColor: '#fff', color: '#029967' }
                  }>Cough</Col>
                <Col id='bloodCoughUrineOthersBtn' onClick={() => setClickedSample('third')}
                  style={
                    clickedSample === "third" ? { backgroundColor: '#029967', color: '#fff' } : { backgroundColor: '#fff', color: '#029967' }
                  }>Urine</Col>
                <Col id='bloodCoughUrineOthersBtn' onClick={() => setClickedSample('fourth')}
                  style={
                    clickedSample === "fourth" ? { backgroundColor: '#029967', color: '#fff' } : { backgroundColor: '#fff', color: '#029967' }
                  }>Others</Col>
              </Row>

              <Row className='mb-2 mt-4'>
                <Col md={9} xs={9}>
                  <Form.Control type="text" placeholder="Add other samples manually" id="addTestTitleDiv" />
                </Col>
                <Col md={3} xs={3} >
                  <div id='addBtnGreen'>Add</div>
                </Col>
              </Row>

              <Row className='mb-2 mt-4' id="uploadTestImgTxt">Select age group</Row>
              <Row style={{ margin: 0, gap: '1rem' }}>
                <Col md={2} xs={4} id='bloodCoughUrineOthersBtn' onClick={() => setClickedAge('first')}
                  style={
                    clickedAge === "first" ? { backgroundColor: '#029967', color: '#fff' } : { backgroundColor: '#fff', color: '#029967' }
                  }>0-12Yrs</Col>
                <Col md={2} xs={4} id='bloodCoughUrineOthersBtn' onClick={() => setClickedAge('second')}
                  style={
                    clickedAge === "second" ? { backgroundColor: '#029967', color: '#fff' } : { backgroundColor: '#fff', color: '#029967' }
                  }>13-18Yrs</Col>
                <Col md={2} xs={3} id='bloodCoughUrineOthersBtn' onClick={() => setClickedAge('third')}
                  style={
                    clickedAge === "third" ? { backgroundColor: '#029967', color: '#fff' } : { backgroundColor: '#fff', color: '#029967' }
                  }>19-40Yrs</Col>
                <Col md={2} xs={4} id='bloodCoughUrineOthersBtn' onClick={() => setClickedAge('fourth')}
                  style={
                    clickedAge === "fourth" ? { backgroundColor: '#029967', color: '#fff' } : { backgroundColor: '#fff', color: '#029967' }
                  }>41-60Yrs</Col>
                <Col md={2} xs={7} id='bloodCoughUrineOthersBtn' onClick={() => setClickedAge('fifth')}
                  style={
                    clickedAge === "fifth" ? { backgroundColor: '#029967', color: '#fff' } : { backgroundColor: '#fff', color: '#029967' }
                  }>60+ Yrs</Col>
              </Row>
              <Row style={{ margin: 0 }} className='mb-3 mt-4'>
                <Col md={11} xs={12} id='bloodCoughUrineOthersBtn' onClick={() => setClickedAge('sixth')}
                  style={
                    clickedAge === "sixth" ? { backgroundColor: '#029967', color: '#fff' } : { backgroundColor: '#fff', color: '#029967' }
                  }>All age Group</Col>
              </Row>

              <Row className='mb-3 mt-4' id="uploadTestImgTxt">Select Gender</Row>
              <Row style={{ margin: 0, gap: '1rem' }} className='mb-3'>
                <Col md={2} xs={2} id='bloodCoughUrineOthersBtn' onClick={() => setClickedGender('first')}
                  style={
                    clickedGender === "first" ? { backgroundColor: '#029967', color: '#fff' } : { backgroundColor: '#fff', color: '#029967' }
                  }>Male</Col>
                <Col md={2} xs={2} id='bloodCoughUrineOthersBtn' onClick={() => setClickedGender('second')}
                  style={
                    clickedGender === "second" ? { backgroundColor: '#029967', color: '#fff' } : { backgroundColor: '#fff', color: '#029967' }
                  }>Female</Col>
                <Col md={2} xs={2} id='bloodCoughUrineOthersBtn' onClick={() => setClickedGender('third')}
                  style={
                    clickedGender === "third" ? { backgroundColor: '#029967', color: '#fff' } : { backgroundColor: '#fff', color: '#029967' }
                  }>Other</Col>
              </Row>

              <Row style={{ margin: 0 }} className='mb-3' id="descriptionDiv">
                <textarea placeholder="Add description (in 100 words maximum*)" rows={5} id="descriptionBox" />
              </Row>

              <Row style={{ margin: 0}} className='mb-3'>
                <Button id="addBtnBlack" variant="dark">Save</Button>
              </Row>

            </Form.Group>

          </Form>
        </Col>

        <Col md={2}></Col>
      </Row>
    </Container>
  )
}

export default AddTestDetails;