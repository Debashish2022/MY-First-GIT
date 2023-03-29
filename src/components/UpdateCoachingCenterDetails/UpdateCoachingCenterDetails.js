import React, { useState, useEffect } from "react";
import "./UpdateCoachingCenterDetails.css";
import { Container, Row, Col, Form, Button, Table } from "react-bootstrap";
import Utility from "../../utils/Utility";
import axios from "axios";
import { useSelector } from "react-redux";
import { getUserToken } from "../../Redux/Slice/UserSlice";
import { useNavigate, useLocation } from "react-router-dom";
import { API, apicaller } from "../../utils/api";
import Loader from "../Loader/Loader";

export default function UpdateCoachingCenterDetails() {
  const [loading, setLoading] = useState(false);
  const [getAllDistricts, setGetAllDistricts] = useState([]);

  const location = useLocation();
  const coachingCenter = location.state.item;
  //   console.log("coaching center", coachingCenter);

  const [center, setCenter] = useState(coachingCenter.center_name);
  const [districtId, setDistrictId] = useState(
    coachingCenter?.district_id?.district_id
  );
  const [Staff, setStaff] = useState(coachingCenter?.staff);
  const [staffName, setStaffName] = useState("");
  const [staffEmail, setStaffEmail] = useState("");
  const [staffNumber, setStaffNumber] = useState("");
  const [Manager, setManager] = useState(coachingCenter?.manager);
  const [managerName, setManagerName] = useState("");
  const [managerEmail, setManagerEmail] = useState("");
  const [managerNumber, setManagerNumber] = useState("");

  const regPhn = /^[46789]\d{9}$/;
  // const regEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  const regEmail = /^[a-zA-Z0-9_.]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

  const Token = useSelector(getUserToken);
  const navigate = useNavigate();

  //   console.log("M", Manager);

  // get districts
  useEffect(() => {
    getDistrictsFun();
  }, []);

  const getDistrictsFun = () => {
    apicaller("get-district", null, "GET", null).then((res) => {
      setGetAllDistricts(res?.data);
    });
  };

  const updateCenterFun = () => {
    if (center.length === 0) {
      Utility.eToast("Enter Center Name");
      return false;
    } else if (center.length < 4) {
      Utility.eToast("Enter Center Name");
      return false;
    } else if (districtId?.length === 0) {
      Utility.eToast("Choose District");
      return false;
    } else if (Manager.length === 0) {
      Utility.eToast("Add Manager Details");
      return false;
    } else if (Staff.length === 0) {
      Utility.eToast("Add Staff Details");
      return false;
    } else {
      setLoading(true);
      const data = {
        center_name: center,
        district_id: districtId,
        latitude: "10.7",
        longitude: "78.0",
        staff: Staff,
        manager: Manager,
      };

      var config = {
        method: "PUT",
        maxBodyLength: Infinity,
        url: `${API}update-center/${coachingCenter._id}`,
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + Token,
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          console.log(response.data);
          Utility.sToast("Center Updated Successfully");
          navigate("/coachingCenter");
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  // add staff
  const addStaffFun = () => {
    let staffObj = new Object();
    if (staffName.length === 0) {
      Utility.eToast("Enter Staff Name");
      return false;
    } else if (staffName.length < 4) {
      Utility.eToast("Enter Staff Name");
      return false;
    } else if (staffEmail.length === 0) {
      Utility.eToast("Enter Staff Email");
      return false;
    } else if (!regEmail.test(staffEmail)) {
      Utility.eToast("Enter a valid Email Id");
      return false;
    } else if (staffNumber.length === 0) {
      Utility.eToast("Add Mobile Number");
      return false;
    } else if (!regPhn.test(staffNumber)) {
      Utility.eToast("Enter a valid mobile number");
      return false;
    } else {
      staffObj.staff_name = staffName;
      staffObj.staff_email = staffEmail;
      staffObj.staff_number = staffNumber;

      Staff.push(staffObj);
      Utility.sToast("Added");
      setStaffName("");
      setStaffEmail("");
      setStaffNumber("");

      return true;
    }
  };

  // add manager
  const addManagerFun = () => {
    let managerObj = new Object();
    if (managerName.length === 0) {
      Utility.eToast("Enter Manager Name");
      return false;
    } else if (managerName.length < 4) {
      Utility.eToast("Enter Manager Name");
      return false;
    } else if (managerEmail.length === 0) {
      Utility.eToast("Enter Manager Email");
      return false;
    } else if (!regEmail.test(managerEmail)) {
      Utility.eToast("Enter a valid Email Id");
      return false;
    } else if (managerNumber.length === 0) {
      Utility.eToast("Add Mobile Number");
      return false;
    } else if (!regPhn.test(managerNumber)) {
      Utility.eToast("Enter a valid mobile number");
      return false;
    } else {
      managerObj.manager_name = managerName;
      managerObj.manager_email = managerEmail;
      managerObj.manager_number = managerNumber;

      Manager.push(managerObj);
      Utility.sToast("Added");
      setManagerName("");
      setManagerEmail("");
      setManagerNumber("");
      return true;
    }
  };

  const removeStaffFun = (ind) => {
    console.log("hii", ind);
    Staff.splice(ind, 1);
    console.log(Staff);
    return Staff;
  };
  console.log("after delete staff", Staff);

  const removeManagerFun = (ind) => {
    console.log("hii", ind);
    Manager.splice(ind, 1);
    console.log("after delete", Manager);
    return Manager;  
  }; 
  return (
    <Container>
      <Form>
        <Row>
          <Col md={4}>
            <Form.Group className="mb-3">
              <Form.Label id="updateCenter1">Center Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Center Name"
                id="updateCenter2"
                value={center}
                onChange={(e) => setCenter(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group className="mb-3">
              <Form.Label id="updateCenter1">Choose District</Form.Label>
              <Form.Select
                id="updateCenter2"
                value={districtId}
                onChange={(e) => setDistrictId(e.target.value)}
              >
                <option value="" id="updateCenter2">
                  Select
                </option>
                {getAllDistricts.map((item, ind) => (
                  <option value={item?._id} key={ind} id="updateCenter2">
                    {item?.district_name}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        <div className=" mt-2" id="updateCenter3">
          Update Manager Details
        </div>
        <Row>
          <Col md={3}>
            <Form.Group className="mb-3">
              <Form.Label id="updateCenter1">Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Manager Name"
                id="updateCenter2"
                //   defaultValue={item?.manager_name}
                value={managerName}
                onChange={(e) => setManagerName(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group className="mb-3">
              <Form.Label id="updateCenter1">Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Manager Email Id"
                id="updateCenter2"
                //   defaultValue={item?.manager_email}
                value={managerEmail}
                onChange={(e) => setManagerEmail(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group className="mb-3">
              <Form.Label id="updateCenter1">Mobile Number</Form.Label>
              <Form.Control
                type="text"
                maxLength={10}
                placeholder="Enter Mobile Number"
                id="updateCenter2"
                //   defaultValue={item?.manager_number}
                value={managerNumber}
                onChange={(e) => setManagerNumber(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col md={2}>
            <Button
              variant="light"
              id="updateCenter4"
              onClick={() => addManagerFun()}
            >
              ADD MANAGER
            </Button>
          </Col>
        </Row>
        <Row>
          <Col id="updateCenter8">
            <Table className="mt-3 mb-5" striped="columns">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Manager Name</th>
                  <th>Email</th>
                  <th>Mobile Number</th>
                  <th> </th>
                </tr>
              </thead>
              <tbody>
                {Manager.map((item, ind) => (
                  <tr>
                    <td>{ind + 1}</td>
                    <td>{item?.manager_name}</td>
                    <td>{item?.manager_email}</td>
                    <td>{item?.manager_number}</td>
                    <td>
                      <Button
                        variant="danger"
                        id="updateCenter5"
                        onClick={() => removeManagerFun(ind, item)}
                      >
                        Remove
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>

        <div className=" mt-2" id="updateCenter3">
          Update Staffs Details
        </div>
        <Row>
          <Col md={4}>
            <Form.Group className="mb-3">
              <Form.Label id="updateCenter1">Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Staff Name"
                id="updateCenter2"
                value={staffName}
                onChange={(e) => setStaffName(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group className="mb-3">
              <Form.Label id="updateCenter1">Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Staff Email Id"
                id="updateCenter2"
                value={staffEmail}
                onChange={(e) => setStaffEmail(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group className="mb-3">
              <Form.Label id="updateCenter1">Mobile Number</Form.Label>
              <Form.Control
                type="text"
                maxLength={10}
                placeholder="Enter Mobile Number"
                id="updateCenter2"
                value={staffNumber}
                onChange={(e) => setStaffNumber(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col md={2}>
            <Button
              variant="light"
              id="updateCenter4"
              onClick={() => addStaffFun()}
            >
              ADD STAFF
            </Button>
          </Col>
        </Row>
        <Row>
          <Col id="updateCenter8">
            <Table className="mt-3 mb-5" striped="columns">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Staff Name</th>
                  <th>Email</th>
                  <th>Mobile Number</th>
                  <th> </th>
                </tr>
              </thead>
              <tbody>
                {Staff.map((item, ind) => (
                  <tr>
                    <td>{ind + 1}</td>
                    <td>{item?.staff_name}</td>
                    <td>{item?.staff_email}</td>
                    <td>{item?.staff_number}</td>
                    <td>
                      <Button
                        variant="danger"
                        id="updateCenter5"
                        onClick={() => removeStaffFun(ind)}
                      >
                        Remove
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            id="addCenterModal5"
            variant="light"
            onClick={() => updateCenterFun()}
          >
            {loading ? (
              <Loader animation="border" size="sm" variant="light" />
            ) : (
              "UPDATE CENTER"
            )}
          </Button>
        </div>
      </Form>
    </Container>
  );
}
