import React, { useEffect, useMemo, useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Row,
  Spinner,
  Table,
} from "react-bootstrap";
import "./CourseDetails.css";
import { RiFileEditFill } from "react-icons/ri";
import Tooltiip from "../../components/Tooltiip/Tooltiip";
import AccordionCourseDetail from "../../components/AccordionCourseDetail/AccordionCourseDetail";
import { ImAttachment } from "react-icons/im";
import Header2 from "../../components/Header2/Header2";
import AddCourseDetailModal from "../../components/AddCourseDetailModal/AddCourseDetailModal";
import EditModuleModal from "../../components/EditModuleModal/EditModuleModal";
import { BiHide, BiShow } from "react-icons/bi";
import { MdAddBox } from "react-icons/md";
import { useLocation } from "react-router-dom";
import Utility from "../../utils/Utility";
import axios from "axios";
import { useSelector } from "react-redux";
import { getSubsectionId, getUserToken } from "../../Redux/Slice/UserSlice";
import { apicaller } from "../../utils/api";
import ReactPlayer from "react-player";

export default function CourseDetails() {
  const [modalShow, setModalShow] = useState(false);
  const [modalShow1, setModalShow1] = useState(false);

  const [index, setIndex] = useState([]);
  const [moduleName, setModuleName] = useState([]);
  const [spinner, setSpinner] = useState(false);
  const [id, setId] = useState("");
  const [courseId, setCourseId] = useState("");

  const [editId, setEditId] = useState("");
  const [editIndex, setEditIndex] = useState("");
  const [editTitle, setEditTitle] = useState("");

  const [module, setModule] = useState([]);

  const location = useLocation();
  const item = location?.state?.item;
  // console.log("item issssssss : ", item);
  const token = useSelector(getUserToken);

  // console.log("course details id is: ", item._id);
  // console.log("course detail visibility status is: ", item.visiblility);

  const [stat, setStat] = useState(item.visiblility);
  const [idd, setIdd] = useState(item._id);
  // console.log("firstfirst first", stat);
  const [spinnerV, setSpinnerV] = useState(false);

  const validation = () => {
    if (index.length === 0) {
      Utility.eToast("Index no required!");
      return false;
    } else if (moduleName.length === 0) {
      Utility.eToast("Module name required");
      return false;
    } else {
      return true;
    }
  };

  const addModule = () => {
    if (validation()) {
      setSpinner(true);
      let data = JSON.stringify({
        course_id: item?._id,
        title: moduleName,
        serial: index,
      });

      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "https://atharw.onrender.com/api/add-section",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios
        .request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          setIndex("");
          setModuleName("");
          Utility.sToast("Module added successfully");
        })
        .catch((error) => {
          console.log(error);
          Utility.eToast("Faided to add module!");
        })
        .finally(() => setSpinner(false));
    }
  };

  const getModule = () => {
    apicaller(`get-section/${item?._id}`, null, "get", null)
      .then((response) => {
        setModule(response.data);
        // console.log("section data is : ", response.data);
        // Utility.sToast("Course fetched successfully");
      })
      .catch((e) => {
        console.log(e);
        // Utility.eToast("Failed to load Course!");
      });
  };

  useEffect(() => {
    getModule();
  }, [spinner, modalShow1, modalShow]);

  const courseStatus = (value) => {
    setSpinnerV(true);
    let data = JSON.stringify({
      visiblility: value,
      _id: idd,
    });
    // console.log("apii data :", data);

    let config = {
      method: "put",
      url: "https://atharw.onrender.com/api/course",
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        getModule();
        console.log(JSON.stringify(response.data));
        Utility.sToast("Course Status Changed.")
      })
      .catch((error) => {
        console.log(error);
        Utility.eToast("Failed to change status!")
      }).finally(()=>setSpinnerV(false));
  };

  const subSectionId = useSelector(getSubsectionId);
  // console.log("subsection id ddd  is :", subSectionId);

  return (
    <>
      <Header2 />
      <Container fluid id="cd1">
        <Container>
          <Row>
            <Col>
              <div id="cd2">{item.name}</div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container>
        <Row style={{ marginTop: "2rem" }}>
          <Col xs={12} sm={12} md={2} lg={2} xl={2} xxl={2}>
            <Form.Control
              type="text"
              placeholder="enter index no"
              className="cd3"
              value={index}
              onChange={(e) => setIndex(e.target.value)}
            />
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
            <Form.Control
              type="text"
              placeholder="enter module name"
              className="cd3"
              value={moduleName}
              onChange={(e) => setModuleName(e.target.value)}
            />
          </Col>
          <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
            <Button id="cd4" onClick={addModule}>
              {spinner ? (
                <Spinner animation="border" variant="danger" />
              ) : (
                "Add"
              )}
            </Button>
          </Col>
        </Row>

        <Row>
          <Col
            xs={{ span: 12, order: 2 }}
            sm={{ span: 7, order: 2 }}
            md={{ span: 7, order: 1 }}
            lg={{ span: 7, order: 1 }}
            xl={{ span: 7, order: 1 }}
            xxl={{ span: 7, order: 1 }}
          >
            <div id="cd8">
              <Table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Module name</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {module.map((item, i) => (
                    <tr key={i}>
                      <td>{item?.serial}</td>
                      <td>
                        <AccordionCourseDetail
                          moduleName={item.title}
                          item={item}
                        />
                      </td>
                      <td>
                        <Tooltiip
                          message="Click to add"
                          event={
                            <MdAddBox
                              style={{
                                color: "#F05904",
                                marginRight: "1rem",
                                cursor: "pointer",
                              }}
                              onClick={() => {
                                setModalShow(true);
                                setId(item?._id);
                                setCourseId(item?.course_id);
                              }}
                            />
                          }
                        />
                        <AddCourseDetailModal
                          show={modalShow}
                          onHide={() => setModalShow(false)}
                          item={item}
                          id={id}
                          courseId={courseId}
                        />

                        <Tooltiip
                          message="Click to edit"
                          event={
                            <RiFileEditFill
                              style={{
                                color: "#F05904",
                                marginRight: "1rem",
                                cursor: "pointer",
                              }}
                              onClick={() => {
                                setModalShow1(true);
                                setEditId(item?._id);
                                setEditIndex(item?.serial);
                                setEditTitle(item?.title);
                              }}
                            />
                          }
                        />
                        <EditModuleModal
                          show={modalShow1}
                          onHide={() => setModalShow1(false)}
                          id={editId}
                          index={editIndex}
                          title={editTitle}
                        />
                      </td>
                    </tr>
                  ))}
                  {/* <tr>
                    <td>2</td>
                    <td>
                      <AccordionCourseDetail />
                    </td>
                    <td>
                      <Tooltiip
                        message="Click to add"
                        event={
                          <MdAddBox
                            style={{
                              color: "#F05904",
                              marginRight: "1rem",
                              cursor: "pointer",
                            }}
                            onClick={() => setModalShow(true)}
                          />
                        }
                      />
                      <AddCourseDetailModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                      />

                      <Tooltiip
                        message="Click to edit"
                        event={
                          <RiFileEditFill
                            style={{
                              color: "#F05904",
                              marginRight: "1rem",
                              cursor: "pointer",
                            }}
                            onClick={() => setModalShow1(true)}
                          />
                        }
                      />
                      <EditModuleModal
                        show={modalShow1}
                        onHide={() => setModalShow1(false)}
                      />
                    </td>
                  </tr> */}
                </tbody>
              </Table>
            </div>
            <Row>
              <Col id="cd10">
                <Button
                  id="cd9"
                  onClick={() => {
                    setStat(stat === "active" ? "inactive" : "active");
                    courseStatus(stat === "active" ? "inactive" : "active");
                  }}
                >
                  { spinnerV ? <Spinner animation="border" variant="warning" /> : (<>
                  {stat === "active" ? (
                    <>
                      unpublish course
                      <BiHide
                        style={{
                          color: "#F05904",
                          height: "1.2em",
                          width: "1.2em",
                        }}
                      />
                    </>
                  ) : (
                    <>
                      publish course{" "}
                      <BiShow
                        style={{
                          color: "#F05904",
                          height: "1.2em",
                          width: "1.2em",
                        }}
                      />{" "}
                    </>
                  )}
                  </>)}
                </Button>
              </Col>
            </Row>
          </Col>
          <Col
            xs={{ span: 12, order: 1 }}
            sm={{ span: 5, order: 1 }}
            md={{ span: 5, order: 2 }}
            lg={{ span: 5, order: 2 }}
            xl={{ span: 5, order: 2 }}
            xxl={{ span: 5, order: 2 }}
          >
            <Row style={{ marginTop: "2.5rem" }}>
              <Col id="cd5">{subSectionId.title}</Col>
            </Row>
            <Row>
              <Col id="cd6">
                {/* {subSectionId.video_path} */}
                <ReactPlayer
                  url={subSectionId.video_path}
                  width="100%"
                  height="17.5rem"
                  controls
                />
              </Col>
            </Row>
            <Row>
              <Col id="cd7">{subSectionId.description}</Col>
            </Row>
            <Row>
              <Col
                id="cd5"
                onClick={() =>
                  window.open(subSectionId.document, "_blank", "noreferrer")
                }
              >
                {/* <a href={subSectionId.document}> */}
                <ImAttachment /> Download material
                {/* </a> */}
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}
