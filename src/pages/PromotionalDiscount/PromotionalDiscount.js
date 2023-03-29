import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Image,
  Modal,
  Row,
} from "react-bootstrap";
import { apicaller } from "../../utils/api";
import "./PromotionalDiscount.css";
import { useNavigate, Link } from "react-router-dom";
import Slidebar from "../Bar/Bar";
import { toast } from "react-toastify";

export default function PromotionalDiscount() {
  const navigate = useNavigate();
  const [promote, setPromote] = useState(false);
  const [getPromotionDisData, setGetPromotionDisData] = useState([]);

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
    getPromotionAdmin();
  }, []);

  const getPromotionAdmin = () => {
    apicaller("get-Promotion", null, "get", null)
      .then((res) => {
        setGetPromotionDisData(res.data.Promotion);
      })
      .catch((e) => {
        // console.log(e);
      });
  };

  // delete api
  const deletediscount = (id) => {
    if (window.confirm("Are you sure want to delete?")) {
      var config = {
        method: "delete",
        url: "https://api.novaprolabs.com/api/delete-Promotion/" + id,
        headers: {},
      };

      // console.log(id);

      axios(config)
        .then(function (response) {
          // console.log(JSON.stringify(response.data));
          getPromotionAdmin();
          sToast("Data Deleted Successfully.");
        })
        .catch(function (error) {
          // console.log(error);
        });
    }
  };

  return (
    <div>
      <Container fluid>
        <Row>
          <Col md="2" xs="3">
            <Slidebar />
          </Col>
          <Col
            md="10"
            xs="9"
            style={{ backgroundColor: "aliceblue", paddingTop: "2rem" }}
          >
            <Container>
              <Row>
                <Col id="promotional5">Promotional & Discount</Col>
              </Row>
              <Row id="promotional3">
                <Col></Col>
                <Col md={1}></Col>
                <Col md={1}>
                  <Button id="promotional1" onClick={() => setPromote(true)}>
                    Add
                  </Button>
                </Col>
              </Row>
              <AddPromotionalModal
                show={promote}
                onHide={() => {
                  setPromote(false);
                  getPromotionAdmin();
                }}
              />
            </Container>
            <Container>
              <Row id="promotional3">
                <Col xs={12} md={3} id="pd5">
                  {/* <Image src={promotion} alt="img" id="pd2" /> */}
                </Col>
                <Col xs={12} md={3} id="promotional4">
                  Discount
                </Col>
                <Col xs={12} md={3} id="promotional4">
                  Offer Type
                </Col>
              </Row>

              {getPromotionDisData.map((item, index) => (
                <Row id="promotional3" key={index}>
                  <Col xs={12} md={3} id="pd5">
                    {/* <Image src={promotion} alt="img" id="pd2" /> */}
                  </Col>
                  <Col xs={12} md={3} id="promotional4">
                    {item.percentage}%off
                  </Col>
                  <Col xs={12} md={3} id="promotional4">
                    {item.bookings_type}
                  </Col>
                  <Col></Col>
                  <Col md={1} id="promotional2">
                    <Button
                      variant="success"
                      onClick={() => {
                        navigate("/promotionaledit", { state: { id: item } });
                      }}
                      id="promotional1"
                    >
                      Edit
                    </Button>
                  </Col>
                  <Col md={1} id="promotional2">
                    <Button
                      variant="danger"
                      onClick={() => deletediscount(item._id)}
                      id="promotional1"
                    >
                      Delete
                    </Button>
                  </Col>
                </Row>
              ))}
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

function AddPromotionalModal(props) {
  const [percentage, setPercentage] = useState("");
  const [bookingtype, setBookingtype] = useState("");

  // to add new data
  const promotionsubmit = async (e) => {
    e.preventDefault();
    //   key value pair
    var data = JSON.stringify({
      percentage: percentage,
      bookings_type: bookingtype,
    });
    // console.log("Data is", data);
    const res = await apicaller("add-Promotion", data, "POST", null);
    if (res.status === 201 || res.status === 200) {
      setBookingtype("");
      setPercentage("");
    }
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Add Discount Percentage:</Form.Label>
            <Form.Control
              type="text"
              placeholder="add Discount Percentage"
              value={percentage}
              onChange={(e) => setPercentage(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Add Offer Name:</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              placeholder="add Offer Name"
              value={bookingtype}
              onChange={(e) => setBookingtype(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="primary"
          type="promotionsubmit"
          onClick={promotionsubmit}
        >
          Submit
        </Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
