import axios from "axios";
import { async } from "q";
import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useSelector } from "react-redux";
import {
  getTeacherId,
  getTeacherToken,
  setTeacherId,
} from "../../redux/Slice/userSlice";
import { API, apicaller } from "../../utils/api";
import Utility from "../../utils/Utility";
import Loader from "../Loader/Loader";
import "./EditNewCourseModal.css";
import {MdClose} from "react-icons/md";

export default function EditNewCourseModal(props) {
  var res = props.response;
  console.log("response comming....@@@@@", res?._id);

  const [empty, setEmpty] = useState("");
  const [courseName, setCourseName] = useState(res?.name);
  const [courseType, setCourseType] = useState(res?.course_type);
  const [courseDescription, setCourseDescription] = useState(res?.description);
  const [courseThumbnail, setCourseThumbnail] = useState([]);
  const [price, setPrice] = useState(res?.price);
  const [postLoader, setPostLoader] = useState(false);
  const TeacherId = useSelector(getTeacherId);
  const Token = useSelector(getTeacherToken);
  const [imgLink, setImgLink] = useState("");
  const [uploadBtnLoader, setUploadBtnLoader] = useState(false);
  const [imagePreview, setImagePreview] = useState(res?.img);

  const attachImage = (e) => {
    setCourseThumbnail(e.target.files[0]);
    setEmpty(e.target.value);
  };

  function validation() {
    if (empty === "") {
      Utility.eToast("Please Select Course Thumbnail");
      return false;
    } else if (courseName.length === 0) {
      Utility.eToast("Please Enter Course Name");
      return false;
    } else if (courseType.length === 0) {
      Utility.eToast("Please Select Course Type");
      return false;
    } else if (price.length === 0) {
      Utility.eToast("Please Enter Course Price");
      return false;
    } else if (courseDescription.length === 0) {
      Utility.eToast("Please Enter Course Desciption");
      return false;
    } else {
      return true;
    }
  }

  //   const AddNewCourseFunction =  () => {
  //     if(validation()){
  //       setPostLoader(true);
  //       var data = new FormData();
  //     data.append("img",courseThumbnail);
  //     // data.append("estimaate_completion_time", "120");
  //     data.append("name", courseName);
  //     data.append("course_type", courseType);
  //     data.append("description", courseDescription);
  //     data.append("createdBy", TeacherId);
  //     data.append("price",price);

  //     var config = {
  //       method: "post",
  //       url: `${API}course`,
  //       headers: {
  //         authorization:
  //           "Bearer "+Token,
  //       },
  //       data: data,
  //     };

  //     axios(config)
  //       .then(function (response) {
  //         if(response.status === 200 || response.status === 204 || response.status === 201){
  //                 Utility.sToast('New Course Added Successfully');
  //                 setEmpty("");
  //                 setCourseThumbnail([]);
  //                 setCourseName("");
  //                 setCourseType("");
  //                 setCourseDescription("");
  //                 setTeacherId("");
  //                 setPrice("");
  //       }})
  //        .catch(function (error) {
  //         Utility.eToast('Sorry Could Not Added Due to Internal Error');
  //       })
  //       .finally(()=>{setPostLoader(false);props.onHide()});
  //     }
  //   };

  function UploadEditThumbNail() {
    if (empty !== "") {
      setUploadBtnLoader(true);
      const data = new FormData();
      data.append("img", courseThumbnail);

      apicaller("single-upload", data, "POST", null, "multipart/form-data")
        .then((res) => {
          if (res.status === 201 || res.status === 200) {
            // setIsLoading1(false);
            // const img_path = res.data.img;
            // console.log("link getting", img_path);
            setImgLink(res.data.img);
            console.log("aws", imgLink);
            Utility.sToast("Thumbnail Uploaded Succesfully");
          }
        })
        .catch((err) => {
          Utility.eToast("error occured while cover img upload is ", err);
        })
      .finally(()=>{
      setUploadBtnLoader(false);
      });
    } else {
      Utility.eToast("Please Select a Intro Video To Upload");
    }
  }

  const AddNewCourseFunction = async () => {

    if(validation()){
      setPostLoader(true);
    var data = {
      "img": imgLink === "" ? res.img : imgLink,
      "name": courseName,
      "course_type": courseType,
      "price": price,
      "description": courseDescription,
      "createdBy": TeacherId,
      "_id":res?._id,
    };
    console.log('data going...%%%', data);

    await apicaller("course", data, "put", Token)
    .then((res)=>{
        Utility.sToast("Data Updated Successfully");
    })
    .catch((error)=>{
        console.log('error....%%%',error);
    })
    .finally(()=>{
        setPostLoader(false);
        props.onHide();
        setCourseThumbnail([]);
        setEmpty("");
        setImgLink(""); 
    });

    }
      };

  function Hide(){
    setEmpty("");
    setImgLink("");
    props.onHide();
  }

  return (
    <div>
      <Modal
        // {...props}
        show={props.show}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header >
          <Modal.Title id="contained-modal-title-vcenter">
            Edit Course
          </Modal.Title>
          <div onClick={Hide} id="editnewcourse4"><MdClose/></div>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col>
                <Row>
                  <Form.Label>Select Course Thumbnail</Form.Label>
                  <Col md={9} lg={10}>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="file"
                        id="editnewcourse1"
                        value={empty}
                        onChange={attachImage}
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={2} md={2}>
                    <Button variant="success" id="editnewcourse3" onClick={UploadEditThumbNail}>
                      {uploadBtnLoader ? (
                        <Loader animation="border" variant="light" size="sm" />
                      ) : (
                        "Upload"
                      )}
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className="mt-3 mb-3">
              <Col id="editnewcourse6"><img id="editnewcourse5" src={imgLink === "" ? imagePreview : imgLink } /></Col>
            </Row>
            <Row>
              <Col>
                <Form.Label>Enter Course Name</Form.Label>
                <Form.Control
                  id="editnewcourse1"
                  className="mb-3"
                  type="text"
                  placeholder="Course Name"
                  value={courseName}
                  onChange={(e) => setCourseName(e.target.value)}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Select Course Type</Form.Label>
                  <Form.Select
                    id="editnewcourse1"
                    value={courseType}
                    onChange={(e) => setCourseType(e.target.value)}
                  >
                    <option>Select Course Type</option>
                    <option value="PhotoShop">PhotoShop</option>
                    <option value="React Js">React Js</option>
                    <option value="Redux">Redux</option>
                    <option value="React Native">React Native</option>
                    <option value="MERN">MERN</option>
                    <option value="Python">Python</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Label>Enter Course Price</Form.Label>
                <Form.Control
                  id="editnewcourse1"
                  className="mb-3"
                  type="text"
                  placeholder="Course Price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Enter Course Desciption</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    value={courseDescription}
                    onChange={(e) => setCourseDescription(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Container>
            <Row>
              <Col></Col>
              <Col>
                <Button
                  onClick={AddNewCourseFunction}
                  variant="dark"
                  id="editnewcourse2"
                >
                  <>
                    {" "}
                    {postLoader ? (
                      <Loader animation="border" variant="light" size="sm" />
                    ) : (
                      "Update"
                    )}
                  </>
                </Button>
              </Col>
              <Col></Col>
            </Row>
          </Container>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
