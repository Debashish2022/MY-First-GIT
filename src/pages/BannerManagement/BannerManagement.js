import React, { useEffect, useState } from "react";
import "./BannerManagement.css";
import Header2 from "../../components/Header2/Header2";
import { Button, Col, Container, Image, Row, Spinner } from "react-bootstrap";
import { MdAddBox } from "react-icons/md";
import { apicaller } from "../../utils/api";
import AddBannerModal from "../../components/AddBannerModal/AddBannerModal";
import Utility from "../../utils/Utility";

export default function BannerManagement() {
  const [banner, setBanner] = useState([]);
  const [modalShow, setModalShow] = React.useState(false);
  const [spin, setSpin] = useState(true);

  const getSlider = () => {
    apicaller("get-advertisement", null, "get", null)
      .then((res) => {
        setBanner(res.data.add);
        setSpin(false);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getSlider();
  }, []);

  const deleteBanner = (id) => {
    if (window.confirm("Are you sure, you want to delete ?")) {
      var FormData = require("form-data");
      var data = new FormData();
      apicaller(`delete-advertisement/${id}`, data, "delete", null)
        .then((res) => {
          Utility.sToast("Banner deleted Successfully");
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  return (
    <>
      {spin ? (
        <Container>
          <Row>
            <Col id="bm7">
              <Spinner animation="border" variant="info" />
            </Col>
          </Row>
        </Container>
      ) : (
        <>
          <Header2 />
          <Container>
            <Row id="bm1">
              <Col id="bm3">Banner</Col>
              <Col id="bm2">
                <MdAddBox
                  style={{ height: "2em", width: "2em", cursor: "pointer" }}
                  onClick={() => setModalShow(true)}
                />
              </Col>
              <AddBannerModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </Row>
            {banner.map((item, i) => (
              <Row key={i} style={{ marginBottom: "1.5rem" }}>
                <Col xs={12} sm={12} md={10} lg={10} xl={10} xxl={10} id="bm5">
                  <Image src={item.url} alt="Banner image" id="bm4" />
                </Col>
                <Col xs={12} sm={12} md={2} lg={2} xl={2} xxl={2} id="bm5">
                  <Button id="bm6" onClick={() => deleteBanner(item._id)}>
                    Remove
                  </Button>
                </Col>
              </Row>
            ))}
          </Container>
        </>
      )}
    </>
  );
}
