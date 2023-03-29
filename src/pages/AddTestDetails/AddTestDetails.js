import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./AddTestDetails.css";
import { IoIosAddCircle } from "react-icons/io";
import Header from "../../components/Header/Header";
import { apicaller } from "../../utils/api";
import axios from "axios";
const AddTestDetails = () => {
  const [selectedNoPreparation, setSelectedNoPreparation] = useState(false);
  const [clickedSample, setClickedSample] = useState(" ");
  const [clickedAge, setClickedAge] = useState(" ");
  const [clickedGender, setClickedGender] = useState(" ");
  const [managementTestGet, setManagementTestGet] = useState([]);
  const [managementTestPost, setManagementTestPost] = useState("");
  const [testTitle, settestTitle] = useState("");
  const [imgPath, setimgPath] = useState("");
  const [typeManually, setTypemanually] = useState("");
  const [price, setprice] = useState("");
  const [gender, setgender] = useState("");
  const [description, setDescription] = useState("");
  const [ageGroup, setageGroup] = useState("");

  //const [addOthersSample, setaddOthersSample] = useState("");
  //upload
  const [labLogo, setLabLogo] = useState([]);
  const [selectedImage, setselectedImage] = useState();
  // to choose image file
  const chooseLabLogoPhoto = (e) => {
    const file = e.target.files[0];
    // const url = URL.createObjectURL(file);
    // console.log(file);
    setLabLogo(file);
  };

  //to upload file

  const uploadImage = () => {
    var FormData = require("form-data");
    // var fs = require("fs");
    var data = new FormData();
    data.append("img", labLogo);

    var config = {
      method: "post",
      url: "https://api.novaprolabs.com/api/single-upload",
      headers: {
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlzX3Byb2ZpbGVfY29tcGxldGVkIjpmYWxzZSwicGxhbl9pZCI6bnVsbCwidXNlcl90eXBlIjoiYWRtaW4iLCJfaWQiOiI2MzA1MDFmNzIzNmQ5NzFjMmUyY2FlMTAiLCJlbWFpbCI6ImFkbWluQGF0aGFydy5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCRzYm1sN0dkSHlZZDVybGVaR3Rvak4uTm56c2UyM2YvTUwzWTkueTR3NlhTMHh5TENUQjFnSyIsInBob25lX251bWJlciI6OTk4ODc3NjY1NSwiY3JlYXRlZEF0IjoiMjAyMi0wOC0yM1QxNjozNjowNy4xOThaIiwidXBkYXRlZEF0IjoiMjAyMi0wOC0yM1QxNjozNjowNy4xOThaIiwiX192IjowfSwiaWF0IjoxNjYxNTcxMDM5LCJleHAiOjE2NjQxNjMwMzl9.O7Ht80dEvfBsuf2UHHbxVcVKfFMSCXvDLViR_7g59Z0",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        // console.log(JSON.stringify(response.data.img));
        const img_path = response.data.img;
        setselectedImage(img_path);
        // console.log(selectedImage);
      })
      .catch(function (error) {
        // console.log(error);
      });
  };
  const [tstTitle, setTstTitle] = useState(false);
  const [prpdetail, setPrpdetail] = useState(false);
  const [vcategory, setVcategory] = useState(false);
  const [genderCategory, setGenderCategory] = useState(false);
  const [vage, setVage] = useState(false);

  const contactUs = async (e) => {
    if (testTitle.length >= 2) {
      setTstTitle(false);
      // console.log(clickedGender.length);
      if (typeManually.length >= 2) {
        setPrpdetail(false);
        if (managementTestPost.length > 2) {
          setVcategory(false);
          // setClickedSample(false);
          // console.log(clickedGender);
          // console.log(clickedGender.length);

          if (clickedAge.length === 1) {
            setVage(true);
          } else {
            if (clickedGender.length === 1) {
              setGenderCategory(true);
            } else {
              setGenderCategory(false);
              setClickedSample(false);
              setClickedGender(false);
              setClickedAge(false);
              e.preventDefault();

              var data = {
                test_name: testTitle,
                img_path: selectedImage,
                preparation_details: typeManually,
                // actual_price: parseInt(price),
                select_gender: gender,
                // test_category_id: managementTestPost,
                description: description,
                age_group: ageGroup,
                pathology_id: "63416e04edf798148c9662fe",
                actual_price: 600,
                discount: 10,
                test_category_id: "634e3c4bfc2b760247d48d5b",
              };
              // console.log(data);
              const res = await apicaller("lab-test", data, "POST", null);
              if (res.status === 201 || res.status === 200) {
                settestTitle("");
                setimgPath("");
                setTypemanually("");
                setprice("");
                setgender("");
                setManagementTestPost("");
                setDescription("");
                setageGroup("");
              }
            }
          }
        } else {
          setVcategory(true);
        }
      } else {
        setPrpdetail(true);
      }
    } else {
      setTstTitle(true);
    }
  };

  useEffect(() => {
    setManagement();
    //contactUs();
  }, []);

  const setManagement = () => {
    apicaller(
      "test-category?pathology_id=634e3c4bfc2b760247d48d5b",
      null,
      "get",
      null
    )
      .then((res) => {
        setManagementTestGet(res.data);
      })
      .catch((e) => {
        // console.log(e);
      });
  };
  //
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [fileLimit, setFileLimit] = useState(false);

  const handleUploadFiles = (files) => {
    const uploaded = [...uploadedFiles];
    let limitExceeded = false;
    files.some((file) => {
      if (uploaded.findIndex((f) => f.name === file.name) === -1) {
        uploaded.push(file);
        if (uploaded.length === MAX_COUNT) setFileLimit(true);
        if (uploaded.length > MAX_COUNT) {
          alert(`You can only add a maximum of ${MAX_COUNT} files`);
          setFileLimit(false);
          limitExceeded = true;
          return true;
        }
      }
    });
    if (!limitExceeded) setUploadedFiles(uploaded);
  };

  const handleFileEvent = (e) => {
    const chosenFiles = Array.prototype.slice.call(e.target.files);
    handleUploadFiles(chosenFiles);
  };

  const MAX_COUNT = 5;

  function deleteHandler(file) {
    setUploadedFiles(uploadedFiles.filter((e) => e !== file));
    URL.revokeObjectURL(file);
  }

  return (
    <>
      <Header />
      <Container>
        <Row id="addTestPanelTxt">Add Test Panel</Row>

        {/* body start */}
        <Row>
          <Col md={2}></Col>

          {/* input divs start  */}
          <Col md={8}>
            <Form>
              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder="Add Test Title"
                  id="addTestTitleDiv"
                  value={testTitle}
                  onChange={(e) => settestTitle(e.target.value)}
                />
                {tstTitle && testTitle.length === 0 ? (
                  <div style={{ color: "red" }}>
                    *Please Enter a Valid Category
                  </div>
                ) : (
                  " "
                )}

                <Row className="mb-2 mt-4" id="uploadTestImgTxt">
                  Upload Test Image
                </Row>
                <Row id="fileChooseDiv">
                  {/* <label id="details1" htmlFor="myfile">
                    <IoIosAddCircle style={{ fontSize: "2rem" }} />
                  </label> */}
                  <input
                    type="file"
                    accept=".png, .jpg, .jpeg"
                    name="image"
                    onChange={chooseLabLogoPhoto}
                  />
                  <Button id="lab18" variant="success" onClick={uploadImage}>
                    Upload
                  </Button>
                  <Form.Control className="mb-4" type="file" id="myfile" />
                </Row>
                <Row className="mb-2 mt-4" id="uploadTestImgTxt">
                  Preparation Details
                </Row>
                <Row style={{ margin: 0 }}>
                  <Col
                    md={5}
                    xs={7}
                    style={{ paddingRight: "1rem", paddingLeft: "0rem" }}
                  >
                    <div
                      // onClick={() =>
                      //   setSelectedNoPreparation(!selectedNoPreparation)
                      // }
                      id="noPreparationTxt"
                      style={
                        selectedNoPreparation === true
                          ? { backgroundColor: "#029967", color: "#fff" }
                          : { backgroundColor: "#fff", color: "#029967" }
                      }
                      //label="noPreparation"
                      checked={typeManually === "noPreparation"}
                      value={typeManually}
                      onClick={() => {
                        setTypemanually("Type Manually") ||
                          setSelectedNoPreparation(!selectedNoPreparation);
                      }}
                    >
                      No preparation is required
                    </div>
                  </Col>
                  <Col md={7} xs={5} style={{ padding: 0 }}>
                    <div>
                      <Form.Control
                        type="text"
                        placeholder="Type Manually"
                        id="addTestTitleDiv"
                        //label="TypeManually"
                        checked={typeManually === "TypeManually"}
                        value={typeManually}
                        onChange={(e) => setTypemanually(e.target.value)}
                      />
                    </div>
                  </Col>
                </Row>
                {prpdetail && typeManually.length === 0 ? (
                  <div style={{ color: "red" }}>
                    *Please Enter a Valid Category
                  </div>
                ) : (
                  " "
                )}

                <Form.Control
                  type="number"
                  pattern="[0-9]*"
                  className="mt-4"
                  placeholder="Add Price in INR"
                  id="addTestTitleDiv"
                  value={price}
                  onChange={(e) => setprice(e.target.value)}
                />

                <Row className="mb-2 mt-4" id="uploadTestImgTxt">
                  Type of Category
                </Row>
                <Row style={{ margin: 0, gap: "1rem" }}>
                  {/* <Col
                    id="bloodCoughUrineOthersBtn"
                    onClick={() => setClickedSample("first")}
                    style={
                      clickedSample === "first"
                        ? { backgroundColor: "#029967", color: "#fff" }
                        : { backgroundColor: "#fff", color: "#029967" }
                    }
                  >
                    Blood
                  </Col> */}
                  {managementTestGet.map((item, index) => (
                    <Col
                      key={index}
                      id="bloodCoughUrineOthersBtn"
                      // onClick={() => setClickedSample(index)}
                      style={
                        clickedSample === index
                          ? { backgroundColor: "#029967", color: "#fff" }
                          : { backgroundColor: "#fff", color: "#029967" }
                      }
                      checked={managementTestPost === index}
                      value={managementTestPost}
                      onClick={() => {
                        setManagementTestPost(item._id) ||
                          setClickedSample(index);
                      }}
                    >
                      {item.category_name}
                    </Col>
                  ))}

                  {/* <Col
                    id="bloodCoughUrineOthersBtn"
                    onClick={() => setClickedSample("second")}
                    style={
                      clickedSample === "second"
                        ? { backgroundColor: "#029967", color: "#fff" }
                        : { backgroundColor: "#fff", color: "#029967" }
                    }
                  >
                    Cough
                  </Col>
                  <Col
                    id="bloodCoughUrineOthersBtn"
                    onClick={() => setClickedSample("third")}
                    style={
                      clickedSample === "third"
                        ? { backgroundColor: "#029967", color: "#fff" }
                        : { backgroundColor: "#fff", color: "#029967" }
                    }
                  >
                    Urine
                  </Col>
                  <Col
                    id="bloodCoughUrineOthersBtn"
                    onClick={() => setClickedSample("fourth")}
                    style={
                      clickedSample === "fourth"
                        ? { backgroundColor: "#029967", color: "#fff" }
                        : { backgroundColor: "#fff", color: "#029967" }
                    }
                  >
                    Others
                  </Col> */}
                </Row>
                {vcategory && managementTestPost.length === 0 ? (
                  <div style={{ color: "red" }}>*Please Select a Category</div>
                ) : (
                  " "
                )}

                {/* <Row className="mb-2 mt-4">
                  <Col md={9} xs={9}>
                    <Form.Control
                      type="text"
                      placeholder="Add other samples manually"
                      id="addTestTitleDiv"
                    />
                  </Col>
                  <Col md={3} xs={3}>
                    <div id="addBtnGreen">Add</div>
                  </Col>
                </Row> */}

                <Row className="mb-2 mt-4" id="uploadTestImgTxt">
                  Select age group
                </Row>
                <Row style={{ margin: 0, gap: "1rem" }}>
                  <Col
                    md={2}
                    xs={4}
                    id="bloodCoughUrineOthersBtn"
                    checked={ageGroup === "0-12Yrs"}
                    value="0-12Yrs"
                    onClick={() => {
                      setageGroup("0-12Yrs") || setClickedAge("first");
                    }}
                    //onClick={() => setClickedAge("first")}
                    style={
                      clickedAge === "first"
                        ? { backgroundColor: "#029967", color: "#fff" }
                        : { backgroundColor: "#fff", color: "#029967" }
                    }
                  >
                    0-12Yrs
                  </Col>
                  <Col
                    md={2}
                    xs={4}
                    id="bloodCoughUrineOthersBtn"
                    //onClick={() => setClickedAge("second")}
                    checked={ageGroup === "13-18Yrs"}
                    value="13-18Yrs"
                    onClick={() => {
                      setageGroup("13-18Yrs") || setClickedAge("second");
                    }}
                    style={
                      clickedAge === "second"
                        ? { backgroundColor: "#029967", color: "#fff" }
                        : { backgroundColor: "#fff", color: "#029967" }
                    }
                  >
                    13-18Yrs
                  </Col>
                  <Col
                    md={2}
                    xs={3}
                    id="bloodCoughUrineOthersBtn"
                    //onClick={() => setClickedAge("third")}
                    checked={ageGroup === "19-40Yrs"}
                    value="19-40Yrs"
                    onClick={() => {
                      setageGroup("19-40Yrs") || setClickedAge("third");
                    }}
                    style={
                      clickedAge === "third"
                        ? { backgroundColor: "#029967", color: "#fff" }
                        : { backgroundColor: "#fff", color: "#029967" }
                    }
                  >
                    19-40Yrs
                  </Col>
                  <Col
                    md={2}
                    xs={4}
                    id="bloodCoughUrineOthersBtn"
                    checked={ageGroup === "41-60Yrs"}
                    value="41-60Yrs"
                    onClick={() => {
                      setageGroup("41-60Yrs") || setClickedAge("fourth");
                    }}
                    //onClick={() => setClickedAge("fourth")}
                    style={
                      clickedAge === "fourth"
                        ? { backgroundColor: "#029967", color: "#fff" }
                        : { backgroundColor: "#fff", color: "#029967" }
                    }
                  >
                    41-60Yrs
                  </Col>
                  <Col
                    md={2}
                    xs={7}
                    id="bloodCoughUrineOthersBtn"
                    //onClick={() => setClickedAge("fifth")}
                    checked={ageGroup === "60+ Yrs"}
                    value="60+ Yrs"
                    onClick={() => {
                      setageGroup("60+ Yrs") || setClickedAge("fifth");
                    }}
                    style={
                      clickedAge === "fifth"
                        ? { backgroundColor: "#029967", color: "#fff" }
                        : { backgroundColor: "#fff", color: "#029967" }
                    }
                  >
                    60+ Yrs
                  </Col>
                </Row>
                <Row style={{ margin: 0 }} className="mb-3 mt-4">
                  <Col
                    md={11}
                    xs={12}
                    id="bloodCoughUrineOthersBtn"
                    checked={ageGroup === "AllAgeGroup"}
                    value="AllAgeGroup"
                    onClick={() => {
                      setageGroup("AllAgeGroup") || setClickedAge("sixth");
                    }}
                    //onClick={() => setClickedAge("sixth")}
                    style={
                      clickedAge === "sixth"
                        ? { backgroundColor: "#029967", color: "#fff" }
                        : { backgroundColor: "#fff", color: "#029967" }
                    }
                  >
                    All age Group
                  </Col>
                </Row>
                {vage && clickedAge.length === 1 ? (
                  <div style={{ color: "red", marginBottom: "1rem" }}>
                    *Select Age Group
                  </div>
                ) : (
                  <div style={{ marginBottom: "1.4rem" }}></div>
                )}

                <Row className="mb-3 mt-4" id="uploadTestImgTxt">
                  Select Gender
                </Row>
                <Row style={{ margin: 0, gap: "1rem" }} className="mb-0">
                  <Col
                    md={2}
                    xs={2}
                    id="bloodCoughUrineOthersBtn"
                    label="Male"
                    checked={gender === "Male"}
                    value="Male"
                    onClick={() => {
                      setgender("Male") || setClickedGender("first");
                    }}
                    // onClick={() => setClickedGender("first")}
                    style={
                      clickedGender === "first"
                        ? { backgroundColor: "#029967", color: "#fff" }
                        : { backgroundColor: "#fff", color: "#029967" }
                    }
                  >
                    Male
                  </Col>
                  <Col
                    md={2}
                    xs={2}
                    id="bloodCoughUrineOthersBtn"
                    label="Female"
                    checked={gender === "Female"}
                    value="Female"
                    onClick={() => {
                      setgender("Female") || setClickedGender("second");
                    }}
                    // onClick={() => setClickedGender("second")}
                    style={
                      clickedGender === "second"
                        ? { backgroundColor: "#029967", color: "#fff" }
                        : { backgroundColor: "#fff", color: "#029967" }
                    }
                  >
                    Female
                  </Col>
                  <Col
                    md={2}
                    xs={2}
                    id="bloodCoughUrineOthersBtn"
                    label="Others"
                    checked={gender === "Others"}
                    value="Others"
                    onClick={() => {
                      setgender("Others") || setClickedGender("third");
                    }}
                    // onClick={() => setClickedGender("third")}
                    style={
                      clickedGender === "third"
                        ? { backgroundColor: "#029967", color: "#fff" }
                        : { backgroundColor: "#fff", color: "#029967" }
                    }
                  >
                    Other
                  </Col>
                </Row>

                {genderCategory && clickedGender.length === 1 ? (
                  <div style={{ color: "red", marginBottom: "1rem" }}>
                    *Select Gender Type
                  </div>
                ) : (
                  <div style={{ marginBottom: "1.4rem" }}></div>
                )}

                <Row style={{ margin: 0 }} className="mb-3" id="descriptionDiv">
                  <textarea
                    placeholder="Add description (in 100 words maximum*)"
                    rows={5}
                    id="descriptionBox"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </Row>

                <Row style={{ margin: 0 }} className="mb-3">
                  <Button id="addBtnBlack" variant="dark" onClick={contactUs}>
                    Add
                  </Button>
                </Row>
              </Form.Group>
            </Form>
          </Col>

          <Col md={2}></Col>
        </Row>
      </Container>
    </>
  );
};

export default AddTestDetails;
