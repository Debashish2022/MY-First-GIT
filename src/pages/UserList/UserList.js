import React, { useEffect, useState } from "react";
import { Container, Image, Table, Row, Col } from "react-bootstrap";
import "./UserList.css";
import Slidebar from "../Bar/Bar";
import NavBar from "../NavBar/NavBar";
import { apicaller } from "../../utils/api";
import _ from "lodash";
import Loader from "../../Component/Loader/Loader";

export default function UserList() {
  const pageSize = 10;
  const [userList, setUserList] = useState([]);
  //for page count
  const [paginatedPost, setPaginatedPost] = useState();
  const [currentpage, setcurrentPage] = useState(1);
  const [load, setLoad] = useState(true);
  
  useEffect(() => {
    getUserList();
  }, []);

  const getUserList = () => {
    apicaller("admin/user-list", null, "get", null)
      .then((res) => {
        setUserList(res.data);

        setPaginatedPost(_(res.data).slice(0).take(pageSize).value());
      })
      .catch((e) => {
        // console.log(e);
      })
      .finally(()=>{
        setLoad(false)
      });
  };
  const pageCount = userList ? Math.ceil(userList.length / pageSize) : 0;
  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);
  const pagination = (pageNo) => {
    setcurrentPage(pageNo);
    const startIndex = (pageNo - 1) * pageSize;
    const paginatedPost = _(userList).slice(startIndex).take(pageSize).value();
    setPaginatedPost(paginatedPost);
  };

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
            <div id="user_list7">
              <Container>
                <Row>
                  <Col>
                    <NavBar />
                  </Col>
                </Row>
              </Container>

              <Container>
                <Container fluid>
                  <Row id="user_list4">
                    <Col>
                      {!paginatedPost ? (
                        "No data found"
                      ) : (
                        <Table>
                          <thead>
                            <tr id="user_list1">
                              <th>Sl no</th>
                              <th>User</th>
                              <th>Phone</th>
                              <th>Email</th>
                              <th>Dob</th>
                              <th>gender</th>
                              <th>Registered On</th>
                              {/* <th>Revenue</th> */}
                              <th></th>
                              <th></th>
                              <th></th>
                            </tr>
                          </thead>

                          <tbody>
                            {paginatedPost.map((item, i) => (
                              <tr id="user_list_body" key={i}>
                                <td>
                                  <div style={{ paddingTop: "1rem" }}>
                                    {(currentpage * pageSize) +i-9 }
                                  </div>
                                </td>
                                <td>
                                  <div id="user_list2">
                                    <div>
                                      <div id="user_list_name">
                                        {item.first_name
                                          ? item.first_name +
                                            " " +
                                            item.last_name
                                          : "N/A"}
                                      </div>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <div
                                    id="user_list_number"
                                    style={{ paddingTop: "1rem" }}
                                  >
                                    {item.phone_number}
                                  </div>
                                </td>
                                <td id="user_list6">{item.email}</td>
                                <td id="user_list6">
                                  {new Date(item.dob).toLocaleDateString()}{" "}
                                </td>
                                <td id="user_list6">
                                  {item.gender ? item.gender : "N/A"}
                                </td>
                                <td id="user_list6">
                                  {new Date(
                                    item.createdAt
                                  ).toLocaleDateString()}{" "}
                                </td>
                                {/* <td id="user_list6">N.A</td> */}
                                {/* <td>
                                <IoTrashOutline id="user_list_icon1" />
                              </td> */}
                                <td></td>
                                <td></td>
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
                    </Col>
                  </Row>
                </Container>
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
