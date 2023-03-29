import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Image,
  Row,
  Table,
} from "react-bootstrap";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import HeaderNav from "../../components/HeaderNav/HeaderNav";
import "./CourseDetails.css";
import thumbnail from "../../assets/Mern/mern.png";
import { AiOutlinePlus } from "react-icons/ai";
import AddVideoModal from "../../components/AddVideoModal/AddVideoModal";
import { MdModeEditOutline } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { apicaller } from "../../utils/api";
import { useSelector } from "react-redux";
import { getTeacherToken } from "../../redux/Slice/userSlice";
import Utility from "../../utils/Utility";
import Loader from "../../components/Loader/Loader";
import { MagnifyingGlass, MutatingDots } from "react-loader-spinner";
import BootstrapSwitchButton from "bootstrap-switch-button-react";

export default function CourseDetails() {
  useEffect(() => {
    GetAllSectionOfCourse();
    // video();
  }, []);

  const [videoModal, setVideoModal] = useState(false);
  const [edit, setEdit] = useState(false);
  const [showHide, setShowHide] = useState(false);
  const [btn, setBtn] = useState("Edit");
  const location = useLocation();
  const response = location.state.res;
  const Token = useSelector(getTeacherToken);
  const responseId = location.state.res._id;

  // console.log("response comming....444", response);

  const [courseTitle, setCourseTitle] = useState(response?.name);
  const [sectionName, setSectionName] = useState("");
  const [serialNo, setSerialNo] = useState("");
  const [sectionButtonLoader, setSectionButtonLoader] = useState(false);
  const [courseBySection, setCourseBySection] = useState([]);
  const [courseLoader, setCourseLoader] = useState(true);
  const [sectionIdSet, setSectionIdSet] = useState("");
  const [allVideo, setAllVideo] = useState("");
  const [courseIdSend, setCourseIdSend] = useState("");
  const [sectionIdSend, setSectionIdSend] = useState("");
  const [showasperid, setShowasperid] = useState();
  const [tableLoader, setTableLoader] = useState("");
  const [checked, setChecked] = useState(response.visiblility);
  const [videoPath, setVideoPath] = useState();
  const [sectionId, setSectionId] = useState('');

  console.log("button response,,,,$$$", checked);

  function validation() {
    if (serialNo.length === 0) {
      Utility.eToast("Please Enter a Serial Number");
      return false;
    } else if (sectionName.length === 0) {
      Utility.eToast("Please Enter a Section Name");
      return false;
    } else {
      return true;
    }
  }

  const AddSectionFunction = async () => {
    if (validation()) {
      setSectionButtonLoader(true);
      var data = {
        course_id: response._id,
        title: sectionName,
        serial: serialNo,
      };

      console.log("add section....$$$", data);
      await apicaller("add-section", data, "post", Token)
        .then((res) => {
          if (res.status === 201 || res.status === 200) {
            Utility.sToast("New Section Added Successfully");
            setSectionName("");
            setSerialNo("");
            GetAllSectionOfCourse();
          }
        })
        .catch(() => {
          Utility.eToast("Sorry Could Not Added");
        })
        .finally(() => {
          setSectionButtonLoader(false);
        });
    }
  };

  // console.log("course idd....$$$", response._id);

  const GetAllSectionOfCourse = async () => {
    await apicaller(`get-section/${responseId}`, null, "get", Token)
      .then((res) => {
        // console.log("section course...2224", res.data);
        setCourseBySection(res.data);
      })
      .catch(() => Utility.eToast("Sorry Network Error"))
      .finally(() => {
        setCourseLoader(false);
      });
  };

  const GetCourseModuleBySectionId = async (id) => {
    setTableLoader(id);
    await apicaller(`course-module/${id}`, null, "get", Token)
      .then((res) => {
        setShowasperid(id);
        setAllVideo(res.data);
        console.log("all video....$$$$", res.data);
      })
      .catch(() => {
        Utility.eToast("Sorry Network Error");
      })
      .finally(() => {
        setTableLoader("");
      });
  };

  const UpdateCourseVisibility = async (value) => {
    const data = {
      trending_status: value,
      _id: response._id,
    };
    console.log("data going", data);
    await apicaller("course", data, "put", Token)
      .then((res) => {
        if (res.status === 200 || res.status === 201) {
          Utility.sToast(
            `Course is  ${value === "active" ? "Visible" : "Hide"} For All User`
          );
        }
      })
      .catch(() => Utility.eToast("Sorry Could Not Update"));
  };

  console.log("video path", videoPath);

  function video(id) {
    setVideoPath("");
    setVideoPath(id);
  }

  function HideEye(video, id){

    const data ={
      "video_path":video,
	    "_id":id,
      "visiblility":"inactive"
    }
    console.log('icon data', data);
    apicaller("course-module", data, 'put', Token)
    .then((res)=>{
      if(res.status === 200 || res.status === 201){
        Utility.sToast("Video Will Hidden For All Users");
        GetCourseModuleBySectionId(sectionId);
      }
    }).catch(()=>{
      Utility.eToast("Sorry Could Not Update");
    });

  }
  function ShowEye(video, id){
    const data ={
      "video_path":video,
	    "_id":id,
      "visiblility":"active"
    }
    // console.log('icon data', data);

    apicaller("course-module", data, 'put', Token)
    .then((res)=>{
      if(res.status === 200 || res.status === 201){
        Utility.sToast("Video Will Shown For All Users");
        GetCourseModuleBySectionId(sectionId);
      }
    }).catch(()=>{
      Utility.eToast("Sorry Could Not Update");
    });

  }

  return (
    <>
      <HeaderNav />

      {courseLoader ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "80vh",
          }}
        >
          <MutatingDots
            height="100"
            width="100"
            color="#f05904"
            secondaryColor="#f05904"
            radius="12.5"
            ariaLabel="mutating-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      ) : (
        <Container>
          {/* <Row style={{ marginTop: "2rem" }}>
          <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} id="cd5">
            <div id="cd1">
              <Form.Control
                className="cd13"
                type="text"
                placeholder="Enter course title"
              />
            </div>
          </Col>
          <Col xs={12} sm={12} md={3} lg={3} xl={3} xxl={3} id="cd5">
            <div id="cd1">
              <Form.Control
                className="cd13"
                type="text"
                placeholder="Enter author name"
              />
            </div>
          </Col>
          <Col xs={12} sm={12} md={3} lg={3} xl={3} xxl={3} id="cd3">
            <div style={{ width: "100%" }}>
              <Button id="cd4">Update basics</Button>
            </div>
          </Col>
        </Row> */}
          <Row className="mb-3 mt-5">
            <Col md={12}>
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  defaultValue={courseTitle}
                  disabled={btn === "Edit" ? true : false}
                  id="cd23"
                />
              </Form.Group>
            </Col>
            {/* <Col md={2} xs={btn === "Edit" ? 6 : 12}>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                defaultValue="Dinesh Panda"
                placeholder="Author name"
                disabled={btn === "Edit" ? true : false}
                id="cd23"
              />
            </Form.Group>
          </Col>
          <Col md={2} xs={6}>
            <Button id="cd24" variant="dark" onClick={() => setBtn("Update")}>
              {btn === "Edit" ? "Edit Basics" : "Update Basics"}
            </Button>
          </Col>
          {btn === "Update" ? (
            <Col md={1} xs={6}>
              <Button id="cd25" variant="danger" onClick={() => setBtn("Edit")}>
                Cancel
              </Button>
            </Col>
          ) : null} */}
          </Row>
          <Row className="mt-4">
            <Col>
              <Row>
                <Form.Label>Add Section</Form.Label>
                <Col md={2} xs={8}>
                  <Form.Control
                    type="number"
                    placeholder="Enter Index No."
                    value={serialNo}
                    onChange={(e) => setSerialNo(e.target.value)}
                  />
                </Col>
                <Col md={7} xs={8}>
                  <Form.Control
                    type="text"
                    placeholder="Enter Section Name"
                    value={sectionName}
                    onChange={(e) => setSectionName(e.target.value)}
                  />
                </Col>
                <Col md={3} xs={4}>
                  <Button id="cd4" onClick={() => AddSectionFunction()}>
                    {sectionButtonLoader ? (
                      <Loader animation="border" variant="light" size="sm" />
                    ) : (
                      "Add"
                    )}{" "}
                  </Button>
                </Col>
              </Row>
            </Col>
            <Col md={3}>
              <Row>
                <Form.Label>Course Visibility</Form.Label>
                <Col md={12}>
                  <BootstrapSwitchButton
                    width={250}
                    checked={checked === "active" ? true : false}
                    onlabel="ON"
                    offlabel="OFF"
                    onstyle="success"
                    offstyle="danger"
                    onChange={() => {
                      setChecked(checked === "active" ? "inactive" : "active");
                      UpdateCourseVisibility(
                        checked === "active" ? "inactive" : "active"
                      );
                    }}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="mt-4 mb-4"></Row>
          {/* <Row className=" mb-4">
            <Col md={12}>
              <BootstrapSwitchButton
              style={{width:'20rem'}}
              width="null"
                checked={true}
                onlabel="ON"
                offlabel="OFF"
                onstyle="success" offstyle="danger"
              />
            </Col>
          </Row> */}
          {/* <Row style={{ marginTop: "4rem" }}>
          <Col xs={12} sm={12} md={1} lg={1} xl={1} xxl={1} id="cd5">
            <div id="cd1">
              <Form.Control
                className="cd13"
                type="text"
                placeholder="Index no"
              />
            </div>
          </Col>
          <Col xs={12} sm={12} md={3} lg={3} xl={3} xxl={3} id="cd5">
            <Form.Group>
              <Form.Label>Upload Video</Form.Label>
              <Form.Control type="file" size="sm" className="cd6" />
            </Form.Group>
          </Col>
          <Col xs={12} sm={12} md={3} lg={3} xl={3} xxl={3} id="cd5">
            <div id="cd1">
              <Form.Control
                className="cd13"
                type="text"
                placeholder="Enter video title"
              />
            </div>
          </Col>
          <Col xs={12} sm={12} md={3} lg={3} xl={3} xxl={3} id="cd5">
            <Form.Group>
              <Form.Label>Upload thumbnail</Form.Label>
              <Form.Control type="file" size="sm" className="cd6" />
            </Form.Group>
          </Col>
          <Col xs={12} sm={12} md={2} lg={2} xl={2} xxl={2} id="cd3">
            <div style={{ width: "100%" }}>
              <Button id="cd4">Add</Button>
            </div>
          </Col>
        </Row> */}

          <Row>
            <Col xs={8} sm={8} md={8} lg={8} xl={8} xxl={8}>
              <Row>
                <Col id="cd7">Course content</Col>
              </Row>
              <Row>
                <Col id="cd8">
                  <Table>
                    {/* <thead>
                    <tr id="cd14">
                      {edit ? (
                        <th>
                          <Form.Control
                            className="cd13"
                            type="text"
                            value="1"
                            id="cd21"
                          />
                        </th>
                      ) : (
                        <th>1</th>
                      )}
                      {edit ? (
                        <th>
                          <Form.Control
                            className="cd13"
                            type="text"
                            value="introduction edit"
                            id="cd20"
                          />
                        </th>
                      ) : (
                        <th>Introduction</th>
                      )}
                      <th></th>
                      <th>Action</th>
                      <th id="cd16">
                        <div id="cd15" onClick={() => setVideoModal(true)}>
                          <AiOutlinePlus />
                          Add Video
                        </div>
                      </th>
                      {edit ? (
                        <th
                          id="cd18"
                          onClick={() => {
                            setEdit(!edit);
                          }}
                        >
                          <div id="cd19">Save</div>
                        </th>
                      ) : (
                        <th id="cd18">
                          <MdModeEditOutline
                            onClick={() => {
                              setEdit(!edit);
                            }}
                            id="cd17"
                          />
                        </th>
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td></td>
                      <td>1</td>
                      <td>React Hooks Basics</td>
                      <td>
                        {showHide ? (
                          <AiOutlineEyeInvisible
                            style={{ color: "#F05904" }}
                            id="cd22"
                            onClick={() => setShowHide(!showHide)}
                          />
                        ) : (
                          <AiOutlineEye
                            style={{ color: "#F05904" }}
                            id="cd22"
                            onClick={() => setShowHide(!showHide)}
                          />
                        )}
                      </td> */}
                    {/* <td>30Min</td> */}
                    {/* <td></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>2</td>
                      <td>React Hooks Basics</td>
                      <td>
                        {showHide ? (
                          <AiOutlineEyeInvisible
                            style={{ color: "#F05904" }}
                            id="cd22"
                            onClick={() => setShowHide(!showHide)}
                          />
                        ) : (
                          <AiOutlineEye
                            style={{ color: "#F05904" }}
                            id="cd22"
                            onClick={() => setShowHide(!showHide)}
                          />
                        )}
                      </td> */}
                    {/* <td>30Min</td> */}
                    {/* <td></td>
                    </tr>
                  </tbody> */}
                    {courseBySection.length === 0 ? (
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          minHeight: "40vh",
                          fontWeight: "bold",
                        }}
                      >
                        No Section Added
                      </div>
                    ) : null}

                    {courseBySection?.map((item, i) => (
                      <>
                        <thead
                          key={i}
                          id="cd26"
                          onClick={() => {
                            GetCourseModuleBySectionId(item?._id);
                            setSectionId(item?._id);
                          }}
                        >
                          <tr id="cd14">
                            {edit ? (
                              <th>
                                <Form.Control
                                  className="cd13"
                                  type="text"
                                  value="1"
                                  id="cd21"
                                />
                              </th>
                            ) : (
                              <th>{item?.serial}</th>
                            )}

<th></th>
                            {edit ? (
                              <th>
                                <Form.Control
                                  className="cd13"
                                  type="text"
                                  value="introduction edit"
                                  id="cd20"
                                />
                              </th>
                            ) : (
                              <th>{item?.title}</th>
                            )}
                            <th></th>
                            <th></th>
                            {/* <th>Action</th> */}
                            <th id="cd16">
                              <div
                                id="cd15"
                                onClick={() => {
                                  setVideoModal(true);
                                  setSectionIdSend(item._id);
                                }}
                              >
                                <AiOutlinePlus />
                                Add Video
                              </div>
                            </th>
                            {edit ? (
                              <th
                                id="cd18"
                                onClick={() => {
                                  setEdit(!edit);
                                }}
                              >
                                <div id="cd19">Save</div>
                              </th>
                            ) : (
                              <th id="cd18">
                                <MdModeEditOutline
                                  onClick={() => {
                                    setEdit(!edit);
                                  }}
                                  id="cd17"
                                />
                              </th>
                            )}
                          </tr>
                        </thead>
                        
                        {tableLoader === item._id && <tbody>
                          {/* <div
                              style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                minHeight: "20vh",
                              }}
                            > */}
                            <td></td>
                            <td></td>
                            <td><div style={{display:'flex', justifyContent:'center'}}>
                              <MagnifyingGlass
                                visible={true}
                                height="50"
                                width="50"
                                ariaLabel="MagnifyingGlass-loading"
                                wrapperStyle={{}}
                                wrapperClass="MagnifyingGlass-wrapper"
                                glassColor="#c0efff"
                                color="#f05904"
                              /></div>
                              </td>

                            {/* </div> */}
                            </tbody>}
                        
                        {showasperid === item._id ? (
                          <tbody>
                         {tableLoader === "" ? <>   {allVideo?.map((item) => (
                              <>
                                <tr id="cd26">
                                  <td></td>
                                  <td onClick={() => video(item?.video_path)}>
                                    {item?.index}
                                  </td>
                                  <td onClick={() => video(item?.video_path)}>
                                    {item?.title}
                                  </td>
                                  <td
                                    onClick={() => video(item?.video_path)}
                                  ></td>
                                   <td
                                    onClick={() => video(item?.video_path)}
                                  ></td>
                                   <td
                                    onClick={() => video(item?.video_path)}
                                  ></td>
                                  <td>
                                    <div style={{display:'flex', justifyContent:'center'}}>
                                    {item?.visiblility === 'inactive' ? (
                                      <AiOutlineEyeInvisible
                                        style={{ color: "#F05904" }}
                                        id="cd22"
                                        onClick={() =>{ setShowHide(!showHide); ShowEye(item?.video_path, item?._id)}}
                                      />
                                    ) : (
                                      <AiOutlineEye
                                        style={{ color: "#F05904" }}
                                        id="cd22"
                                        onClick={() =>{ setShowHide(!showHide);  HideEye(item?.video_path, item?._id) }}
                                      />
                                    )}</div>
                                  </td>
                                  {/* <td>30Min</td> */}
                                 
                                </tr>
                              </>
                            ))} </>: null}
                          </tbody>
                        ) : null}
                      </>
                    ))}
                  </Table>
                  <AddVideoModal
                    show={videoModal}
                    onHide={() => {
                      setVideoModal(false);
                    }}
                    sectionid={sectionIdSend}
                    courseid={responseId}
                    empty=""
                  />
                </Col>
              </Row>
            </Col>
            <Col xs={4} sm={4} md={4} lg={4} xl={4} xxl={4} id="cd9">
              {/* <div>
               
               {videoPath  == "" &&<>  <video width="400" controls controlsList="nodownload"><source   /></video></>}
              </div> */}
              <div>
                {/* <Image src={thumbnail} alt="thumbnail" id="cd10" /> */}
                {videoPath ? (
                  <>
                    {" "}
                    <video
                      width="400"
                      controls
                      autoplay
                      controlsList="nodownload"
                    >
                      <source src={videoPath != "" ? videoPath : null} />
                    </video>
                  </>
                ) : (
                  <video width="400" controls controlsList="nodownload">
                    <source src={videoPath} />
                  </video>
                )}
              </div>
              <div id="cd11">Introduction</div>
              <div>
                <Button id="cd12">Update</Button>
              </div>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
}
