import React, { useEffect, useState } from "react";
import { Button, Col, Container, Image, Row, Spinner } from "react-bootstrap";
import Header2 from "../../components/Header2/Header2";
import "./Aboutus.css";
import dc from "../../assets/profile.png";
import { MdAddBox } from "react-icons/md";
import AddAboutModal from "../../components/AddAboutModal/AddAboutModal";
import { apicaller } from "../../utils/api";
import Utility from "../../utils/Utility";
import { useSelector } from "react-redux";
import { getUserToken } from "../../Redux/Slice/UserSlice";
import axios from "axios";

export default function Aboutus() {
  const [modalShow, setModalShow] = useState(false);
  const [aboutUsData, setAboutUsData] = useState([]);
  const [spin, setSpin] = useState(true);

  const token = useSelector(getUserToken);

  useEffect(() => {
    getAboutUsData();
  }, []);

  const getAboutUsData = () => {
    apicaller("get-about-us", null, "get", null)
      .then((res) => {
        setAboutUsData(res?.data?.result);
        setSpin(false);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const deleteAboutus = (id) => {
    if (window.confirm("Are you sure, you want to remove ?")) {
      var FormData = require("form-data");
      var data = new FormData();

      // var config = {
      //   method: 'delete',
      // // maxBodyLength: Infinity,
      //   url: 'http://52.66.203.80:8000/api/delete-about-us/' + id,
      // //   headers: {
      // //     ...data.getHeaders()
      // //   },
      //   data : data
      // };

      // axios(config)
      // .then(function (response) {
          // getAboutUsData()
      //   console.log(JSON.stringify(response.data));
      // })
      // .catch(function (error) {
      //   console.log(error);
      // });
      const res = apicaller(`delete-about-us/${id}`, data, "delete", null);

      getAboutUsData();
        Utility.sToast("Data deleted successfully");
       
      // console.log("first", res)
      //   .then(res) => {
      // setAboutUsData(res.data.result);
      //     console.log("deletion response is", res);
      //     Utility.sToast("Data deleted successfully!")
      //   })
      //   .catch((e) => {
      //     console.log(e);
      //   });
    }
  };

  return (
    <>
      <Header2 />
      <Container>
        {spin ? (
          <div id="abt9">
            <Spinner animation="border" variant="warning" />
          </div>
        ) : (
          <>
            <Row id="abt8">
              <Col id="abt1">About us</Col>
              <Col id="abt6">
                <MdAddBox
                  style={{ color: "#F05904", height: "2em", width: "2em" }}
                  onClick={() => setModalShow(true)}
                />
              </Col>
            </Row>
            <AddAboutModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />

            {aboutUsData?.map((item, i) => (
              <Row key={i} style={{ marginBottom: "1.5rem" }}>
                <Col xs={12} sm={12} md={5} lg={5} xl={5} xxl={5} id="abt2">
                  <Image src={item?.video_path} alt="video" id="abt10"/>
                </Col>
                <Col xs={12} sm={12} md={5} lg={5} xl={5} xxl={5}>
                  <div id="abt3">{item?.title}</div>
                  <div id="abt4">{item?.description}</div>
                </Col>
                <Col xs={12} sm={12} md={2} lg={2} xl={2} xxl={2} id="abt2">
                  <Button id="abt5" onClick={() => deleteAboutus(item?._id)}>
                    Remove
                  </Button>
                </Col>
              </Row>
            ))}
          </>
        )}
      </Container>
    </>
  );
}
