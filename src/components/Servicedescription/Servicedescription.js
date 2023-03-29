import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Servicedescription.css";
import { TiEdit } from "react-icons/ti";
import ServiceDescriptionUpdateModal from "../ServiceDescriptionUpdateModal/ServiceDescriptionUpdateModal";

function Servicedescription(props) {
  const [modalShow, setModalShow] = React.useState(false);
  // console.log("datatatatatatata", props.item);
  return (
    <div className="main">
      <Container fluid style={{ background: "#EFE1C7", marginTop: "10px" }}>
        <Container>
          <Row>
            <div>
              <TiEdit
                style={{
                  float: "right",
                  marginTop: "1rem",
                  color: "#FC3973",
                  height: "1.5em",
                  width: "1.5em",
                  cursor: "pointer",
                }}
                onClick={() => setModalShow(true)}
              />
            </div>
            <ServiceDescriptionUpdateModal
              show={modalShow}
              onHide={() => setModalShow(false)}
              item={props?.item}
            />
            <Col
              lg={12}
              md={12}
              sm={12}
              xs={12}
              style={{ padding: "0px", margin: "0" }}
            >
              <div className="servicedescription_main">{props?.paraa}</div>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default Servicedescription;
