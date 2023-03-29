import React, { useEffect, useState } from "react";
import "./CoachingCenter.css";
import { Container, Row, Col, Form, Button, Table } from "react-bootstrap";
import { MdAddBox } from "react-icons/md";
import AddCoachingCenterModal from "../../components/AddCoachingCenterModal/AddCoachingCenterModal";
import { API, apicaller } from "../../utils/api";
import { AiFillCloseCircle } from "react-icons/ai";
import Utility from "../../utils/Utility";
import Loader from "../../components/Loader/Loader";
import { useSelector } from "react-redux";
import { getUserToken } from "../../Redux/Slice/UserSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header2 from "../../components/Header2/Header2";

export default function CoachingCenter() {
  const [showModal, setShowModal] = useState(false);
  const [district, setDistrict] = useState("");
  const [postDistrictLoading, setPostDistrictLoading] = useState(false);

  const [getAllCenters, setGetAllCenters] = useState([]);
  const [getAllDistricts, setGetAllDistricts] = useState([]);

  const token = useSelector(getUserToken);
  const navigate = useNavigate();

  // get districts
  useEffect(() => {
    getDistrictsFun();
    getCentersFun();
  }, []);

  const getDistrictsFun = () => {
    apicaller("get-district", null, "GET", null).then((res) => {
      setGetAllDistricts(res?.data);
    });
  };

  // add districts
  const addDistrictsFun = async () => {
    if (district.length === 0) {
      Utility.eToast("Please Enter a District Name");
      return false;
    } else if (district.length < 4) {
      Utility.eToast("Please enter a valid district name");
      return false;
    } else {
      setPostDistrictLoading(true);

      const data = {
        district_name: district,
      };

      await apicaller("add-district", data, "POST", null)
        .then((res) => {
          if (res.status === 201 || res.status === 200) {
            Utility.sToast("District added Successfully");
            setDistrict("");
            getDistrictsFun();
          }
        })
        .catch(() => Utility.eToast("Sorry Couldn't Add!"))
        .finally(() => setPostDistrictLoading(false));

      return true;
    }
  };

  // remove districts
  const removeDistrictsFun = (id, district) => {
    if (window.confirm(`Do you sure want to delete ${district} ?`)) {
      var config = {
        method: "delete",
        maxBodyLength: Infinity,
        url: `${API}/delete-district/${id}`,
        headers: {
          Authorization: "Bearer " + token,
        },
      };

      axios(config)
        .then(function (response) {
          Utility.sToast("Deleted Successfully");
          getDistrictsFun();
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
          Utility.eToast("Sorry Couldn't Delete!");
        });
    }
  };

  // get all centers
  const getCentersFun = () => {
    apicaller("get-center", null, "GET", null).then((res) => {
      setGetAllCenters(res?.data?.center);
    });
  };

  // delete center
  const deleteCenterFun = (id, name) => {
    if(window.confirm(`Do you sure want to delete ${name}?`)){
      var config = {
        method: "DELETE",
        url: `${API}delete-center/${id}`,
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      };

      axios(config)
        .then(function (response) {
          console.log(response.data);
          Utility.sToast("Center Deleted Successfully");
          getCentersFun();
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }

  return (
    <>
    <Header2 />
      <Container>
        <Row id="coaching1">
          <Col id="coaching2">Districts</Col>
        </Row>

        <Form>
          <Form.Label id="coaching6">Enter District name</Form.Label>
          <Row className="mb-4">
            <Col md={4} xs={6}>
              <Form.Control
                type="text"
                placeholder="Enter District Name"
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                id="coaching5"
              />
            </Col>
            <Col md={3} xs={5}>
              <Button
                id="coaching4"
                variant="light"
                onClick={() => addDistrictsFun()}
              >
                {postDistrictLoading ? (
                  <Loader variant="light" animation="border" size="sm" />
                ) : (
                  "Add District"
                )}
              </Button>
            </Col>
          </Row>

          <Row>
            {getAllDistricts.map((item, ind) => (
              <Col md={2} xs={4} key={ind}>
                <div id="districtNames">
                  {item?.district_name ? item?.district_name : "Nothing"}
                </div>
                <div id="removeDistrict">
                  <AiFillCloseCircle
                    id="coaching7"
                    onClick={() =>
                      removeDistrictsFun(item?._id, item?.district_name)
                    }
                  />
                </div>
              </Col>
            ))}
          </Row>
        </Form>

        <Row id="coaching1">
          <Col md={11} xs={10} id="coaching2">
            Coaching Centers
          </Col>
          <Col id="coaching3">
            <MdAddBox
              style={{
                color: "#F05904",
                height: "2em",
                width: "2em",
                cursor: "pointer",
              }}
              onClick={() => setShowModal(true)}
            />
            <AddCoachingCenterModal
              show={showModal}
              onHide={() => setShowModal(false)}
              token={token}
            />
          </Col>
        </Row>
        <Row>
          <Col id="coaching8">
            <Table className="mt-3 mb-5" striped="columns">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Center Name</th>
                  <th>District</th>
                  <th>Manager</th>
                  <th>Staffs</th>
                  <th> </th>
                  <th> </th>
                </tr>
              </thead>
              <tbody>
                {getAllCenters?.map((item, ind) => (
                  <tr key={ind}>
                    <td>{ind + 1}</td>
                    <td>{item?.center_name}</td>
                    <td>{item?.district_id?.district_name}</td>
                    <td>
                      {item?.manager?.map((e, i) => (
                        <tr key={i}>
                          <td id="coaching9">{e?.manager_name} , </td>
                          <td id="coaching9"> {e?.manager_email} , </td>
                          <td id="coaching9"> {e?.manager_number} </td>
                        </tr>
                      ))}
                    </td>
                    <td>
                      {item?.staff?.map((e, i) => (
                        <tr key={i}>
                          <td id="coaching9">{e?.staff_name} , </td>
                          <td id="coaching9"> {e?.staff_email} , </td>
                          <td id="coaching9"> {e?.staff_number} </td>
                        </tr>
                      ))}
                    </td>
                    <td>
                      <Button variant="info" id="coaching10" onClick={() => navigate("/updateCoachingCenter", {state: {item: item}})}> 
                        UPDATE
                      </Button>
                    </td>
                    <td>
                      <Button variant="danger" id="coaching10" onClick={() => deleteCenterFun(item?._id, item?.center_name)}>
                        DELETE
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
}
