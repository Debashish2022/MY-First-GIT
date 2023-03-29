import React, { useState } from "react";
import { Accordion, Spinner, Table } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getUserToken, setSubsectionId } from "../../Redux/Slice/UserSlice";
import { apicaller } from "../../utils/api";
import EditCourseDetailModal from "../EditCourseDetailModal/EditCourseDetailModal";
import Tooltiip from "../Tooltiip/Tooltiip";
import "./AccordionCourseDetail.css";

export default function AccordionCourseDetail(props) {
  const [modalShow, setModalShow] = useState(false);
  // console.log("course details props iteemmm", props.item);
  const [subModule, setSubModule] = useState([]);
  const [spinner, setSpinner] = useState(false);

  const [editId, setEditId] = useState("");
  const [editTitle, setEditTitle] = useState("");
  const [editIndex, setEditIndex] = useState("");
  const [editDesc, setEditDesc] = useState("");
  const [editMaterial, setEditMaterial] = useState("");
  const [editVideo, setEditVideo] = useState("");

  const token = useSelector(getUserToken);
  const dispatch = useDispatch();

  const getSubModule = () => {
    setSpinner(true);
    apicaller(`course-module/${props.item._id}`, null, "get", token)
      .then((response) => {
        setSubModule(response.data);
        console.log("sub module data is : ", response.data);
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => setSpinner(false));
  };

  return (
    <>
      <Accordion defaultActiveKey="">
        <Accordion.Item eventKey="0" style={{ border: "none" }}>
          <Accordion.Header onClick={getSubModule}>
            {props.moduleName}
          </Accordion.Header>
          <Accordion.Body>
            <div id="acdd1">
              <Table>
                <tbody>
                  {subModule.map((item, i) => (
                    <tr key={i}>
                      {spinner ? (
                        <div>
                          <Spinner animation="border" variant="danger" />
                        </div>
                      ) : (
                        <>
                          <td>{item?.index}</td>
                          <td
                            style={{ cursor: "pointer" }}
                            // onClick={() => {
                            //   navigate("/coursedetails", {
                            //     state: { id: item._id },
                            //   });
                            // }}
                            onClick={() => {
                              console.log("onclick clicked", item._id);
                              dispatch(setSubsectionId(item));
                            }}
                          >
                            {item?.title}
                          </td>
                          {/* <td>
                            <BsFillEyeFill style={{ color: "#F05904" }} /> /{" "}
                            <BsFillEyeSlashFill style={{ color: "#F05904" }} />
                          </td> */}
                          <td>
                            <Tooltiip
                              message="Click to edit"
                              event={
                                <FaEdit
                                  style={{
                                    color: "#F05904",
                                    cursor: "pointer",
                                  }}
                                  onClick={() => {
                                    setModalShow(true);
                                    setEditId(item?._id);
                                    setEditTitle(item?.title);
                                    setEditIndex(item?.index);
                                    setEditDesc(item?.description);
                                    setEditMaterial(item?.document);
                                    setEditVideo(item?.video_path);
                                  }}
                                />
                              }
                            />
                          </td>
                          <EditCourseDetailModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                            id={editId}
                            title={editTitle}
                            index={editIndex}
                            description={editDesc}
                            material={editMaterial}
                            video={editVideo}
                          />
                          {/* <div>{props.subSecId}</div> */}
                        </>
                      )}
                    </tr>
                  ))}
                  {/* <tr>
                    <td>1.2</td>
                    <td>chapter-2</td>
                    <td><BsFillEyeFill style={{color:"#F05904"}}/> / <BsFillEyeSlashFill style={{color:"#F05904"}}/></td>
                    <td><FaEdit style={{color:"#F05904"}} onClick={() => setModalShow(true)}/></td>
                    <EditCourseDetailModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                      />
                  </tr> */}
                </tbody>
              </Table>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}
