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
  }

  return (
    <>
      <Container>
        <Row>
          <Col id="prv1">Privacy Policy</Col>
          <Col id="prv2">
            <MdAddBox
              style={{ color: "#F05904", height: "2rem", width: "2rem" }}
              onClick={() => setModal(true)}
            />
          </Col>
        </Row>
        <Privacymodal show={modal} onHide={handleClose} />
        {policyData?.map((list, index) => (
          <Row key={index} id="row18">
            <Col md={8}>
              <div id="row19">{list.title}</div>
              <div id="row20">{list.description}</div>
            </Col>
            <Col id="prv6" md={2} lg={2} sm={12} xs={12}>
              <Button
                id="prvbtn2"
                onClick={() => {
                  deletedata(list._id);
                  getPolicyData();
                }}
              >
                DELETE
              </Button>
            </Col>
            <Col md={2} lg={2} sm={12} xs={12}>
              <Button
                id="prv7"
                onClick={() => {
                  navigate("/PrivacyPolicyEdit", {
                    state: { id: list },
                  });
                }}
              >
                UPDATE
              </Button>
            </Col>
          </Row>
        ))}
      </Container>
    </>
  );
}
