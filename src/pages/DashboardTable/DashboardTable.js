import React from 'react'
import './DashboardTable.css'
import { Button, Container, Image, Table } from 'react-bootstrap';
import img from '../../assets/android.png';
import { AiOutlineEllipsis } from "react-icons/ai";

export default function DashboardTable() {
  return (
    <>
    {/* <Header2 /> */}
        <Container>
        <div id="dt1">
          <Table>
            <thead id="dt5">
              <tr>
                <th>Image</th>
                <th>Course</th>
                <th>Purchase Id</th>
                <th>Price</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody id="dt6">
              <tr>
                <td><Image src={img} id="dt2"/></td> 
                <td id="dt9">Android Development</td>
                <td id="dt9">#125467478</td>
                <td id="dt9">INR 22,000</td>
                <td><Button size="sm" id="dt7">
                  Success
                   </Button>{' '}</td>
                 <td><AiOutlineEllipsis  id="dt8" /></td>
              </tr>
              <tr>
                <td><Image src={img} id="dt2"/></td> 
                <td id="dt9">Android Development</td>
                <td id="dt9">#125467478</td>
                <td id="dt9">INR 22,000</td>
                <td>
                  <Button size="sm" id="dt3">
                  Failed
                  </Button>{' '}</td>
                  <td><AiOutlineEllipsis  id="dt8" /></td>
              </tr>
              <tr>
                <td><Image src={img} id="dt2"/></td> 
                <td id="dt9">Android Development</td>
                <td id="dt9">#125467478</td>
                <td id="dt9">INR 22,000</td>
                <td><Button size="sm" id="dt7">
                    Success
                   </Button>{' '}</td>
                <td><AiOutlineEllipsis  id="dt8" /></td>
              </tr>
              <tr>
                <td><Image src={img} id="dt2"/></td> 
                <td id="dt9">Android Development</td>
                <td id="dt9">#125467478</td>
                <td id="dt9">INR 22,000</td>
                <td><Button size="sm" id="dt4">
                    Pending
                    </Button>{' '}</td>
                <td><AiOutlineEllipsis  id="dt8" /></td>
              </tr>
              <tr>
                <td><Image src={img} id="dt2"/></td> 
                <td id="dt9">Android Development</td>
                <td id="dt9">#125467478</td>
                <td id="dt9">INR 22,000</td>
                <td><Button size="sm" id="dt7">
                  Success
                   </Button>{' '}</td>
                <td ><AiOutlineEllipsis  id="dt8"/></td>
              </tr>



            </tbody>
          </Table>
        </div>
        </Container>
    </>
  )
}
