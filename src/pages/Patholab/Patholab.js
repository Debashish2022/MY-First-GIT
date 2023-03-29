import React, { useEffect, useState } from "react";
import {
  Col,
  Container,
  Form,
  Image,
  InputGroup,
  Row,
  Table,
} from "react-bootstrap";
import "./Patholab.css";
import { AiFillStar } from "react-icons/ai";
import { TbEdit } from "react-icons/tb";
import { RiDeleteBin6Line } from "react-icons/ri";
import sag from "../../asset/sagarika.png";
import NavBar2 from "../NavBar2/NavBar2";
import Button from "react-bootstrap/Button";
import AddPatholabModal from "../../Component/AddPatholabModal/AddPatholabModal";
import { Link, useNavigate } from "react-router-dom";
import Slidebar from "../Bar/Bar";
import PatholabDetail from "../PatholabDetail/PatholabDetail";
import NavBar from "../NavBar/NavBar";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { apicaller } from "../../utils/api";
import { TiEdit } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import { FaWindowRestore } from "react-icons/fa";
import EditPatholabDetailsModal from "../../Component/EditPatholabDetailsModal/EditPatholabDetailsModal";
import { useSelector } from "react-redux";
import axios from "axios";
import _ from "lodash";
import { Icon } from "react-icons-kit";
import { search } from "react-icons-kit/feather/search";
import Loader from "../../Component/Loader/Loader";
import { toast } from "react-toastify";

export default function PatholabList() {
  // const [modalShow, setModalShow] = useState(false);
  const [approvedPatholab, setApprovedPatholab] = useState([]);
  //for page count
  const [paginatedPost, setPaginatedPost] = useState();
  const [currentpage, setcurrentPage] = useState(1);
  const [showEditModal, setShowEditModal] = useState(false);
  const [filter, setFilter] = useState([]);
  const [filterVal, setFilterVal] = useState();
  const [searchFilter,setSearchFilter] = useState();
  // const [searchZero,setSearchZero] = useS
  const navigate = useNavigate();
  const pageSize = 10;
  const [load, setLoad] = useState(true);

  const eToast = (msg) => {
    toast.error(msg, {
      autoClose: 3000,
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
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      position: "top-center",
    });
  };



  const userToken = useSelector((state) => state.auth.token);

  useEffect(() => {
    getApprovedPatholab();
  }, []);

  const getApprovedPatholab = () => {
    apicaller("pathology-by-status?status=approved", null, "get", null)
      .then((res) => {
        setApprovedPatholab(res.data);
        setPaginatedPost(_(res.data).slice(0).take(pageSize).value());
        setSearchFilter(_(res.data).slice(0).take(pageSize).value());
        setFilter(res.data);

      })
      .catch((e) => {
        // console.log(e);
      });

    apicaller("pathology-by-status?status=pending", null, "get", null)
      .then((res) => {
        // console.log("patholabs are ", res.data);
      })
      .catch((e) => {
        // console.log(e);
      })
      .finally(()=>{
        setLoad(false);
      })
  };




  const resetPassword = (id) => {
    if (window.confirm("Are You sure want to reset password")) {
      const data = { email: id };
      apicaller("forgot-password", data, "post", null).then((res) =>
        sToast(`Password Resend to ${id} `)
      );
    }
  };

  

  const deleteFun = (id, labname) => {
    // console.log("delete this pathology id", id);
    if (window.confirm(`Do You Sure Want To Delete ${labname} Patholab?`)) {
      var config = {
        method: "delete",
        url: `https://api.novaprolabs.com/api/pathology/${id}`,
        headers: {},
      };

      axios(config)
        .then(function (response) {
          sToast("Deleted successfully");
          getApprovedPatholab();
          // console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          // console.log(error);
        });
    }
  };
  const pageCount = approvedPatholab
    ? Math.ceil(approvedPatholab.length / pageSize)
    : 0;
  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);
  const pagination = (pageNo) => {
    setcurrentPage(pageNo);
    const startIndex = (pageNo - 1) * pageSize;
    const paginatedPost = _(approvedPatholab)
      .slice(startIndex)
      .take(pageSize)
      .value();
    setPaginatedPost(paginatedPost);
  };

  // searchbar function start
  const handleFilter = (e) => {
    setFilterVal(e.target.value);
    if (e.target.value === " ") {
      setPaginatedPost(filter);
    } else {
      const filterResult = filter.filter((item) =>
        item?.lab_name.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setPaginatedPost(filterResult);
    }
  };
  // searchbar function end

  return (
    <>
      <Container fluid>
        <Row>
          <Col md="2" xs="3">
            <Slidebar />
          </Col>
          <Col
            md="10"
            xs="9"
            style={{ backgroundColor: "aliceblue", paddingTop: "2rem" }}
          >
            {load ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight:"80vh",
            }}
          >
            {" "}
            <Loader animation="border" size="md" variant="dark" />
          </div>
        ) : (
              <>
            <div id="patholab1">
              {/* <Container>
                <Row>
                  <Col>
                    <NavBar2 />{" "}
                  </Col>
                </Row>
              </Container> */}
              <Container>
                <Row>
                  <Col>
                    <NavBar />
                  </Col>
                </Row>
              </Container>

              <Container fluid id="mainBody">
                <Row id="patholabsearch1">
                  <Col xs={0} md={8} lg={8} sm={0}></Col>
                  <Col md={4} lg={4} xs={12} sm={12} id="patholabsearch6">
                    <Form className="d-flex">
                      <InputGroup id="patholabsearch3">
                        <Form.Control
                          id="patholabsearch5"
                          type="search"
                          placeholder="Search for a patholab"
                          className="me-2"
                          value={filterVal}
                          onChange={(e) => handleFilter(e)}
                        />
                        <span>
                          <Icon icon={search} id="patholabsearch4" />
                        </span>
                      </InputGroup>
                    </Form>
                  </Col>
                </Row>

                <Row className="d-flex align-items-center mb-4 ">
                  <Col
                    md={1}
                    xs={3}
                    className="d-flex justify-content-center"
                    style={{ padding: "0px" }}
                  >
                    {/* <Row id="howManyUsers">274 Users</Row> */}
                  </Col>
                  <Col style={{ padding: "0px" }}></Col>
                  <Col md={1} xs={3} style={{ padding: "0px" }}></Col>
                </Row>

                <Row id="tableMainRow">
                  {paginatedPost?.length === 0 ? (
                    <div style={{fontWeight:'bold',textAlign:'center',marginBottom:'5rem',marginTop:'5rem'}}>No data found</div>
                  ) : (
                    <Table style={{ padding: "1rem" }}>
                      <thead>
                        <tr id="tableHeader">
                          <th>Sl no</th>
                          <th>Pathology Lab</th>
                          <th>User Name</th>
                          <th>email</th>
                          <th>Address</th>
                          <th>Registered On</th>
                          <th>avg Ratings</th>
                          <th> </th>
                          <th> </th>
                          <th> </th>
                          <th> </th>
                        </tr>
                      </thead>
                      <tbody>
                        {paginatedPost?.map((item, i) => (
                          <tr id="tableDatas" key={i}>
                            <td id="tDatas">
                              {" "}
                              {currentpage * pageSize + i - 9}
                            </td>
                            <td id="tDatas1">
                              <div id="nameWithPhoto">
                                <div></div>
                                <div>
                                  <div id="pathologyNameTxt">
                                    {item?.lab_name}
                                  </div>
                                  <div id="phnNumbTxt">
                                    {item?.phone_number}
                                  </div>
                                </div>
                              </div>
                            </td>

                            <td id="tDatas">{item?.full_name}</td>
                            <td id="tDatas">{item?.email}</td>
                            <td id="tDatas">
                              <div>
                                {item?.address ? item?.address : "N / A"}
                              </div>
                            </td>

                            <td id="tDatas">
                              {new Date(item.createdAt).toLocaleDateString()}
                            </td>
                            <td id="tDatas">
                              <div style={{ flexDirection: "row" }}>
                                {item?.rating_avg}
                              </div>
                            </td>
                            <td id="tDatas">
                              <div style={{ flexDirection: "row" }}>
                                <Button
                                  id="resetPasswordBtn"
                                  onClick={() => resetPassword(item.email)}
                                >
                                  Reset Password
                                </Button>

                                <TiEdit
                                  id="editIcon"
                                  onClick={() => {
                                    navigate("/editpatholabdetails", {
                                      state: { item: item },
                                    });
                                  }}
                                />
                                <RiDeleteBin6Line
                                  id="deleteIcon"
                                  onClick={() => {
                                    deleteFun(item?._id, item?.lab_name);
                                  }}
                                />
                              </div>
                            </td>
                            <td id="tDatas"> </td>
                            <td id="tDatas"> </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  )}
                  <nav className="d-flex justify-content-center">
                    <ul className="pagination">
                      {pages?.map((page) => (
                        <li
                          className={
                            page === currentpage
                              ? "page-item active"
                              : "page-item"
                          }
                        >
                          <p
                            className="page-link"
                            onClick={() => pagination(page)}
                          >
                            {page}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </Row>
              </Container>
            </div>
            </>
        )}
          </Col>
        </Row>
      </Container>
    </>
  );
}
