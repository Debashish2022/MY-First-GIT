import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Form, Row, Button, Table } from "react-bootstrap";
import { SymmetryVertical } from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import Header from "../../components/Header/Header";
import Loader from "../../components/Loader";
import { API, apicaller } from "../../utils/api";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Slots.css";
import { AiFillCalendar } from "react-icons/ai";
import _ from "lodash";

const pageSize = 5;
export default function Slots() {
  const [slotDate, setSlotDate] = useState("");
  const [slotStatus, setSlotStatus] = useState("available");
  const [slotTime, setSlotTime] = useState("");
  const [slotCapacity, setSlotCapacity] = useState("");
  const [slotsArr, setSlotsArr] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const token = useSelector((state) => state.auth.token);
  const auth = useSelector((state) => state.auth);
  const [startdate, setStartdate] = useState(new Date());
  const localStorageItem =
    localStorage.getItem("user") && JSON.parse(localStorage.getItem("user"));

  const [getAvailableSlotData, setGetAvailableSlotData] = useState([]);

  //for page count
  const [paginatedPost, setPaginatedPost] = useState();
  const [currentpage, setcurrentPage] = useState(1);

  useEffect(() => {
    GetAllSlots();
  }, []);

  const dateMaxRange = new Date();
  dateMaxRange.setDate(dateMaxRange.getDate() + 10);
  const dateMinRange = new Date();
  dateMinRange.setDate(dateMinRange.getDate() + 0);

  const GetAllSlots = () => {
    apicaller(
      `slot-by-pathology/${localStorageItem?.pathology_id?._id}`,
      null,
      "get",
      null
    ).then((res) => {
      setGetAvailableSlotData(res.data);
      // console.log("got slots ", getAvailableSlotData);
      setPaginatedPost(_(res.data).slice(0).take(pageSize).value());
    });
  };

  const pageCount = getAvailableSlotData
    ? Math.ceil(getAvailableSlotData.length / pageSize)
    : 0;
  if (pageCount === 1) return null;

  const pages = _.range(1, pageCount + 1);

  const pagination = (pageNo) => {
    setcurrentPage(pageNo);
    const startIndex = (pageNo - 1) * pageSize;
    const paginatedPost = _(getAvailableSlotData)
      .slice(startIndex)
      .take(pageSize)
      .value();
    setPaginatedPost(paginatedPost);
  };
  // created a slot object and pushed that into an array
  var AddSlotObj = () => {
    var Singleslot = new Object();
    Singleslot.slot_status = "available";
    Singleslot.slot_time = slotTime;
    Singleslot.slot_capacity = slotCapacity;
    slotsArr.push(Singleslot);
    setSlotTime("");
    setSlotStatus("");
    setSlotCapacity("");
    // console.log("slots array", slotsArr);
  };

  const uploadSlotDatas = async (e) => {
    if (slotDate === "") {
      alert("Please Add Slot Date");
    } else if (slotsArr.length < 1) {
      alert("Please Add Some Slot Time With Capacity");
    } else {
      setIsLoading(true);
      e.preventDefault();

      var data = {
        pathology_id: auth?.user?.pathology_id?._id,
        slot_date: slotDate,
        slots: slotsArr,
      };
      var res = await apicaller("slot", data, "post", null);
      // console.log("slot output is", res.data);
      if (res.status === 201 || res.status === 200) {
        GetAllSlots();
        slotsArr.splice(0, slotsArr.length);
        setIsLoading(false);
        alert("Data added Successfully");
        setSlotDate("");
      }
    }
  };

  const deleteSlots = (id) => {
    if (window.confirm("Are you Sure , Yo want to delete this")) {
      var config = {
        method: "delete",
        url: API + "/slot/" + id,
      };

      axios(config)
        .then(function (response) {
          // console.log(JSON.stringify(response.data));
          GetAllSlots();
        })
        .catch(function (error) {
          // console.log(error);
        });
    }
  };

  return (
    <>
      {" "}
      <Header />
      <Container fluid>
        <Container>
          <Row id="addSlotTxt" className="mb-5">
            Add New Slot
          </Row>

          {/* body start */}
          <Row>
            <Col md={2}></Col>

            {/* input divs start  */}
            <Col md={8}>
              <Form>
                <Form.Group>
                  <Form.Label style={{ color: "#222222", fontSize: "1.2rem" }}>
                    Choose Slot Date
                  </Form.Label>
                  {/* <Form.Control
                  type="text"
                  placeholder="Add Slot Date e.g. 10-12-2022"
                  id="addSlotDiv"
                  value={slotDate}
                  onChange={(e) => setSlotDate(e.target.value)}
                /> */}
                </Form.Group>
                <Container>
                  <Row id="datechnge">
                    <Col md="11" xs="10" sm="1" lg="11">
                      <DatePicker
                        selected={startdate}
                        onChange={(date) => {
                          setStartdate(date);
                          const z =
                            date.getDate() +
                            "-" +
                            date.getMonth() +
                            1 +
                            "-" +
                            date.getFullYear();
                          setSlotDate(z);
                        }}
                        style={{ width: "100%", border: "none" }}
                        maxDate={dateMaxRange}
                        minDate={dateMinRange}
                        dateFormat="dd-MM-yyyy"
                      />
                    </Col>
                    <Col md="1" xs="2" lg="1" sm="1">
                      {" "}
                      <AiFillCalendar id="slotcalendericon" />
                    </Col>
                  </Row>
                </Container>
                <Form.Label
                  style={{ color: "#222222", fontSize: "1.2rem" }}
                ></Form.Label>

                <Form.Group className="mb-3">
                  <Form.Label>Add Slot Time</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Add Slot Time, e.g. 7.00 PM "
                    id="addSlotDiv"
                    value={slotTime}
                    onChange={(e) => setSlotTime(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-2">
                  <Form.Label>Add Slot Capacity</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Add Slot Capacity, e.g. 100 "
                    id="addSlotDiv"
                    value={slotCapacity}
                    onChange={(e) => setSlotCapacity(e.target.value)}
                  />
                  <Form.Text style={{ color: "#ff7800" }}>
                    * First Fill the fields e.g. Slot Status, Slot Time and Slot
                    Capacity, then click "ADD Slots" Button
                  </Form.Text>
                </Form.Group>
                <Row
                  style={{
                    borderRadius: "10px",
                    backgroundColor: "#029967",
                    marginBottom: 20,
                  }}
                >
                  {slotsArr?.map((item) => (
                    <>
                      <div
                        style={{
                          color: "white",
                          fontWeight: "bold",
                          padding: 10,
                        }}
                      >
                        {item.slot_time} ({item.slot_capacity})
                      </div>
                    </>
                  ))}
                </Row>
                <Button
                  id="slotaddslot"
                  onClick={AddSlotObj}
                  style={{ color: "#fff", backgroundColor: "#029967" }}
                >
                  Add Slots
                </Button>
              </Form>

              <Row className="mt-5 mb-5">
                <Col md="2"></Col>
                <Col>
                  <Button id="addBtn" onClick={uploadSlotDatas}>
                    {isLoading ? <Loader /> : "Submit Slot"}
                  </Button>
                </Col>
                <Col md="2"></Col>
              </Row>
            </Col>

            <Col md={2}></Col>
          </Row>
        </Container>

        <Container>
          <div id="addSlotTxt">Available Slots</div>
          <Row>
            <Col style={{ overflow: "auto" }}>
              {!paginatedPost ? (
                "No data Found"
              ) : (
                <Table striped>
                  <thead>
                    <tr>
                      <th>Sl No</th>
                      <th>Slot Date</th>
                      <th>Slots</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paginatedPost.map((ele, index) => (
                      <tr>
                        <td>{currentpage * pageSize + index - 1}</td>
                        <td>{ele?.slot_date}</td>
                        <td>
                          {ele.slots.map((item, ind) => (
                            <div key={ind}>
                              <td>
                                {/* Slot Status: */}
                                Status: {item.slot_status} ,
                              </td>
                              <td>
                                {/* Slot Timimg:  */}
                                Time: {item.slot_time} ,
                              </td>

                              <td>
                                {/* Slot Capacity: */}
                                Capacity: {item.slot_capacity}
                              </td>
                            </div>
                          ))}
                        </td>
                        <td
                          style={{ cursor: "pointer", color: "red" }}
                          onClick={() => deleteSlots(ele._id)}
                        >
                          Delete
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              )}
              <nav className="d-flex justify-content-center">
                <ul className="pagination">
                  {pages.map((page) => (
                    <li
                      className={
                        page === currentpage ? "page-item active" : "page-item"
                      }
                    >
                      <p className="page-link" onClick={() => pagination(page)}>
                        {page}
                      </p>
                    </li>
                  ))}
                </ul>
              </nav>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}
