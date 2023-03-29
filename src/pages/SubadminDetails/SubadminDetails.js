import React from "react";
import { Container, Table } from "react-bootstrap";
import Header2 from "../../components/Header2/Header2";
import "./SubadminDetails.css";

export default function SubadminDetails() {
  return (
    <>
      <Header2 />
      <Container>
        <div id="sd2">
          <span id="sd1">Subadmin : xyz@gmail.com</span>
        </div>

        <div id="sd3">
          <Table>
            <thead>
              <tr id="sd4">
                <th>#</th>
                <th>Teacher name</th>
                <th>Userid</th>
                <th>District</th>
                <th>Block</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>xyxx</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Container>
    </>
  );
}
