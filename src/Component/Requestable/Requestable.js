import React, { useEffect, useState } from "react";
import { Container, Col, Row, Button, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { apicaller } from "../../utils/api";
import "./Requestable.css";

export default function Requestable() {
  const [newPatholab, setNewPatholab] = useState([]);
  const userToken = useSelector((state) => state.auth.token);

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
    getNewPatholab();
  }, []);

  const getNewPatholab = () => {
    apicaller("pathology-by-status?status=pending", null, "get", null)
      .then((res) => {
        setNewPatholab(res.data);
      })
      .catch((e) => {
        // console.log(e);
      });
  };

  const approvePatholab = (id) => {
    if (window.confirm("are you sure you want to approve : ")) {
      const data = {
        pathology_id: id,
        status: "approved",
      };
      const token = "Bearer " + userToken;
      apicaller("admin/pathology-status", data, "put", token)
        .then((res) => {
          getNewPatholab();
          sToast("Patholab Approved Successfully")
        })
        .catch((e) => {
          // console.log(e);
        });
    }
  };

  const navigate = useNavigate();

  return (
    <>
      <Container id="tdrt4">
        <div id="tdrt1">New Patholab Request</div>
        <Table responsive="sm">
          <thead>
            <tr id="tdrt2">
              <th id="tdrt3">Sl no</th>
              <th id="tdrt3">Pathology name</th>
              <th id="tdrt3">Date & time</th>
              <th id="tdrt3">Phone no</th>
              <th id="tdrt3">Email</th>
              <th id="tdrt3"></th>
            </tr>
          </thead>
          <tbody>
            {newPatholab.map((item, i) => (
              <tr
                key={i}
                // onClick={() => {
                //   navigate("/pathodetail", { state: { id: item } });
                // }}
              >
                <td id="tdrt5">{i + 1}</td>
                <td id="tdrt5">{item.lab_name}</td>
                <td id="tdrt5">
                  {new Date(item.createdAt).toLocaleDateString()}{" "}
                  {new Date(item.createdAt).toLocaleTimeString()}
                </td>
                <td id="tdrt5">{item.phone_number}</td>
                <td id="tdrt5">{item.email}</td>
                <td id="tdrt5">
                  <Button
                    id="newpatholabcard6"
                    onClick={() => approvePatholab(item._id)}
                  >
                    Approve
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
    // <div>
    //   <Container>
    //     <Row>
    //       <Col id="newpatholabcard1">
    //         <Row id="newpatholabcard3">
    //           <Col>New Patholab Request</Col>
    //         </Row>
    //         <Row id="newpatholabcard5">
    //           <Col md="1" xs="1">
    //             Sl No
    //           </Col>
    //           <Col>Pathology name</Col>
    //           <Col>Date & time</Col>
    //           <Col>Phone no</Col>
    //           <Col>Email</Col>
    //           <Col></Col>
    //         </Row>
    //         {newPatholab.map((item, i) => (
    //           <Row key={i} onClick={() => {navigate("/pathodetail", { state: { id: item } });}}>
    //             <Col id="newpatholabcard4" md="1" xs="1">
    //               {i + 1}
    //             </Col>
    //             <Col id="newpatholabcard2">{item.lab_name}</Col>
    //             <Col id="newpatholabcard2">
    //               {new Date(item.createdAt).toLocaleDateString()}{" "}
    //               {new Date(item.createdAt).toLocaleTimeString()}
    //             </Col>
    //             <Col id="newpatholabcard2">{item.phone_number}</Col>
    //             <Col id="newpatholabcard2">{item.email}</Col>
    //             <Col>
    //               <Button id="newpatholabcard6" onClick={()=>approvePatholab(item._id)}>Approve</Button>
    //               {/* <Button id="newpatholabcard6">Reject</Button> */}
    //             </Col>
    //           </Row>
    //         ))}
    //         {/* <Row>
    //           <Col id="newpatholabcard4" xs="1" md="1">
    //             2
    //           </Col>
    //           <Col id="newpatholabcard2">Long Life Lab</Col>
    //           <Col id="newpatholabcard2">10:45:16 AM</Col>
    //           <Col id="newpatholabcard2">9876543210</Col>
    //           <Col id="newpatholabcard2">Patia, Bhubneswer</Col>
    //         </Row>
    //         <Row>
    //           <Col id="newpatholabcard4" xs="1" md="1">
    //             3
    //           </Col>
    //           <Col id="newpatholabcard2">Long Life Lab</Col>
    //           <Col id="newpatholabcard2">10:45:16 AM</Col>
    //           <Col id="newpatholabcard2">9876543210</Col>
    //           <Col id="newpatholabcard2">Patia, Bhubneswer</Col>
    //         </Row> */}
    //       </Col>
    //     </Row>
    //   </Container>
    // </div>
  );
}
