import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Spinner } from "react-bootstrap";
import "./TotalCourses.css";
import Header2 from "../../components/Header2/Header2";
import AddCourseModal from "../../components/AddCourseModal/AddCourseModal";
import TopratedCourseCard from "../../components/TopratedCourseCard/TopratedCourseCard";
import { apicaller } from "../../utils/api";

function TotalCourses() {
  const [modalShow, setModalShow] = useState(false);
  const [courseCard, setCourseCard] = useState([]);
  const [spin, setSpin] = useState(true);

  useEffect(() => {
    getCourseCard();
  }, [modalShow]);

  const getCourseCard = () => {
    apicaller("courses", null, "get", null)
      .then((res) => {
        console.log("total course data is :", res?.data);
        setCourseCard(res?.data);
        setSpin(false);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      <Header2 />
      <Container fluid style={{ marginBottom: "2rem" }}>
        <Row
          style={{
            backgroundColor: "#002333",
            padding: "1rem",
            marginBottom: "1rem",
          }}
        >
          {/* <Col md={1}></Col> */}
          <Col style={{ padding: "0px" }}>
            <Row>
              <Col md={1}></Col>
              <Col md={10}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div id="courses1">Total Courses({courseCard.length})</div>
                  <Button
                    id="addcoursebutton"
                    onClick={() => setModalShow(true)}
                  >
                    Add Course
                  </Button>
                  <AddCourseModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                  />
                </div>
              </Col>
              <Col md={1}></Col>
            </Row>
          </Col>
          {/* <Col md={1}></Col> */}
        </Row>
      </Container>
      <Container>
        {spin ? (
          <div id="courses2">
            <Spinner animation="border" variant="danger" />
          </div>
        ) : (
          <Row>
            {courseCard?.map((item, i) => (
              <Col xs={12} sm={12} md={3} lg={3} xl={3} xxl={3} key={i}>
                <TopratedCourseCard
                  title={item?.name}
                  author={item?.createdBy?.first_name}
                  courseImage={item?.img}
                  price={item?.price}
                  item={item}
                  visibility={item.visiblility}
                />
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </>
  );
}

export default TotalCourses;
