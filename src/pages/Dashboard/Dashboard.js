import React, { useState, useEffect } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import Header2 from "../../components/Header2/Header2";
import HeaderNav from "../../components/HeaderNav/HeaderNav";
import StatisticsCard from "../../components/StatisticsCard/StatisticsCard";
import TopratedCourseCard from "../../components/TopratedCourseCard/TopratedCourseCard";
import "./Dashboard.css";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { MdSunny } from "react-icons/md";
import { IoIosCloudyNight } from "react-icons/io";
import { BsFillCloudSunFill } from "react-icons/bs";
import TopratedCourse_Card from "../../components/TopratedCourseCard/TopratedCourseCard";
import { getTeacherId, getTeacherName, getTeacherToken } from "../../redux/Slice/userSlice";
import { useSelector } from "react-redux";
import { apicaller } from "../../utils/api";
import { MutatingDots } from "react-loader-spinner";

export default function Dashboard() {
  var today = new Date();
  var curHr = today.getHours();

  if (curHr < 12) {
    var time = "Good Morning";
  } else if (curHr < 18) {
    var time = "Good Afternoon";
  } else {
    var time = "Good Evening";
  }



  useEffect(() => {
    GetAllCourseOfTeacher();
  }, []);

  const Token = useSelector(getTeacherToken);
  const TeacherId = useSelector(getTeacherId);
  const TeacherName = useSelector(getTeacherName);
  const [allTeacherData, setAllTeacherData] = useState([]);
  const [myCoursePageLoader, setMyCoursePageLoader] = useState(true); 

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
       <>
      <Container fluid>
        <Row>
          <Col id="db1">
            <div id="db2">
              <div>
                <div id="db3">{time}</div>
                <div id="db4">{TeacherName}</div>
              </div>
              <div id="db11">
                {time === "Good Morning" && <BsFillCloudSunFill id="db13" />}
                {time === "Good Afternoon" && <MdSunny id="db10" />}
                {time === "Good Evening" && <IoIosCloudyNight id="db12" />}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col id="db5">My Statistics</Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
            <StatisticsCard text="Total Courses" amount="50" />
          </Col>
          <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
            <StatisticsCard text="Total Student Enrolled" amount="10000" />
          </Col>
          <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
            <StatisticsCard text="Total Ratings" amount="5000" />
          </Col>
          <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
            <StatisticsCard text="My Lifetime Earnings" amount="1000000" />
          </Col>
          <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
            <StatisticsCard text="Total Cours Hours" amount="500" />
          </Col>
          <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
            <StatisticsCard text="Total Attachments" amount="200" />
          </Col>
        </Row>
        <Row>
          <Col id="db5">My Top Rated Courses</Col>
          <Col id="db6">
            <Link to="/courses" id="db9">
              See all
            </Link>
            <FiArrowRight />
          </Col>
        </Row>
        <Row>
        {allTeacherData?.slice(0, 4).map((item,i) => (
            <Col key={i} xs={12} sm={12} md={3} lg={3} xl={3} xxl={3} id="db14">
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
            <TopratedCourseCard
              title="MERN Stack Course 2023 - MongoDB, Express, React and NodeJS"
              author="Dinesh Panda"
              student="3423"
            />
          </Col>
          <Col xs={12} sm={12} md={3} lg={3} xl={3} xxl={3}>
            <TopratedCourseCard
              title="MERN Stack Course 2023 - MongoDB, Express, React and NodeJS"
              author="Dinesh Panda"
              student="3423"
            />
          </Col>
          <Col xs={12} sm={12} md={3} lg={3} xl={3} xxl={3}>
            <TopratedCourseCard
              title="MERN Stack Course 2023 - MongoDB, Express, React and NodeJS"
              author="Dinesh Panda"
              student="3423"
            />
          </Col> */}
        </Row>
        <Row>
          <Col id="db5">Recent Students</Col>
          <Col id="db6">
            <Link to="/enrolled" id="db9">
              {" "}
              See all <FiArrowRight />{" "}
            </Link>
          </Col>
        </Row>
        <Row>
          <Col id="db8">
            <Table>
              <thead>
                <tr style={{ color: "#F05904" }}>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Student id</th>
                  <th>Course name</th>
                  <th>Time & date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td id="db7">1</td>
                  <td id="db7">Bhabani Khuntia</td>
                  <td id="db7">bhabanikhuntia@outlook.com</td>
                  <td id="db7">SID4005</td>
                  <td id="db7">Full Stack</td>
                  <td id="db7">7/3/2023</td>
                </tr>
                <tr>
                  <td id="db7">2</td>
                  <td id="db7">Bhabani Khuntia</td>
                  <td id="db7">bhabanikhuntia@outlook.com</td>
                  <td id="db7">SID4005</td>
                  <td id="db7">Full Stack</td>
                  <td id="db7">7/3/2023</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container></>}
    </>
  );
}
