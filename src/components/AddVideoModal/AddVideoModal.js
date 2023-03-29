import React, { useEffect, useState } from "react";
import "./AddVideoModal.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Col, Container, Form, ProgressBar, Row } from "react-bootstrap";
import { API, apicaller } from "../../utils/api";
import { getTeacherToken } from "../../redux/Slice/userSlice";
import Utility from "../../utils/Utility";
import { useSelector } from "react-redux";
import axios from "axios";
import Loader from "../Loader/Loader";
import { MdClose } from "react-icons/md";

export default function AddVideoModal(props) {
  // useEffect(()=>{
  //   Happening()
  // },[])
  // // const now = 50;
  // const [now, setNow] = useState('');
  const [percentage, setPercentage] = useState("");

  // console.log("section id getting....", props.sectionid);
  // console.log("course id getting.....", props.courseid);
  const [videoTitle, setVideoTitle] = useState("");
  const [videoPdf, setVideoPdf] = useState("");
  const [videoIndex, setVideoIndex] = useState("");
  const [videoCourse, setVideoCourse] = useState([]);
  const [empty, setEmpty] = useState("");
  const [videoDocument, setVideoDocument] = useState([]);
  const [empty2, setEmpty2] = useState("");
  const [documentLink, setDocumentLink] = useState("");
  const [awsLink, setAwsLink] = useState("");
  const [addButtonLoader, setAddButtonLoader] = useState(false);
  const [videobtnLoader, setVideobtnLoader] = useState(false);
  const [notesbtnLoader, setNotesbtnLoader] = useState(false);
  const [change, setChange] = useState(true);

  // console.log("cresh..", empty, empty2);

  const ChooseVideo = (e) => {
    setVideoCourse(e.target.files[0]);
    setEmpty(e.target.value);
  };
  const ChooseDocuement = (e) => {
    setVideoDocument(e.target.files[0]);
    setEmpty2(e.target.value);
  };

  const Token = useSelector(getTeacherToken);

  // console.log("image select", empty, empty2);

  // console.log("aws link value", documentLink);

  function validation() {
    if (videoIndex === "") {
      Utility.eToast("Please Enter Video Index No.");
      return false;
    } else if (empty === "") {
      Utility.eToast("Please Select a Video To Upload");
      return false;
    } else if (awsLink === "" || awsLink === undefined) {
      Utility.eToast("Please Upload The Video");
      return false;
    } else if (videoTitle.length === 0) {
      Utility.eToast("Please Enter Video Title");
      return false;
    } else if (empty2 === "") {
      Utility.eToast("Please Select a Note Document");
      return false;
    } else if (documentLink === "" || documentLink === undefined) {
      Utility.eToast("Please Upload The Notes");
      return false;
    } else {
      return true;
    }
  }

  //  var state = {
  //     percentage:0,
  //   }

  function UploadVideo() {
    if (empty !== "") {
      setVideobtnLoader(true);
      Utility.sToast("Please wait video is upload it may take time");
      const data = new FormData();
      data.append("img", videoCourse);

      //       var request = new XMLHttpRequest();

      //     request.upload.addEventListener('progress', function (e) {
      //         var file1Size = videoCourse.size;

      //         if (e.loaded <= file1Size) {
      //             var percent = Math.round(e.loaded / file1Size * 100);
      //             console.log('percentage', percent);
      //             setNow(percent);
      //         }

      //         if(e.loaded == e.total){
      // console.log('100%')
      // setNow('100')       }
      //     });
      //     request.open('post', 'single-upload');
      //     request.timeout = 45000;
      //     request.send(data);

      // const options = {
      //   onUploadProgress: (progressEvent) =>{
      //     const{loaded, total} = progressEvent;
      //     let percent = Math.floor(loaded * 100/ total)
      //     setTimeout(() => percent = 0,10000);
      // console.log(`${loaded}kb of ${total}kb | ${percent}%`);
      //   }
      // }

      //  apicaller("single-upload",data,"POST",Token,"multipart/form-data" )
      //   .then((res) => {
      //     if (res.status === 201 || res.status === 200) {
      //       // setIsLoading1(false);
      //       console.log('response', res);
      //       const img_path = res.data.img;
      //       console.log("link getting", img_path);
      //       setAwsLink(img_path);
      //       console.log("aws", awsLink);
      //       Utility.sToast('Video Uploaded Successfully');
      //     }
      //   })
      //   .catch((err) => {
      //     Utility.eToast("error occured while cover img upload is ", err);
      //   })
      //   .finally(()=>{
      //     setVideobtnLoader(false);
      //   })

      let config = {
        method: "post",
        url: `${API}single-upload`,
        headers: {
          Authorization: "Bearer " + Token,
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (progressEvent) => {
          setPercentage(
            parseInt(
              Math.floor((progressEvent.loaded * 100) / progressEvent.total)
            )
          );
        },
        data: data,
      };

      axios(config)
        .then(function (res) {
          if (res.status === 201 || res.status === 200) {
            // setIsLoading1(false);
            console.log("response", res);
            const img_path = res.data.img;
            console.log("link getting", img_path);
            setAwsLink(img_path);
            console.log("aws", awsLink);
            Utility.sToast("Video Uploaded Successfully");
          }
        })
        .catch(function (error) {
          Utility.eToast("error occured while cover img upload is ", error);
        })
        .finally(() => {
          setVideobtnLoader(false);
        });
    } else {
      Utility.eToast("Please Select a Video To Upload");
    }
  }

  // console.log("percentage", percentage);

  function UploadDocument() {
    if (empty2 !== "") {
      setNotesbtnLoader(true);
      const data2 = new FormData();
      data2.append("img", videoDocument);

      apicaller("single-upload", data2, "POST", Token, "multipart/form-data")
        .then((res) => {
          if (res.status === 201 || res.status === 200) {
            // setIsLoading1(false);
            const img_path1 = res.data.img;
            console.log("link getting", img_path1);
            setDocumentLink(img_path1);
            console.log(documentLink);
            Utility.sToast("Notes Uploaded Successfully");
          }
        })
        .catch((err) => {
          Utility.eToast("error occured while cover img upload is ", err);
        })
        .finally(() => {
          setNotesbtnLoader(false);
        });
    } else {
      Utility.eToast("Please Select a Note Document To Upload");
    }
  }

  const AddVideoFunction = async () => {
    if (validation()) {
      setAddButtonLoader(true);

      if (documentLink !== "" || awsLink !== "") {
        var allVideo = {
          title: videoTitle,
          document: documentLink,
          index: videoIndex,
          course_id: props.courseid,
          section_id: props.sectionid,
          video_path: awsLink,
        };
        console.log("data going bro..", allVideo);
        await apicaller(`course-module`, allVideo, "post", Token)
          .then((res) => {
            Utility.sToast("New Video Added Successfully");
            setAddButtonLoader(false);
          })
          .catch(() => Utility.eToast("Error While Uploading"))
          .finally(() => {
            setVideoIndex("");
            setEmpty("");
            setEmpty2("");
            setVideoCourse([]);
            setVideoDocument([]);
            setVideoTitle("");
            setDocumentLink("");
            setAwsLink("");
            setPercentage("");
            props.onHide();
          });
      }
    }
  };

  function Hide() {
    setEmpty("");
    setEmpty2("");
    setPercentage("");
    setDocumentLink("");
    setAwsLink("");
    props.onHide();
  }

  return (
    <>
      <Modal
        // {...props}
        show={props.show}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Add New Video
          </Modal.Title>
          <div onClick={Hide} id="addvideo4">
            <MdClose />
          </div>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col>
                <Form.Label>Enter Video Index No.</Form.Label>
                <Form.Control
                  id="addvideo1"
                  className=" mb-3"
                  type="text"
                  placeholder="Inex Number"
                  value={videoIndex}
                  onChange={(e) => setVideoIndex(e.target.value)}
                />
              </Col>
            </Row>

            <Row>
              <Form.Label>Select Video</Form.Label>
              <Col md={10}>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="file"
                    id="addvideo1"
                    value={empty}
                    onChange={ChooseVideo}
                  />
                </Form.Group>
              </Col>
              <Col md={2}>
                <Button id="addvideo3" variant="success" onClick={UploadVideo}>
                  {videobtnLoader ? (
                    <Loader animation="border" variant="light" size="sm" />
                  ) : (
                    "Upload"
                  )}
                </Button>
              </Col>
            </Row>
            <Row>
              <Col>
                <ProgressBar now={percentage} label={`${percentage}%`} />
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Label>Enter Video Title</Form.Label>
                <Form.Control
                  id="addvideo1"
                  className="mb-3"
                  type="text"
                  placeholder="Video Title"
                  value={videoTitle}
                  onChange={(e) => setVideoTitle(e.target.value)}
                />
              </Col>
            </Row>
            <Row>
              <Form.Label>Upload Notes</Form.Label>
              <Col md={10}>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="file"
                    id="addvideo1"
                    value={empty2}
                    onChange={ChooseDocuement}
                  />
                </Form.Group>
              </Col>
              <Col md={2}>
                <Button
                  id="addvideo3"
                  variant="success"
                  onClick={UploadDocument}
                >
                  {notesbtnLoader ? (
                    <Loader animation="border" variant="light" size="sm" />
                  ) : (
                    "Upload"
                  )}
                </Button>
              </Col>
            </Row>
            {/* <Row>
              <Col>
                <Form.Label>Enter Video Description</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Desciption"
                  rows={3}
                  className="mb-3"
                  
                />
              </Col>
            </Row> */}
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Container>
            <Row>
              <Col></Col>
              <Col>
                <Button
                  onClick={AddVideoFunction}
                  variant="dark"
                  id="addvideo2"
                >
                  {addButtonLoader ? (
                    <Loader animation="border" variant="light" size="sm" />
                  ) : (
                    "Add"
                  )}
                </Button>
              </Col>
              <Col></Col>
            </Row>
          </Container>
        </Modal.Footer>
      </Modal>
    </>
  );
}
