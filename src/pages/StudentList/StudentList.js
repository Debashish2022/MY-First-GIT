import React from 'react'
import { Button, Container, Image, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Header2 from '../../components/Header2/Header2'
import "./StudentList.css"
import dp from "../../assets/StudentImage.png";

export default function StudentList() {
  return (
    <>
        <Header2 />
        <Container>
        <div id="sl1">
          <Table>
            <thead>
              <tr id="sl2">
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
                <th>Student id</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td><Image src={dp} alt='display picture' id="sl4"/></td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>xyxx</td>
                <td><Button id="sl3"><Link to="/studentdetail">Details</Link></Button></td>
                
              </tr>
            </tbody>
          </Table>
        </div>
        </Container>
    </>
  )
}
