import React, { useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./Privacy.css";
import { MdAddBox } from "react-icons/md";
import Privacymodal from "../../components/Privacymodal/Privacymodal";
import { useState } from "react";
import { API, apicaller } from "../../utils/api";
import axios from "axios";
import { toast } from "react-toastify";
import { Window } from "react-bootstrap-icons";
import { Link, useNavigate } from "react-router-dom";
import Header2 from "../../components/Header2/Header2";
export default function Privacy() {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);

  const [policyData, setPolicyData] = useState([]);

  const eToast = (msg) => {
    toast.error(msg, {
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      position: "top-center",
    });
  };
  const sToast = (msg) => {
    toast.success(msg, {
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      position: "top-center",
    });
  };

  useEffect(() => {
    getPolicyData();
  }, []);

  const getPolicyData = () => {
    apicaller("get-privacy", null, "get", null).then((res) => {
      setPolicyData(res.data);
      console.log("data is showing...$$$$", res.data);
    });
  };

  const deletedata = (id) => {
    if (window.confirm("Are you sure to delete your data")) {
      var config = {
        method: "delete",
        url: `${API}/delete-privacy/${id}`,
        headers: {},
      };
      axios(config)
        .then(function (response) {
          getPolicyData();
          sToast("Data Deleted Sucessfully");
        })
        .catch(function (error) {});
    }
  };
  const handleClose = () => {
    setModal(false);
    getPolicyData();
  };

  return (
    <>
      <Header2 />
      <Container>
        <Row style={{ marginTop: "2rem" }}>
          <Col id="prv1">Privacy Policy</Col>
          <Col id="prv2">
            <MdAddBox
              style={{
                color: "#F05904",
                height: "2rem",
                width: "2rem",
                cursor: "pointer",
              }}
              onClick={() => setModal(true)}
            />
          </Col>
        </Row>
        <Privacymodal show={modal} onHide={handleClose} />
        {policyData?.map((list, index) => (
          <Row key={index} id="row18">
            <Col xs={12} sm={12} md={8} lg={8} xl={8} xxl={8}>
              <div id="row19">{list.title}</div>
              <div id="row20">{list.description}</div>
            </Col>
            <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4} id="prv10">
              <div>
                <Button
                  id="prv8"
                  onClick={() => {
                    deletedata(list._id);
                    getPolicyData();
                  }}
                >
                  DELETE
                </Button>
                <Button
                  id="prv9"
                  onClick={() => {
                    navigate("/PrivacyPolicyEdit", {
                      state: { id: list },
                    });
                  }}
                >
                  UPDATE
                </Button>
              </div>
            </Col>
            {/* <Col md={2} lg={2} sm={12} xs={12}>
              
            </Col> */}
          </Row>
        ))}
      </Container>
    </>
  );
}
