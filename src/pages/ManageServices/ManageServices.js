import React, { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import Header2 from "../../components/Header2/Header2";
import { apicaller } from "../../utils/api";
import "./ManageServices.css";
import Servicecard from "../../components/Servicecard/Servicecard";
import Servicedescription from "../../components/Servicedescription/Servicedescription";
import { MdAddBox } from "react-icons/md";
import AddServiceModal from "../../components/AddServiceModal/AddServiceModal";

export default function ManageServices() {
  const [services, setServices] = useState([]);
  const [servicesPara, setServicesPara] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [spin, setSpin] = useState(true);

  useEffect(() => {
    getServices();
    getServicesPara();
  }, []);

  const getServices = () => {
    apicaller("service", null, "get", null)
      .then((res) => {
        setServices(res?.data);
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(()=>setSpin(false));
  };
  const getServicesPara = () => {
    apicaller("get-service-para", null, "get", null)
      .then((res) => {
        setServicesPara(res?.data?.para);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <>
      <Header2 />
      <Container>
        {spin ? (
          <Row>
            <Col id="ms2">
              <Spinner animation="border" variant="danger" />
            </Col>
          </Row>
        ) : (
          <>
            <div>
              <MdAddBox
                style={{
                  color: "#FC3973",
                  height: "2em",
                  width: "2em",
                  float: "right",
                  margin: "1rem 0 1rem 0",
                  cursor:"pointer"
                }}
                onClick={() => setModalShow(true)}
              />
            </div>
            <AddServiceModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />

            <Row id="center">
              {services.map((item, i) => (
                <Col lg={4} md={4} sm={4} xs={12} key={i}>
                  <Servicecard
                    para={item?.description}
                    head={item?.title}
                    dice={item?.icon}
                    id={item?._id}
                  />
                </Col>
              ))}
            </Row>
          </>
        )}
      </Container>
      {servicesPara.map((item) => (
        <Servicedescription paraa={item?.description} item={item} />
      ))}
    </>
  );
}
