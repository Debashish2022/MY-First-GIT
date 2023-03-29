import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import "./Labregistration.css";
import { IoIosAddCircle } from "react-icons/io";
import novalogo from "../../asset/novalogo.png";
import { apicaller } from "../../utils/api";
import axios from "axios";
import GooglePlacesAutocomplete, {
  geocodeByPlaceId,
} from "react-google-places-autocomplete";
import Loader from "../../components/Loader";
import { Navigate, useNavigate } from "react-router-dom";
//add to toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Labregistration() {
  const [labName, setLabName] = useState("");
  const [labLogo, setLabLogo] = useState([]);
  const [selectedLabLogoImg, setSelectedLabLogoImg] = useState();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [exp, setExp] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [description, setDescription] = useState("");
  const [testStartTiming, setTestStartTiming] = useState("");
  const [testEndTiming, setTestEndTiming] = useState("");
  const [openStartDay, setOpenStartDay] = useState("");
  const [openEndDay, setOpenEndDay] = useState("");
  const [labCapacity, setLabCapacity] = useState("");
  const [labRegNumber, setLabRegNumber] = useState("");
  const [govDocImg, setGovDocImg] = useState([]);
  const [selectedGovDocImg, setSelectedGovDocImg] = useState();
  const [facilities, setFacilities] = useState("");
  const [addressObj, setAddressObj] = useState();
  const [lat, setLat] = useState("");
  const [long, setLong] = useState();
  // import navigation
  const navigate = useNavigate();
  const [value, setValue] = useState(null);
  const [address, setAddress] = useState("");
  // import lab images
  const [labImages, setLabImages] = useState([]);
  const [selectedLabImages, setSelectedLabImages] = useState();
  // for loading spinner
  //for loader
  const [isImageUploadLoading, setIsImageUploadLoading] = useState(false);
  const [isloading1, setIsLoading1] = useState(false);
  const [isGovtLogoUploadLoading, setIsGovtLogoUploadLoading] = useState(false);
  const [isRegPageUploadSuccessful, setIsRegPageUploadSuccessful] =
    useState(false);
  // regular Expressions for Lab Registration Page
  const reg = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w\w+)+$/;
  var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
  const phn = /^\d{10}$/;
  // alphanumeric characters only
  const regExp = /^(?=.[a-zA-Z])(?=.[0-9])|(?:\.[a-zA-Z0-9-]+)*$/;

  // const navigate = useNavigate();

  // const [selectedLabLogo, setSelectedLabLogo] = useState("");

  // for errors
  const [errLabName, setErrLabName] = useState(false);
  const [errFullName, setErrFullName] = useState(false);
  const [errValue, setErrValue] = useState(false);
  const [errEmail, setErrEmail] = useState(false);
  const [errPhone, setErrPhone] = useState(false);
  const [errDescription, setErrDescription] = useState(false);
  const [errExp, setErrExp] = useState(false);
  const [errSpecialization, setErrSpecialization] = useState(false);
  const [errTestStartTiming, setErrTestStartTiming] = useState(false);
  const [errTestEndTiming, setErrTestEndTiming] = useState(false);
  const [errOpenStartDay, setErrOpenStartDay] = useState(false);
  const [errOpenEndDay, setErrOpenEndDay] = useState(false);
  const [errLabRegNum, setErrLabRegNum] = useState(false);
  const [errLabCapacity, setErrLabCapacity] = useState(false);
  const [errFacilities, setErrFacilities] = useState(false);
  const [errLabImages, setErrLabImages] = useState(false);
  // create a preview as a side effect,whenever selected file is changed
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
  const getAddressObject = (address_components) => {
    // console.log(address_components);
    const ShouldBeComponent = {
      street_number: ["street_number"],
      postal_code: ["postal_code"],
      street: ["street_address", "route"],
      province: [
        "administrative_area_level_1",
        "administrative_area_level_2",
        "administrative_area_level_3",
        "administrative_area_level_4",
        "administrative_area_level_5",
      ],
      city: [
        "locality",
        "sublocality",
        "sublocality_level_1",
        "sublocality_level_2",
        "sublocality_level_3",
        "sublocality_level_4",
      ],
      country: ["country"],
    };

    let address = {
      street_number: "",
      postal_code: "",
      street: "",
      province: "",
      city: "",
      country: "",
    };

    address_components.forEach((component) => {
      for (var shouldBe in ShouldBeComponent) {
        if (ShouldBeComponent[shouldBe].indexOf(component.types[0]) !== -1) {
          if (shouldBe === "country") {
            address[shouldBe] = component.short_name;
          } else {
            address[shouldBe] = component.long_name;
          }
        }
      }
    });

    // Fix the shape to match our schema
    address.address = address.street_number + " " + address.street;
    delete address.street_number;
    delete address.street;
    if (address.country === "US") {
      address.state = address.province;
      delete address.province;
    }
    return address;
  };

  useEffect(() => {
    const func = async () => {
      // console.log("Geo Locatipon", value);
      const addr = value && value.label;
      setAddress(addr);
      const geocodeObj =
        value && value.value && (await geocodeByPlaceId(value.value.place_id));
      // console.log("geo Code  obj is", geocodeObj[0]?.geometry);
      setLong(geocodeObj[0]?.geometry.viewport.Ja.hi);
      setLat(geocodeObj[0]?.geometry.viewport.Va.hi);
      const addressObject =
        geocodeObj && getAddressObject(geocodeObj[0].address_components);
      // console.log("addressObject", addressObject);
      setAddressObj(addressObject);
    };
    func();
  }, [value]);

  // to choose image file lab logo
  const chooseLabLogoPhoto = (e) => {
    // console.log(e.target.files);
    setLabLogo(e.target.files[0]);
  };

  //   to upload file lab logo
  const uploadLabLogoImg = () => {
    var FormData = require("form-data");

    var data = new FormData();
    data.append("img", labLogo);

    var config = {
      method: "post",
      url: "https://api.novaprolabs.com/api/single-upload",
      // in url, if 404 error found, then it is running on local host, so write http:// https://api.novaprolabs.com/api/single-upload
      headers: {
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlzX3Byb2ZpbGVfY29tcGxldGVkIjpmYWxzZSwicGxhbl9pZCI6bnVsbCwidXNlcl90eXBlIjoiYWRtaW4iLCJfaWQiOiI2MzA1MDFmNzIzNmQ5NzFjMmUyY2FlMTAiLCJlbWFpbCI6ImFkbWluQGF0aGFydy5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCRzYm1sN0dkSHlZZDVybGVaR3Rvak4uTm56c2UyM2YvTUwzWTkueTR3NlhTMHh5TENUQjFnSyIsInBob25lX251bWJlciI6OTk4ODc3NjY1NSwiY3JlYXRlZEF0IjoiMjAyMi0wOC0yM1QxNjozNjowNy4xOThaIiwidXBkYXRlZEF0IjoiMjAyMi0wOC0yM1QxNjozNjowNy4xOThaIiwiX192IjowfSwiaWF0IjoxNjYxNTcxMDM5LCJleHAiOjE2NjQxNjMwMzl9.O7Ht80dEvfBsuf2UHHbxVcVKfFMSCXvDLViR_7g59Z0",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        // console.log(JSON.stringify(response.data.img));
        //   response.data.img means this will give the proper path of the img
        const img_path = response.data.img;
        setSelectedLabLogoImg(img_path);
        // console.log(selectedLabLogoImg);
      })
      .catch(function (error) {
        // console.log(error);
      });
  };
  // to choose image file Government document(govDocImg)
  const chooseGovDocPhoto = (e) => {
    // console.log(e.target.files);
    setGovDocImg(e.target.files[0]);
  };

  //   to upload file gov doc
  const uploadGovDocImg = () => {
    // console.log("selected GovtDocument", govDocImg);
    if (govDocImg.length === 0) {
      eToast("Please Select Govt Document");
      return false;
    } else {
      setIsLoading1(true);
      var FormData = require("form-data");

      var data = new FormData();
      data.append("img", govDocImg);

      var config = {
        method: "post",
        url: "https://api.novaprolabs.com/api/single-upload",
        // in url, if 404 error found, then it is running on local host, so write http:// ,i.e., http://54.167.118.226:8000/api/single-upload
        headers: {
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlzX3Byb2ZpbGVfY29tcGxldGVkIjpmYWxzZSwicGxhbl9pZCI6bnVsbCwidXNlcl90eXBlIjoiYWRtaW4iLCJfaWQiOiI2MzA1MDFmNzIzNmQ5NzFjMmUyY2FlMTAiLCJlbWFpbCI6ImFkbWluQGF0aGFydy5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCRzYm1sN0dkSHlZZDVybGVaR3Rvak4uTm56c2UyM2YvTUwzWTkueTR3NlhTMHh5TENUQjFnSyIsInBob25lX251bWJlciI6OTk4ODc3NjY1NSwiY3JlYXRlZEF0IjoiMjAyMi0wOC0yM1QxNjozNjowNy4xOThaIiwidXBkYXRlZEF0IjoiMjAyMi0wOC0yM1QxNjozNjowNy4xOThaIiwiX192IjowfSwiaWF0IjoxNjYxNTcxMDM5LCJleHAiOjE2NjQxNjMwMzl9.O7Ht80dEvfBsuf2UHHbxVcVKfFMSCXvDLViR_7g59Z0",
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          if (response.status === 201 || response.status === 200) {
            setIsLoading1(false);
            sToast("Cover image Uploaded");
            // console.log(JSON.stringify(response.data.img));
            const img_path1 = response.data.img;
            setSelectedGovDocImg(img_path1);
            // console.log(selectedGovDocImg);
          }
        })
        .catch(function (error) {
          // console.log("error while govt document upload is", error);
          eToast("Couldn't uploaded");
        })
        .finally(() => setIsLoading1(false));
    }
  };

  // to choose multiple lab images
  const chooselabimages = (e) => {
    // console.log("choose lab images", e.target.files);
    setLabImages(e.target.files);
  };

  //   to upload multiple images
  const uploadlabimages = (e) => {
    e.preventDefault();
    // console.log("select lab images", labImages);
    if (labImages.length === 0) {
      eToast("Please select multiple images");
      return false;
    } else {
      setIsImageUploadLoading(true);
      const data = new FormData();
      for (let i = 0; i < labImages.length; i++) {
        data.append("img", labImages[i]);
      }
      var config = {
        method: "post",
        url: "https://api.novaprolabs.com/api/multi-upload",
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

            sToast("images uploaded!");
            // console.log(JSON.stringify(response.data));
            const Img_Path = response.data;
            setSelectedLabImages(Img_Path);
            setIsImageUploadLoading(false);
            // console.log(selectedLabImages);
          }
        })

        .catch(function (error) {
          // console.log("error while images uploaded", error);
          eToast("Couldn't uploaded!");
        })
        .finally(() => setIsImageUploadLoading(false));
    }
  };

  const validation = () => {
    if (labName.length === 0) {
      setErrLabName(true);
      return false;
    } else if (fullName.length === 0) {
      setErrFullName(true);
      return false;
    } else if (lat.length === 0) {
      setErrValue(true);
      return false;
    } else if (!reg.test(email)) {
      setErrEmail(true);
      return false;
    } else if (!phn.test(phone)) {
      setErrPhone(true);
      return false;
    } else if (specialization === "") {
      setErrSpecialization(true);
      return false;
    } else if (exp.length === 0 || !regExp.test(exp)) {
      setErrExp(true);
      return false;
    } else if (description.length === 0) {
      setErrDescription(true);
      return false;
    } else if (testStartTiming.length === 0) {
      setErrTestStartTiming(true);
      return false;
    } else if (testEndTiming.length === 0) {
      setErrTestEndTiming(true);
      return false;
    } else if (openStartDay.length === 0) {
      setErrOpenStartDay(true);
      return false;
    } else if (openEndDay.length === 0) {
      setErrOpenEndDay(true);
      return false;
    } else if (labRegNumber.length === 0) {
      setErrLabRegNum(true);
      return false;
    } else if (labCapacity.length === 0) {
      setErrLabCapacity(true);
      return false;
    } else if (facilities.length === 0) {
      setErrFacilities(true);
      return false;
    } else if (labImages.length === 0) {
      setErrLabImages(true);
      return false;
    } else if (selectedLabImages.length === 0) {
      setErrLabImages(true);
      return false;
    } else {
      return true;
    }
  };

  // to submit and register data
  const submitBtn = async (e) => {
    if (validation()) {
      // e.preventDefault();
      setIsRegPageUploadSuccessful(true);

      var data = {
        lab_name: labName,
        full_name: fullName,
        email: email,
        phone_number: phone,
        description: description,
        logo: "",
        exp: exp,
        // rating_avg: 4.5,
        specialization: specialization,
        time_start: testStartTiming,
        time_end: testEndTiming,
        week_start: openStartDay,
        week_end: openEndDay,
        lab_capacity: labCapacity,
        gov_registration_no: labRegNumber,
        doc_path: "",
        latitude: lat,
        longitude: long,
        address: address,
        facilities: facilities.split(","),
        lab_img: selectedLabImages,
        user_type: "pathology",
      };
      // console.log("Data is", data);
      apicaller("pathology", data, "post", null).then((res) => {
        sToast(
          "Lab registered Succesfully,Please Check your Email and Password"
        );
        setIsRegPageUploadSuccessful(false);
        setLabName("");
        setFullName("");
        setEmail("");
        setPhone("");
        setExp("");
        setSpecialization("");
        setDescription("");
        setTestStartTiming("");
        setTestEndTiming("");
        setOpenStartDay("");
        setOpenEndDay("");
        setLabCapacity("");
        setLabRegNumber("");
        setFacilities("");
        // console.log(res);
        // here
        navigate("/");
      });
      // .catch((err) => console.log(err));
    }
  };

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <div
              id="lab8"
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/")}
            >
              <img src={novalogo} alt="novaLogo" style={{ height: "4rem" }} />
            </div>
          </Col>
        </Row>
      </Container>
      <Container id="lab1">
        <div id="lab2">
          <Row>
            <Col md={1}></Col>
            <Col md={10}>
              <Row>
                <Col md={12}>
                  <div id="lab3">LAB REGISTRATION PANEL</div>
                </Col>
              </Row>

              <Row id="lab7">
                <Col lg={7} md={12} sm={12} xs={12}>
                  <Form.Label id="timeAndDayTxt">Lab Name</Form.Label>
                  <Form.Control
                    id="lab4"
                    type="text"
                    placeholder="Lab Name *"
                    value={labName}
                    onChange={(e) => setLabName(e.target.value)}
                  />
                  {/* to show error */}
                  {errLabName && (
                    <div id="errorTxtLabReg">Enter a valid lab name</div>
                  )}
                  <div id="lab9"></div>
                </Col>
                <Col>
                  <Form.Label id="timeAndDayTxt">Full Name</Form.Label>
                  <Form.Control
                    id="lab4"
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Enter Full Name *"
                  />
                  {/* to show error */}
                  {errFullName ? (
                    <div id="errorTxtLabReg">Enter a valid name</div>
                  ) : (
                    " "
                  )}
                  <div id="lab9"></div>
                </Col>
              </Row>

              <Row>
                <div style={{ color: "white" }}>Select Your Location</div>
                <GooglePlacesAutocomplete
                  apiKey="AIzaSyCbX0Bznd0JJMjt3aw4yc4wYlx9s-pA13I"
                  selectProps={{
                    value,
                    onChange: setValue,
                    placeholder: "Please Select Your Location",
                    isClearable: true,
                  }}
                  // onLoadFailed={(error) =>
                  //   console.error("Could not inject Google script", error)
                  // }
                />
              </Row>
              {/* to show error */}
              {errValue && <div id="errorTxtLabReg">Select Yor Location</div>}

              <Row id="lab7"></Row>

              <Row id="lab7">
                <Col lg={7} md={6} sm={12} xs={12}>
                  <Form.Label id="timeAndDayTxt">Email Id</Form.Label>
                  <Form.Control
                    id="lab4"
                    type="email"
                    placeholder="Enter Your Email *"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {/* to show error */}
                  {errEmail ? (
                    <div id="errorTxtLabReg">Enter a valid email</div>
                  ) : (
                    " "
                  )}
                  <div id="lab9"></div>
                </Col>
                <Col id="lab16" lg={5} md={6} sm={12} xs={12}>
                  <Form.Label id="timeAndDayTxt">Phone Number</Form.Label>
                  <Form.Select id="lab17">
                    <option value="+1">+1</option>
                    <option value="+91">+91</option>
                  </Form.Select>
                  <Form.Control
                    id="lab18"
                    type="text"
                    placeholder="Phone Number *"
                    value={phone}
                    maxlength="10"
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  {/* to show error */}
                  {errPhone ? (
                    <div id="errorTxtLabReg">Enter a valid phone number</div>
                  ) : (
                    " "
                  )}
                  <div id="lab9"></div>
                </Col>
              </Row>
              {/* specialisation and experiance */}
              <Row id="lab7">
                <Col lg={8} md={8} sm={8} xs={12}>
                  <Form.Label id="timeAndDayTxt">Specialization</Form.Label>
                  <Form.Control
                    id="lab4"
                    type="text"
                    placeholder="Enter Your specialisation *"
                    value={specialization}
                    onChange={(e) => setSpecialization(e.target.value)}
                  />
                  {/* to show error */}
                  {errSpecialization ? (
                    <div id="errorTxtLabReg">Enter a Specialization</div>
                  ) : (
                    " "
                  )}
                  <div id="lab9"></div>
                </Col>
                <Col lg={4} md={4} sm={4} xs={12}>
                  <Form.Label id="timeAndDayTxt">Experiance</Form.Label>
                  <Form.Control
                    id="lab4"
                    type="text"
                    placeholder="(in Years) , e.g. 8years*"
                    value={exp}
                    onChange={(e) => setExp(e.target.value)}
                  />
                  {/* to show error */}
                  {errExp ? (
                    <div id="errorTxtLabReg">
                      Enter valid experiance in years
                    </div>
                  ) : (
                    " "
                  )}
                  <div id="lab9"></div>
                </Col>
              </Row>

              <Row id="lab7">
                <Col>
                  <Form.Label id="timeAndDayTxt">
                    Description about Lab
                  </Form.Label>
                  <Form.Control
                    id="lab4"
                    type="text"
                    placeholder="e.g. pharmacuetical lab"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                  {/* to show error */}
                  {errDescription ? (
                    <div id="errorTxtLabReg">** required</div>
                  ) : (
                    " "
                  )}
                  <div id="lab9"></div>
                </Col>
              </Row>

              {/* <Row id="lab7">
                <Form.Label id="timeAndDayTxt">
                  Upload Your Gov Document
                </Form.Label>
                <Col lg={10} md={8} sm={8} xs={8}>
                  <label id="lab14" htmlFor="myfile">
                    <IoIosAddCircle id="lab15" />
                    <input
                      type="file"
                      className="file"
                      id="myfile"
                      accept="application/png, application/jpg, application/jpeg"
                      onChange={chooseGovDocPhoto}
                    />
                  </label>
                  <div id="lab9"></div>
                </Col>
                <Col lg={2} md={4} sm={4} xs={4}>
                  <Button id="lab5" variant="light" onClick={uploadGovDocImg}>
                    {isloading1 ? <Loader size="sm" /> : "Upload"}
                  </Button>
                  <div id="lab9"></div>
                </Col>
              </Row> */}
              <Row id="lab7">
                <Form.Label id="timeAndDayTxt">Time</Form.Label>
                <Col lg={6} md={6} sm={6} xs={6}>
                  <Form.Select
                    id="lab4"
                    aria-label="Default select example"
                    value={testStartTiming}
                    onChange={(e) => setTestStartTiming(e.target.value)}
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
                  {/* to show error */}
                  {errTestStartTiming ? (
                    <div id="errorTxtLabReg">** required</div>
                  ) : (
                    " "
                  )}
                  <div id="lab9"></div>
                </Col>
                <Col lg={6} md={6} sm={6} xs={6}>
                  <Form.Select
                    id="lab4"
                    aria-label="Default select example"
                    value={testEndTiming}
                    onChange={(e) => setTestEndTiming(e.target.value)}
                  >
                    <option>Time End</option>
                    <option value="1.00 PM">1.00 PM</option>
                    <option value="2.00 PM">2.00 PM</option>
                    <option value="3.00 PM">3.00 PM</option>
                    <option value="4.00 PM">4.00 PM</option>
                    <option value="5.00 PM">5.00 PM</option>
                    <option value="6.00 PM">6.00 PM</option>
                    <option value="7.00 PM">7.00 PM</option>
                    <option value="8.00 PM">8.00 PM</option>
                    <option value="9.00 PM">9.00 PM</option>
                    <option value="10.00 PM">10.00 PM</option>
                    <option value="11.00 PM">11.00 PM</option>
                  </Form.Select>
                  {/* to show error */}
                  {errTestEndTiming ? (
                    <div id="errorTxtLabReg">** required</div>
                  ) : (
                    " "
                  )}
                  <div id="lab9"></div>
                </Col>
              </Row>

              <Row id="lab7">
                <Form.Label id="timeAndDayTxt">Day</Form.Label>
                <Col lg={6} md={6} sm={6} xs={6}>
                  <Form.Select
                    id="lab4"
                    aria-label="Default select example"
                    value={openStartDay}
                    onChange={(e) => setOpenStartDay(e.target.value)}
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
                  {/* to show error */}
                  {errOpenStartDay ? (
                    <div id="errorTxtLabReg">** required</div>
                  ) : (
                    " "
                  )}
                  <div id="lab9"></div>
                </Col>
                <Col lg={6} md={6} sm={6} xs={6}>
                  <Form.Select
                    id="lab4"
                    aria-label="Default select example"
                    value={openEndDay}
                    onChange={(e) => setOpenEndDay(e.target.value)}
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
                  {/* to show error */}
                  {errOpenEndDay ? (
                    <div id="errorTxtLabReg">** required</div>
                  ) : (
                    " "
                  )}
                  <div id="lab9"></div>
                </Col>
              </Row>

              <Row id="lab7">
                <Col lg={6} md={6} sm={6} xs={12}>
                  <Form.Label id="timeAndDayTxt">
                    Lab Registration Number
                  </Form.Label>
                  <Form.Control
                    id="lab4"
                    type="text"
                    placeholder="Enter your Lab registration number provided by govt *"
                    value={labRegNumber}
                    onChange={(e) => setLabRegNumber(e.target.value)}
                  />
                  {/* to show error */}
                  {errLabRegNum ? (
                    <div id="errorTxtLabReg">
                      Select the lab registration number
                    </div>
                  ) : (
                    " "
                  )}
                  <div id="lab9"></div>
                </Col>
                <Col lg={6} md={6} sm={6} xs={12}>
                  <Form.Label id="timeAndDayTxt">Lab Capacity</Form.Label>
                  <Form.Select
                    value={labCapacity}
                    onChange={(e) => setLabCapacity(e.target.value)}
                    id="lab4"
                    aria-label="Default select example"
                  >
                    <option>Lab Capacity</option>
                    <option value="1">1 - 10</option>
                    <option value="2">11 - 20</option>
                    <option value="3">21 - 30</option>
                    <option value="4">31 - 40</option>
                    <option value="5">41 - 50</option>
                    <option value="6">51 - 60</option>
                    <option value="7">61 - 70</option>
                    <option value="8">71 - 80</option>
                    <option value="9">81 - 90</option>
                  </Form.Select>
                  {/* to show error */}
                  {errLabCapacity ? (
                    <div id="errorTxtLabReg">Select the lab capacity</div>
                  ) : (
                    " "
                  )}
                  <div id="lab9"></div>
                </Col>
              </Row>

              <Row id="lab7">
                <Form.Label id="timeAndDayTxt">Facilites</Form.Label>
                <Col>
                  <Form.Control
                    placeholder="Facilites Like ..."
                    id="lab4"
                    as="textarea"
                    rows={3}
                    value={facilities}
                    onChange={(e) => setFacilities(e.target.value)}
                  />
                  {/* to show error */}
                  {errFacilities ? (
                    <div id="errorTxtLabReg">** required</div>
                  ) : (
                    " "
                  )}
                  <div id="lab9"></div>
                </Col>
              </Row>
              {/* lab image upload 09th dec*/}
              <Row id="lab7">
                <Form.Label id="timeAndDayTxt">
                  Upload Your Lab Images
                </Form.Label>
                <Row>
                  {Array.from(labImages).map((item) => {
                    return (
                      <Col md={2}>
                        <span>
                          <img
                            style={{ padding: "10px" }}
                            width={150}
                            height={100}
                            src={item ? URL.createObjectURL(item) : null}
                          />
                        </span>
                      </Col>
                    );
                  })}
                </Row>

                <Col lg={10} md={8} sm={8} xs={8}>
                  <Form.Group controlId="formFileMultiple" className="mb-3">
                    <Form.Control
                      type="file"
                      multiple
                      onChange={chooselabimages}
                    />
                  </Form.Group>
                </Col>

                <Col lg={2} md={4} sm={4} xs={4}>
                  <Button id="lab5" variant="light" onClick={uploadlabimages}>
                    {isImageUploadLoading ? <Loader size="sm" /> : "Upload"}
                  </Button>
                  <div id="lab9"></div>
                </Col>
              </Row>
              {/* to show error */}
              {errLabImages && (
                <div id="errorTxtLabReg">Choose Images for Lab</div>
              )}

              <Row id="lab7">
                <Col>
                  <Button
                    id="lab6"
                    type="submit"
                    onClick={() => submitBtn()}
                    variant="dark"
                  >
                    {isRegPageUploadSuccessful ? (
                      <Loader size="sm" color="white" />
                    ) : (
                      "Register"
                    )}
                  </Button>
                </Col>

                <Col>
                  <Button
                    id="lab6"
                    type="submit"
                    onClick={() => navigate("/")}
                    variant="danger"
                  >
                    Cancel
                  </Button>
                </Col>
              </Row>
            </Col>
            <Col md={1}></Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}
