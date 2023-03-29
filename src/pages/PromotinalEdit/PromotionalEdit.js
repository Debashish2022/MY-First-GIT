import React, { useState, useEffect } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Slidebar from "../Bar/Bar";
import { useLocation } from "react-router-dom";
import { apicaller } from "../../utils/api";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

export default function PromotionalEdit() {
  const location = useLocation();
  const promoedit = location.state.id;
  // const { defaultvalue } = promoedit.answer;
  const promoid = location.state.id._id;
  const navigate = useNavigate();
  const [promoEditDiscount, setPromoEditDiscount] = useState(" ");
  const [promoEditOffer, setpromoEditOffer] = useState(" ");
  const [promoEditDiscounterror, setPromoEditDiscounterror] = useState(false);
  const [promoEditOffererror, setPromoEditOffererror] = useState(false);

  const saveBtn = async (e) => {
    // alert(promoEditOffer.length);
    // alert(promoEditDiscount.length);

    if (promoEditDiscount.length >= 2) {
      setPromoEditDiscounterror(false);
      if (promoEditOffer.length >= 2) {
        setPromoEditDiscount(false);

        var data = {
          percentage: promoEditDiscount,
          bookings_type: promoEditOffer,
          // _id: promoid,
        };
        // console.log("Data is", data);
        // alert(promoid);
        const res = await apicaller(
          `update-Promotion/${promoid}`,
          data,
          "PUT",
          null
        );
        // console.log(res);

        if (res.status === 201 || res.status === 200) {
          navigate("/promotionalpage");
        }
      } else {
        setPromoEditOffererror(true);
      }
    } else {
      setPromoEditDiscounterror(true);
    }

    // e.preventDefault();

    // console.log(`https://api.novaprolabs.com/api/update-faq/${promoid}`);
  };

  return (
    <>
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
                <Col>
                  <div>
                    <Form.Group className="mb-3">
                      <Form.Label>Enter Question</Form.Label>
                      <Form.Control
                        onChange={(e) => setPromoEditDiscount(e.target.value)}
                        type="text"
                        defaultValue={promoedit.percentage}
                      />
                      {promoEditDiscounterror && (
                        <div style={{ color: "red" }}>*Enter Discount</div>
                      )}
                    </Form.Group>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div>
                    {/* <Form.Group className="mb-3">
                      <Form.Label>Enter Your Answer</Form.Label>
                      <Form.Control
                        type="text"
                       
                        onChange={(e) => setpromoEditOffer(e.target.value)}
                        defaultValue={promoedit.answer}
                      />
                    </Form.Group> */}

                    <Form.Group className="mb-3">
                      <Form.Label>Enter Your Answer</Form.Label>
                      <Form.Control
                        onChange={(e) => setpromoEditOffer(e.target.value)}
                        defaultValue={promoedit.bookings_type}
                        as="textarea"
                        rows={3}
                      />
                      {promoEditOffererror && (
                        <div style={{ color: "red" }}>*Enter Offer Type</div>
                      )}
                    </Form.Group>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col></Col>

                <Col md={1}>
                  <Button
                    id="promoedit2"
                    onClick={saveBtn}
                    //    onClick={saveBtn}
                    variant="success"
                  >
                    Save
                  </Button>
                </Col>
                <Col md={1}>
                  <Button
                    id="promoedit2"
                    onClick={() => {
                      navigate("/promotionalpage");
                    }}
                    variant="danger"
                  >
                    Cancel
                  </Button>
                </Col>
                <Col></Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
}
