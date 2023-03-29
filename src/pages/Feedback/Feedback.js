import React, { useEffect, useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import { apicaller } from "../../utils/api";
import Slidebar from "../Bar/Bar";
import NavBar from "../NavBar/NavBar";
import "./Feedback.css";
import _ from "lodash";
import Loader from "../../Component/Loader/Loader";

export default function Feedback() {
  const pageSize = 10;
  const [feedbackData, setFeedbackData] = useState([]);
  // for page count
  const [paginatedPost, setPaginatedPost] = useState();
  const [currentpage, setcurrentPage] = useState(1);
  const [load, setLoad] = useState(true);
  useEffect(() => {
    getFeedbackData();
  }, []);

  const getFeedbackData = () => {
    apicaller("get-queries", null, "get", null)
      .then((res) => {
        setFeedbackData(res.data.queries);
        setPaginatedPost(_(res.data.queries).slice(0).take(pageSize).value());
      })
      .catch((e) => {
        // console.log(e);
      })
      .finally(()=>{
        setLoad(false)
      });
  };
  const pageCount = feedbackData
    ? Math.ceil(feedbackData.length / pageSize)
    : 0;
  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);
  const pagination = (pageNo) => {
    setcurrentPage(pageNo);
    const startIndex = (pageNo - 1) * pageSize;
    const paginatedPost = _(feedbackData)
      .slice(startIndex)
      .take(pageSize)
      .value();
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
            <div id="fdbk4">
            <Container>
              <Row>
                <Col>
                  <NavBar />
                </Col>
              </Row>

              {/* Get feedback posted from userpanel(contact-us) */}

              <div id="fdbk3">
                {!paginatedPost ? (
                  "No data found"
                ) : (
                  <Table striped="columns" id="fdbk5">
                    <thead>
                      <tr id="fdbk2">
                        <th>Sl no</th>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Date & Time</th>
                        <th>Feedback</th>
                      </tr>
                    </thead>
                    <tbody>
                      {paginatedPost?.map((item, i) => (
                        <tr key={i} id="fdbk2">
                          <td>{currentpage * pageSize + i - 9}</td>
                          <td>
                            {item.firstname} {item.lastname}
                          </td>
                          <td>{item.email}</td>
                          <td>{item.phone_number}</td>
                          <td>
                            {" "}
                            {new Date(item.createdAt).toLocaleDateString()}{" "}
                            {new Date(item.createdAt).toLocaleTimeString()}
                          </td>
                          <td> {item.reason}</td>
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
              </div>        
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
