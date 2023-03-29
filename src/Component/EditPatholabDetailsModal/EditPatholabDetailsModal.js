import { useState } from "react";
import { Form, Row, Col, Modal, Button, Container } from "react-bootstrap";
import { MdEmojiTransportation } from "react-icons/md";
import { apicaller } from "../../utils/api";
import "./EditPatholabDetailsModal.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Loader from "../Loader/Loader";
import { useLocation, useNavigate } from "react-router-dom";

export default function EditPatholabDetailsModal(props) {
  const location = useLocation();
  const patholab = location?.state.item;
  // console.log(" selected patholab is", patholab);

  const navigate = useNavigate();

  const [email, setEmail] = useState(patholab?.email);
  const [labname, setLabname] = useState(patholab?.lab_name);
  const [fullname, setFullname] = useState(patholab?.full_name);
  const [phone, setPhone] = useState(patholab?.phone_number);
  const [description, setDescription] = useState(patholab?.description);
  const [experience, setExperience] = useState(patholab?.exp);
  const [specialization, setSpecialization] = useState(
    patholab?.specialization
  );
  const [labcapacity, setLabcapacity] = useState(patholab?.lab_capacity);
  const [govRegNum, setGovRegNum] = useState(patholab?.gov_registration_no);
  const [timestart, setTimestart] = useState(patholab?.time_start);
  const [timeend, setTimeend] = useState(patholab?.time_end);
  const [weekstart, setWeekstart] = useState(patholab?.week_start);
  const [weekend, setWeekend] = useState(patholab?.week_end);
  const [facilities, setFacilities] = useState(patholab?.facilities);

  const [isLoading, setIsLoading] = useState(false);

  const reg = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w\w+)+$/;
  var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
  const phn = /^\d{10}$/;
  // alphanumeric characters only
  const regExp = /^(?=.[a-zA-Z])(?=.[0-9])|(?:\.[a-zA-Z0-9-]+)*$/;

  //   toasts
  const eToast = (msg) => {
    toast.error(msg, {
      autoClose: 6000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const sToast = (msg) => {
    toast.success(msg, {
      autoClose: 6000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  // validation
  const validation = () => {
    if (labname.length < 6) {
      eToast("Enter Lab name");
      return false;
    } else if (govRegNum.length < 4) {
      eToast("Enter Gov. Registration No.");
      return false;
    } else if (labcapacity.length === 0) {
      eToast("Choose Lab Capacity");
      return false;
    } else if (specialization === "") {
      eToast("Enter Specialization");
      return false;
    } else if (fullname.length === 0) {
      eToast("Enter Full name");
      return false;
    } else if (email.length === 0) {
      eToast("Enter Email id");
      return false;
    } else if (!reg.test(email)) {
      eToast("Enter a valid email");
      return false;
    } else if (phone.length < 6) {
      eToast("Enter mobile number");
      return false;
    } else if (!phn.test(phone)) {
      eToast("Enter a valid phone number");
      return false;
    } else if (experience.length === 0 || !regExp.test(experience)) {
      eToast("Enter experience");
      return false;
    } else if (timestart.length === 0) {
      eToast("Choose Start Timing");
      return false;
    } else if (timeend.length === 0) {
      eToast("Choose Close Timing");
      return false;
    } else if (weekstart.length === 0) {
      eToast("Choose Starting Day");
      return false;
    } else if (weekend.length === 0) {
      eToast("Choose Closing Day");
      return false;
    } else if (facilities.length === 0) {
      eToast("Enter Facilities");
      return false;
    } else if (description.length === 0) {
      eToast("Enter Description");
      return false;
    } else {
      return true;
    }
  };

  // get all approved labs
  const getApprovedPatholab = () => {
    apicaller("pathology-by-status?status=approved", null, "get", null)
      .then((res) => {
        // console.log("all approved pathologies ", res.data);
      })
      .catch((e) => {
        // console.log(e);
      });
  };

  const patholabId = patholab?._id;

  const editFun = async () => {
    if (validation()) {
      setIsLoading(true);
      var data = {
        _id: patholabId,
        lab_name: labname,
        full_name: fullname,
        email: email,
        phone_number: phone,
        description: description,
        exp: experience,
        specialization: specialization,
        time_start: timestart,
        time_end: timeend,
        week_start: weekstart,
        week_end: weekend,
        lab_capacity: labcapacity,
        gov_registration_no: govRegNum,
        facilities: facilities,
      };

      await apicaller("pathology", data, "PUT", null)
        .then((res) => {
          if (res.status === 201 || res.status === 200) {
            setIsLoading(false);
            sToast("Updated Successfully!");
            navigate("/patholab");
            getApprovedPatholab();
          }
        })
        .catch(() => eToast("Couldn't Update"))
        .finally(() => setIsLoading(false));
    }
  };

  return (
    <>
      <Container fluid className="pt-5 pb-5" style={{ background: "aliceblue" }}>
        <Row ><Col id="editProfileTxt">EDIT PROFILE</Col></Row>
        <Row>
          <Col md={1}></Col>
          <Col md={10}>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label id="labelEditPatholab">Patholab Name</Form.Label>
                  <Form.Control
                    type="text"
                   id="inputfieldTxtEditPatholab" placeholder="Enter Pathology Name"
                    value={labname}
                    onChange={(e) => setLabname(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label id="labelEditPatholab">Gov Registration Number</Form.Label>
                  <Form.Control
                    type="text"
                   id="inputfieldTxtEditPatholab" placeholder="Enter Government Registration Number"
                    value={govRegNum}
                    onChange={(e) => setGovRegNum(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label id="labelEditPatholab">Lab Capacity</Form.Label>
                  <Form.Select
                    value={labcapacity}
                    onChange={(e) => setLabcapacity(e.target.value)}
                    id="inputfieldTxtEditPatholab"
                    aria-label="Default select example"
                  >
                    <option>Lab Capacity</option>
                    <option value="1">1 - 10</option>
                    <option value="2">11 - 20</option>
                    <option value="6">21 - 60</option>
                    <option value="4">61 - 40</option>
                    <option value="5">41 - 50</option>
                    <option value="6">51 - 60</option>
                    <option value="7">61 - 70</option>
                    <option value="8">71 - 80</option>
                    <option value="9">81 - 90</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label id="labelEditPatholab">Specialization</Form.Label>
                  <Form.Control
                    type="text"
                   id="inputfieldTxtEditPatholab" placeholder="Enter Specialization"
                    value={specialization}
                    onChange={(e) => setSpecialization(e.target.value)}
                  />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label id="labelEditPatholab">Full Name</Form.Label>
                  <Form.Control
                    type="text"
                   id="inputfieldTxtEditPatholab" placeholder="Enter Full Name"
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label id="labelEditPatholab">Email Id</Form.Label>
                  <Form.Control
                    type="text"
                   id="inputfieldTxtEditPatholab" placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label id="labelEditPatholab">Phone Number</Form.Label>
                  <Form.Control
                    type="text"
                   id="inputfieldTxtEditPatholab" placeholder="Enter Phone number"
                    maxLength={10}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label id="labelEditPatholab">Experience</Form.Label>
                  <Form.Control
                    type="text"
                   id="inputfieldTxtEditPatholab" placeholder="Enter Experience"
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                  />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label id="labelEditPatholab">Time Start</Form.Label>
                  <Form.Select
                    id="inputfieldTxtEditPatholab"
                    aria-label="Default select example"
                    value={timestart}
                    onChange={(e) => setTimestart(e.target.value)}
                  >
                    <option>Time Start</option>
                    <option value="6.00 AM">6.00 AM</option>
                    <option value="7.00 AM">7.00 AM</option>
                    <option value="8.00 AM">8.00 AM</option>
                    <option value="9.00 AM">9.00 AM</option>
                    <option value="10.00 AM">10.00 AM</option>
                    <option value="11.00 AM">11.00 AM</option>
                    <option value="12.00 PM">12.00 PM</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label id="labelEditPatholab">Time End</Form.Label>
                  <Form.Select
                    id="inputfieldTxtEditPatholab"
                    aria-label="Default select example"
                    value={timeend}
                    onChange={(e) => setTimeend(e.target.value)}
                  >
                    <option>Time End</option>
                    <option value="1.00 PM">1.00 PM</option>
                    <option value="2.00 PM">2.00 PM</option>
                    <option value="6.00 PM">6.00 PM</option>
                    <option value="4.00 PM">4.00 PM</option>
                    <option value="5.00 PM">5.00 PM</option>
                    <option value="6.00 PM">6.00 PM</option>
                    <option value="7.00 PM">7.00 PM</option>
                    <option value="8.00 PM">8.00 PM</option>
                    <option value="9.00 PM">9.00 PM</option>
                    <option value="10.00 PM">10.00 PM</option>
                    <option value="11.00 PM">11.00 PM</option>
                  </Form.Select>
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label id="labelEditPatholab">Week Start</Form.Label>
                  <Form.Select
                    id="inputfieldTxtEditPatholab"
                    aria-label="Default select example"
                    value={weekstart}
                    onChange={(e) => setWeekstart(e.target.value)}
                  >
                    <option>Week Start</option>
                    <option value="Monday">Monday</option>
                    <option value="Tuesday">Tuesday</option>
                    <option value="Wednesday">Wednesday</option>
                    <option value="Thursday">Thursday</option>
                    <option value="Friday">Friday</option>
                    <option value="Saturday">Saturday</option>
                    <option value="Sunday">Sunday</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label id="labelEditPatholab">Week End</Form.Label>
                  <Form.Select
                    id="inputfieldTxtEditPatholab"
                    aria-label="Default select example"
                    value={weekend}
                    onChange={(e) => setWeekend(e.target.value)}
                  >
                    <option>Week End</option>
                    <option value="Monday">Monday</option>
                    <option value="Tuesday">Tuesday</option>
                    <option value="Wednesday">Wednesday</option>
                    <option value="Thursday">Thursday</option>
                    <option value="Friday">Friday</option>
                    <option value="Saturday">Saturday</option>
                    <option value="Sunday">Sunday</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label id="labelEditPatholab">Facilities</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={2}
                   id="inputfieldTxtEditPatholab" placeholder="Enter Facilities"
                    value={facilities}
                    onChange={(e) => setFacilities(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label id="labelEditPatholab">Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={2}
                   id="inputfieldTxtEditPatholab" placeholder="Enter Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={8}></Col>
              <Col md={2} xs={6}>
                <Button
                id="cancelBtnEditPatholab"
                  className="mt-2"
                  onClick={() => navigate(-1)}
                  variant="danger"
                >
                 Cancel
                </Button>
              </Col>
              <Col md={2} xs={6}>
                <Button
                  id="UpdateBtnEditPatholab"
                  className="mt-2"
                  onClick={() => editFun()}
                >
                  {isLoading ? <Loader  animation="border" size="md" varient="dark"/> : "Update"}
                </Button>
              </Col>
            </Row>
          </Col>
          <Col md={1}></Col>
        </Row>
      </Container>
    </>
  );
}
