import axios from "axios";
import React, { useEffect, useState } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { API, apicaller } from "../../utils/api";
import Utility from "../../utils/Utility";
import Loader from "../Loader/Loader";
import "./AddCoachingCenterModal.css";

export default function AddCoachingCenterModal(props) {
  const [loading, setLoading] = useState(false);
  const [getAllDistricts, setGetAllDistricts] = useState([]);

  const [center, setCenter] = useState("");
  const [districtId, setDistrictId] = useState("");
  const [Staff, setStaff] = useState([]);
  const [staffName, setStaffName] = useState("");
  const [staffEmail, setStaffEmail] = useState("");
  const [staffNumber, setStaffNumber] = useState("");
  const [Manager, setManager] = useState([]);
  const [managerName, setManagerName] = useState("");
  const [managerEmail, setManagerEmail] = useState("");
  const [managerNumber, setManagerNumber] = useState("");

  const regPhn = /^[46789]\d{9}$/;
  // const regEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  const regEmail = /^[a-zA-Z0-9_.]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

  // get districts
  useEffect(() => {
    getDistrictsFun();
  }, []);

  const getDistrictsFun = () => {
    apicaller("get-district", null, "GET", null).then((res) => {
      setGetAllDistricts(res?.data);
    });
  };

  const addCenterFun = () => {
    if (center.length === 0) {
      Utility.eToast("Enter Center Name");
      return false;
    } else if (center.length < 4) {
      Utility.eToast("Enter Center Name");
      return false;
    } else if (districtId.length === 0) {
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
        method: "post",
        maxBodyLength: Infinity,
        url: `${API}/add-center`,
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + props.token,
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          console.log(response.data);
          Utility.sToast("Center Added Successfully");
          props.onHide();
          window.location.reload();
          setCenter("");
          setStaff([]);
          setManager([]);
          setDistrictId("");
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

  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <div id="addCenterModal3">Add Coaching Center</div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Row>
            <Col md={4}>
              <Form.Group className="mb-3">
                <Form.Label id="addCenterModal1">Center Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Center Name"
                  id="addCenterModal2"
                  value={center}
                  onChange={(e) => setCenter(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group className="mb-3">
                <Form.Label id="addCenterModal1">Choose District</Form.Label>
                <Form.Select
                  id="addCenterModal2"
                  value={districtId}
                  onChange={(e) => setDistrictId(e.target.value)}
                >
                  <option value="" id="addCenterModal2">
                    Select
                  </option>
                  {getAllDistricts.map((item, ind) => (
                    <option value={item?._id} key={ind} id="addCenterModal2">
                      {item?.district_name}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <div className=" mt-2" id="addCenterModal3">
            Add Manager Details
          </div>
          <Row>
            <Col md={4}>
              <Form.Group className="mb-3">
                <Form.Label id="addCenterModal1">Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Manager Name"
                  id="addCenterModal2"
                  value={managerName}
                  onChange={(e) => setManagerName(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col md={3}>
              <Form.Group className="mb-3">
                <Form.Label id="addCenterModal1">Email</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Manager Email Id"
                  id="addCenterModal2"
                  value={managerEmail}
                  onChange={(e) => setManagerEmail(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col md={3}>
              <Form.Group className="mb-3">
                <Form.Label id="addCenterModal1">Mobile Number</Form.Label>
                <Form.Control
                  type="text"
                  maxLength={10}
                  placeholder="Enter Mobile Number"
                  id="addCenterModal2"
                  value={managerNumber}
                  onChange={(e) => setManagerNumber(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col md={2}>
              <Button
                variant="light"
                id="addCenterModal4"
                onClick={() => addManagerFun()}
              >
                ADD MANAGER
              </Button>
            </Col>
          </Row>

          <div className=" mt-2" id="addCenterModal3">
            Add Staffs Details
          </div>
          <Row>
            <Col md={4}>
              <Form.Group className="mb-3">
                <Form.Label id="addCenterModal1">Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Staff Name"
                  id="addCenterModal2"
                  value={staffName}
                  onChange={(e) => setStaffName(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col md={3}>
              <Form.Group className="mb-3">
                <Form.Label id="addCenterModal1">Email</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Staff Email Id"
                  id="addCenterModal2"
                  value={staffEmail}
                  onChange={(e) => setStaffEmail(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col md={3}>
              <Form.Group className="mb-3">
                <Form.Label id="addCenterModal1">Mobile Number</Form.Label>
                <Form.Control
                  type="text"
                  maxLength={10}
                  placeholder="Enter Mobile Number"
                  id="addCenterModal2"
                  value={staffNumber}
                  onChange={(e) => setStaffNumber(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col md={2}>
              <Button
                variant="light"
                id="addCenterModal4"
                onClick={() => addStaffFun()}
              >
                ADD STAFF
              </Button>
            </Col>
          </Row>
        </Form>
      </Modal.Body>
      <Modal.Footer style={{ display: "flex", justifyContent: "center" }}>
        <Button
          id="addCenterModal5"
          variant="light"
          onClick={() => addCenterFun()}
        >
          {loading ? <Loader animation="border" size="sm" variant="light" /> : "ADD CENTER"}
        </Button>
        {/* <Button onClick={props.onHide}>CLOSE</Button> */}
      </Modal.Footer>
    </Modal>
  );
}
