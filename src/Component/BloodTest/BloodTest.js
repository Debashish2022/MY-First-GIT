import React from 'react'
import "./BloodTest.css";
import {Col, Container, Row, Table} from "react-bootstrap";
import { TbEdit } from "react-icons/tb";
import { IoTrashOutline } from "react-icons/io5";

export default function BloodTest() {
  return (
    <div>
      <Container fluid id="bloodtest5">
        <Row>
          <Col>
        <Table style={{ padding: "1rem" }}>
                      <thead>
                        <tr id="bloodtest1">
                          <th>Blood Test</th>
                          <th></th>
                          <th></th>
                          <th></th>
                        </tr>
                      </thead>

                      <tbody>
                        {/* 1st row */}
                        <tr id="bloodtest2">
                          <td id="bloodtest3">Urine Test</td>
                          <td id="bloodtest3">Price : ₹500.00</td>
                          <td id="bloodtest3">Offer : 50%</td>
                          <td id="bloodtest3">
                            <div>
                              <TbEdit id="bloodtest4" />
                              <IoTrashOutline id="bloodtest4" />
                            </div>
                          </td>
                        </tr>
                        {/* 2nd row */}
                        <tr id="bloodtest2">
                          <td id="bloodtest3">Urine Test</td>
                          <td id="bloodtest3">Price : ₹500.00</td>
                          <td id="bloodtest3">Offer : 50%</td>
                          <td id="bloodtest3">
                            <div>
                              <TbEdit id="bloodtest4" />
                              <IoTrashOutline id="bloodtest4" />
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                    </Col>
                    </Row>
                    </Container>
    </div>
  )
}
