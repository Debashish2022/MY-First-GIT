import React, { useEffect, useState } from "react";
import {
  Col,
  Container,
  Row,
  Form,
  Button,
  Spinner,
  Table,
  Image,
} from "react-bootstrap";
import Header from "../../components/Header/Header";
import TestCardComponent from "../../components/TestCardComponent/TestCardComponent";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { apicaller } from "../../utils/api";
import "./TestDashboard.css";
import { IoIosAddCircle } from "react-icons/io";
import TestCard from "../../components/TestCard/TestCard";
import axios from "axios";
import Loader from "../../components/Loader";
//add to toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { addToCart } from "../../Redux/Slice/cartSlice";
import { RiFileEditFill } from "react-icons/ri";

export default function TestDashboard() {
  const location = useLocation();
  // console.log("lab detail data is", location.state.id);
  const [z, setZ] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingO, setIsLoadingO] = useState(true);
  const [pathoDetails, setPathoDetails] = useState({});
  const [testCategoryId, setTestCategoryId] = useState("");
  const [subCategory, setSubCategory] = useState([]);
  const [subCategoryId, setSubCategoryId] = useState([]);
  const [subCategoryTwo, setSubCategoryTwo] = useState([]);
  const [selected, setSelected] = useState(z);
  const [testcat, setTestcat] = useState([]);
  const [testDashBoard, setTestDashBoard] = useState([]);
  const [patholabImg, setPatholabImg] = useState();
  const [postCategory, setPostCategory] = useState("");
  const [testPrepare, setTestPrepare] = useState("");
  const [testSample, setTestSample] = useState("");
  const [testAge, setTestAge] = useState("");
  const [testGender, setTestGender] = useState("");
  const [testDescription, setTestDescription] = useState("");
  const [getCategoryId, setGetCategoryId] = useState("");
  const [testActualprice, setTestActualPrice] = useState("");
  const [testDiscount, setTestDiscount] = useState("");
  const [testName, setTestName] = useState("");
  const [isLoadingOne, setIsLoadingOne] = useState(false);
  const auth = useSelector((state) => state.auth);
  const [file, setFile] = useState();

  const [isImageUploadLoading, setIsImageUploadLoading] = useState(false);

  const localStorageItem =
    localStorage.getItem("user") && JSON.parse(localStorage.getItem("user"));

  const navigate = useNavigate();
  const dispatch = useDispatch();
  //for toast
  const eToast = (msg) => {
    toast.error(msg, {
      autoClose: 5000,
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
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  useEffect(() => {
    getLabDetails();
    getTests(subCategoryId);
  }, []);
  // useEffect(() => {
  //   // getTests(z);
  //   getTestTwo();
  // }, []);

  const handleChange = (event) => {
    // console.log("abc", event.target.value);
    setSelected(event.target.value);
    getTests(event.target.value);
  };

  const getTests = (id) => {
    apicaller(
      `lab-test-by-category?pathology_id=${localStorageItem?.pathology_id?._id}&test_category_id=${id}`,
      null,
      "get",
      null
    ).then((res) => {
      // setIsLoadingO(false);
      // console.log("Test Category", res);

      setSubCategory(res.data);

      // console.log("sub test", subCategory[0]?.test_name);
    });
  };

  const getLabDetails = () => {
    // {*apicaller(`pathology/${location.state.id}`, null, "get", null).then( *}

    apicaller(
      `pathology/${localStorageItem?.pathology_id?._id}`,
      null,
      "get",
      null
    ).then((res) => {
      setIsLoading(false);
      // console.log(res.data);
      setZ(res.data.test_category_id[0]?._id);
      // dispatch(setSubCategoryId(res.data.test_category_id[0]?._id));
      setPathoDetails(res.data);
      // getTests();
    });
  };

  // i have tried from this

  useEffect(() => {
    getTestCategory();
  }, []);

  const getTestCategory = () => {
    apicaller(
      `test-category?pathology_id=${localStorageItem?.pathology_id?._id}`,
      null,
      "get",
      null
    )
      .then((res) => {
        setTestcat(res.data);
      })
      .catch((e) => {
        // console.log(e);
      });
  };

  const chooseTestDashBoardImg = (e) => {
    // console.log("Choose Test Images", e.target.files);
    setTestDashBoard(e.target.files[0]);
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  // console.log("first", testDashBoard);

  const uploadTestDashBoardImg = (e) => {
    e.preventDefault();
    // console.log("select Test Images", testDashBoard);
    if (testDashBoard.length === 0) {
      eToast("Please select test images");
      return false;
    } else {
      setIsImageUploadLoading(true);
      var FormData = require("form-data");

      var data = new FormData();
      data.append("img", testDashBoard);

      var config = {
        method: "post",
        url: "https://api.novaprolabs.com/api/single-upload",
        // in url, if 404 error found, then it is running on local host, so write http:// ,i.e., https://api.novaprolabs.com/api/single-upload
        headers: {
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlzX3Byb2ZpbGVfY29tcGxldGVkIjpmYWxzZSwicGxhbl9pZCI6bnVsbCwidXNlcl90eXBlIjoiYWRtaW4iLCJfaWQiOiI2MzA1MDFmNzIzNmQ5NzFjMmUyY2FlMTAiLCJlbWFpbCI6ImFkbWluQGF0aGFydy5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCRzYm1sN0dkSHlZZDVybGVaR3Rvak4uTm56c2UyM2YvTUwzWTkueTR3NlhTMHh5TENUQjFnSyIsInBob25lX251bWJlciI6OTk4ODc3NjY1NSwiY3JlYXRlZEF0IjoiMjAyMi0wOC0yM1QxNjozNjowNy4xOThaIiwidXBkYXRlZEF0IjoiMjAyMi0wOC0yM1QxNjozNjowNy4xOThaIiwiX192IjowfSwiaWF0IjoxNjYxNTcxMDM5LCJleHAiOjE2NjQxNjMwMzl9.O7Ht80dEvfBsuf2UHHbxVcVKfFMSCXvDLViR_7g59Z0",
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          if (response.status === 201 || response.status === 200) {
            setIsImageUploadLoading(false);
            sToast("images uploaded");
            // console.log(JSON.stringify(response.data.img));
            const img_path1 = response.data.img;
            setPatholabImg(img_path1);
            // console.log(patholabImg);
          }
          //   response.data.img means this will give the proper path of the img
        })
        .catch(function (error) {
          // console.log("error while images uploaded", error);
          eToast("Couldn't uploaded");
        })
        .finally(() => setIsImageUploadLoading(false));
    }
  };

  const TestDashBoardSubmit = async (e) => {
    e.preventDefault();
    var price = parseInt(testActualprice);
    var discount = parseInt(testDiscount);
    if (testName === "") {
      alert("Please Add A Test Name");
    } else if (price === "") {
      alert("Please Add Price");
    } else if (postCategory === "") {
      alert("Please select a category");
    } else {
      setIsLoadingOne(true);
      var data = JSON.stringify({
        test_name: testName,
        img_path: patholabImg,
        preparation_details: testPrepare,
        type_of_sample: testSample,
        // age_group: testAge,
        select_gender: testGender,
        description: testDescription,
        pathology_id: auth?.user?.pathology_id?._id,
        test_category_id: postCategory,
        actual_price: price,
        discount: discount,
      });
      // console.log("Data is", data);
      const res = await apicaller("lab-test", data, "POST", null);
      if (res.status === 201 || res.status === 200) {
        setIsLoadingOne(false);
        sToast("Test created successfully");
        getTestCategory();
        // setTypeoftest("");
        setTestName("");
        setPostCategory("");
        setPatholabImg("");
        setTestPrepare("");
        setTestSample("");
        setTestAge("");
        setTestGender("");
        setTestDescription("");
        setTestActualPrice("");
        setTestDiscount("");
        getLabDetails();
      }
    }
  };

  return (
    <>
      <Header />
      <Container style={{ marginTop: "2rem", marginBottom: "1rem" }}>
        <Row>
          <Form.Group className="mb-2">
            <Form.Label>Test Category</Form.Label>
            <Form.Select
              value={postCategory}
              onChange={(e) => setPostCategory(e.target.value)}
            >
              <option>Select Test Category</option>
              {testcat.map((item, index) => (
                <option value={item._id}>{item.category_name}</option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group>
            <Form.Label>Test Name</Form.Label>
            <Form.Control
              value={testName}
              onChange={(e) => setTestName(e.target.value)}
              type="text"
              placeholder="Enter Test Name"
            />
          </Form.Group>
          <Row id="lab7">
            <Form.Label>Upload Test Category Image</Form.Label>
            <Row>
              <Col md={2}>
                <span>
                  <img
                    style={{ padding: "10px" }}
                    width={150}
                    height={100}
                    src={file}
                    // src={
                    //  testDashBoard
                    // }
                  />
                </span>
              </Col>
            </Row>

            <Row>
              <Col lg={10} md={8} sm={8} xs={8}>
                <Form.Group controlId="formFileMultiple" className="mb-3">
                  <Form.Control
                    type="file"
                    accept="application/png, application/jpg, application/jpeg"
                    onChange={chooseTestDashBoardImg}
                    multiple={false}
                  />
                </Form.Group>
              </Col>
              <Col lg={2} md={4} sm={4} xs={4}>
                <Button
                  id="labdetails14"
                  variant="light"
                  onClick={uploadTestDashBoardImg}
                >
                  {isImageUploadLoading ? <Loader size="sm" /> : "Upload"}
                </Button>
                <div id="lab9"></div>
              </Col>
            </Row>
            {/* <Col lg={10} md={8} sm={8} xs={8}>
            <label id="labdetails17" htmlFor="myfile">
              <IoIosAddCircle id="lab15" />
              <input
                type="file"
                className="file"
                id="myfile"
                accept="application/png, application/jpg, application/jpeg"
                onChange={chooseTestDashBoardImg}
              />
            </label>
            <div id="labdetails16"></div>
          </Col>
          <Col lg={2} md={4} sm={4} xs={4}>
            <Button
              id="labdetails14"
              variant="success"
              onClick={uploadTestDashBoardImg}
            >
              {isImageUploadLoading ? (
                <Loader size="sm" color="white" />
              ) : (
                "Upload"
              )}
            </Button>
            <div id="labdetails16"></div>
          </Col> */}
          </Row>

          <Form.Group className="mb-3">
            <Form.Label>Preparation Details</Form.Label>
            <Form.Control
              value={testPrepare}
              onChange={(e) => setTestPrepare(e.target.value)}
              type="text"
              placeholder="Enter Preparation Details"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Types Of Sample</Form.Label>
            <Form.Control
              value={testSample}
              onChange={(e) => setTestSample(e.target.value)}
              type="text"
              placeholder="Enter Sample Type"
            />
          </Form.Group>

          <Col md={12}>
            <Row id="labdetails21">
              <Form.Label>Gender</Form.Label>
              <Col
                id="labdetails24"
                md={2}
                onClick={() => setTestGender("Male")}
              >
                <div
                  style={
                    testGender === "Male"
                      ? { backgroundColor: "green", color: "white" }
                      : { backgroundColor: "white", color: "#029967" }
                  }
                  id="labdetails20"
                >
                  Male
                </div>
              </Col>
              <Col
                id="labdetails24"
                md={2}
                onClick={() => setTestGender("Female")}
              >
                <div
                  style={
                    testGender === "Female"
                      ? { backgroundColor: "green", color: "white" }
                      : { backgroundColor: "white", color: "#029967" }
                  }
                  id="labdetails20"
                >
                  Female
                </div>
              </Col>
              <Col md={2} onClick={() => setTestGender("All")}>
                <div
                  style={
                    testGender === "All"
                      ? { backgroundColor: "green", color: "white" }
                      : { backgroundColor: "white", color: "#029967" }
                  }
                  id="labdetails20"
                >
                  All
                </div>
              </Col>
            </Row>
          </Col>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control
              value={testDescription}
              onChange={(e) => setTestDescription(e.target.value)}
              as="textarea"
              rows={3}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Actual Price</Form.Label>
            <Form.Control
              value={testActualprice}
              onChange={(e) => {
                setTestActualPrice(e.target.value);
              }}
              type="text"
              placeholder="Enter Actual Price"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Discount</Form.Label>
            <Form.Control
              value={testDiscount}
              onChange={(e) => {
                setTestDiscount(e.target.value);
              }}
              type="text"
              placeholder="Enter Discount Percentage"
            />
          </Form.Group>

          <Col></Col>
          <Col id="labdetails18">
            <Button
              id="labdetails19"
              variant="success"
              onClick={TestDashBoardSubmit}
            >
              {isLoadingOne ? <Loader /> : "Submit"}
            </Button>
          </Col>
          <Col></Col>
        </Row>

        {/* <Row>
          <Col>
            <TestCard />
          </Col>
          <Col>
            <TestCard />
          </Col>
          <Col>
            <TestCard />
          </Col>
          <Col>
            <TestCard />
          </Col>
          <Col>
            <TestCard />
          </Col>
          <Col>
            <TestCard />
          </Col>
          <Col>
            <TestCard />
          </Col>
          <Col>
            <TestCard />
          </Col>
        </Row> */}

        <Row id="availableTestsTxt">Available Tests</Row>

        <Row>
          <Col md={4}></Col>
          <Col md={4}>
            <Form.Select
              size="lg"
              id="labdetails13"
              value={selected}
              onChange={handleChange}
            >
              <option>Please Select A value</option>
              {pathoDetails.test_category_id?.map((i) => {
                return (
                  <option key={i._id} value={i._id}>
                    {i.category_name}
                  </option>
                );
              })}
            </Form.Select>
          </Col>
          <Col md={4}></Col>
        </Row>
        {/* <Row id="labdetails12">
          <Col md={6} xs={6} id="labdetails11" style={{ marginTop: 30 }}>
            {subCategory.map((i) => (
              <TestCardComponent
                testimg={i.img_path}
                testName={i.test_name}
                acPrice={i.actual_price}
                price={i.actual_price - i.discount_price}
                percentage={i.discount}
                discount_price={i.discount_price}
              />
            ))}
          </Col>
        </Row> */}

        <div id="labdetails25">
          <Table striped id="labdetails28">
            <thead>
              <tr style={{ width: "5rem", fontFamily: "Exo" }}>
                <th></th>
                <th>#</th>
                <th>Test Name</th>
                <th>Image</th>
                <th>Type of sample</th>
                <th>Gender</th>
                <th>Actual price</th>
                <th>Discount</th>
                {/* <th>Payable amount</th> */}
                {/* <th>Saved</th> */}
                <th>Preparation required</th>
                <th>Description (if any)</th>
              </tr>
            </thead>
            <tbody>
              {subCategory?.map((item, i) => (
                <tr key={i} style={{ width: "5rem", fontFamily: "Exo" }}>
                  <td>
                    <RiFileEditFill
                      style={{
                        color: "#029967",
                        fontSize: "1.5rem",
                        cursor: "pointer",
                      }}
                      onClick={() =>
                        navigate("/editLabTest", { state: { item: item } })
                      }
                    />
                  </td>
                  <td>{i + 1}</td>
                  <td>{item?.test_name}</td>
                  <td id="labdetails27">
                    <Image src={item?.img_path} alt="image" id="labdetails26" />
                  </td>
                  <td>{item?.type_of_sample}</td>
                  <td>{item?.select_gender}</td>
                  <td>$ {item?.actual_price}</td>
                  <td>{item?.discount}% </td>
                  {/* <td>$ {item?.actual_price - item?.discount_price}</td> */}
                  {/* <td>$ {item?.discount_price} extra</td> */}
                  <td>{item?.preparation_details}</td>
                  <td id="labdetails29">{item?.description}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Container>
    </>
  );
}
