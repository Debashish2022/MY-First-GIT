import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import AddNewCourseModal from "../../components/AddNewCourseModal/AddNewCourseModal";
import HeaderNav from "../../components/HeaderNav/HeaderNav";
// import Loader from "../../components/Loader/Loader";
import TopratedCourse_Card from "../../components/TopratedCourseCard/TopratedCourseCard";
import { getTeacherId, getTeacherName, getTeacherToken } from "../../redux/Slice/userSlice";
import { apicaller } from "../../utils/api";
import "./MyAllCourses.css";
import { MutatingDots } from  'react-loader-spinner';

export default function MyAllCourses() {
  const Token = useSelector(getTeacherToken);
  const TeacherId = useSelector(getTeacherId);
  const TeacherName = useSelector(getTeacherName);
  const [modalShow, setModalShow] = useState(false);
  const [allTeacherData, setAllTeacherData] = useState([]);
  const [myCoursePageLoader, setMyCoursePageLoader] = useState(true); 

  useEffect(() => {
    GetAllCourseOfTeacher()
  }, []);

  const GetAllCourseOfTeacher = async () => {
    await apicaller(
      `course-by-author?id=${TeacherId}`,
      null,
      "get",
      Token
    ).then((res) => {
      console.log("all course of teacher...$$$", res.data);
      setAllTeacherData(res.data.reverse());
    })
    .finally(()=>{
      setMyCoursePageLoader(false);
    });
  };

  function handleClose(){
    GetAllCourseOfTeacher()
  }

  return (
    <>
      <HeaderNav />

      {myCoursePageLoader ?  <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "80vh",
          }}
        ><MutatingDots 
        height="100"
        width="100"
        color="#f05904"
        secondaryColor= '#f05904'
        radius='12.5'
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
       /></div> : 
      <Container id="mac3">
        <Row>
          <Col id="mac1">My Courses</Col>
          <Col id="mac2" onClick={() => setModalShow(true)}>
            <Button variant="dark">Add New Course</Button>
          </Col>
        </Row>
        <AddNewCourseModal
          show={modalShow}
          onHide={() => {
            setModalShow(false);
            GetAllCourseOfTeacher();
          }}
        />
        <Row>
          
          {/* <Col xs={12} sm={12} md={3} lg={3} xl={3} xxl={3}>
            <TopratedCourse_Card
              title="MERN Stack Course 2023 - MongoDB, Express, React and NodeJS"
              author="Dinesh Panda"
              student="3423"
            />
          </Col> */}
          {allTeacherData?.map((item,i) => (
            <Col key={i} xs={12} sm={12} md={3} lg={3} xl={3} xxl={3}>
              <TopratedCourse_Card
                title={item?.name}
                author={TeacherName}
                student="3423"
                image={item?.img}
                response={item}
                price={item.price}
                onHide={handleClose}
                visibility={item?.visiblility}
              />
            </Col>
          ))}

          {/* <Col xs={12} sm={12} md={3} lg={3} xl={3} xxl={3}>
            <TopratedCourse_Card
              title="MERN Stack Course 2023 - MongoDB, Express, React and NodeJS"
              author="Dinesh Panda"
              student="3423"
            />
          </Col>
          <Col xs={12} sm={12} md={3} lg={3} xl={3} xxl={3}>
            <TopratedCourse_Card
              title="MERN Stack Course 2023 - MongoDB, Express, React and NodeJS"
              author="Dinesh Panda"
              student="3423"
            />
          </Col> */}
        </Row>
      </Container>
}
    </>
  );
}
