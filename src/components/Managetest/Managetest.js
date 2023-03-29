import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import Header from "../../components/Header/Header";
import "./Managetest.css";
import { TbEdit } from "react-icons/tb";
import ManagetestEditModal from "../ManagetestEditModal/ManagetestEditModal";
import { apicaller } from "../../utils/api";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import _ from "lodash";
import {
  Arrow90degRight,
  ArrowBarRight,
  ArrowRight,
} from "react-bootstrap-icons";
export default function Managetest() {
  const pageSize = 10;

  const navigate = useNavigate();
  const [editt, setEditt] = useState(false);
  const [mtest, setMtest] = useState([]);
  //for page count
  const [paginatedPost, setPaginatedPost] = useState();
  const [currentpage, setcurrentPage] = useState(1);
  const [count, setCount] = useState(1);
  const auth = useSelector((state) => state.auth);

  const localStorageItem =
    localStorage.getItem("user") && JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    getMtest();
  }, []);

  // const myCount = () => {
  //   setCount(count++);
  // };
  const getMtest = () => {
    apicaller(`all-reports/${localStorageItem?.pathology_id?._id}`, null, "get", null)
      .then((res) => {
        // console.log(res.data);
        setMtest(res.data);
        setPaginatedPost(_(res.data).slice(0).take(pageSize).value());
      })
      .catch((e) => {
        // console.log(e);
      });
  };
  const pageCount = mtest ? Math.ceil(mtest.length / pageSize) : 0;
  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);
  //pagination function start here
  const pagination = (pageNo) => {
    setcurrentPage(pageNo);
    const startIndex = (pageNo - 1) * pageSize;
    const paginatedPost = _(mtest).slice(startIndex).take(pageSize).value();
    setPaginatedPost(paginatedPost);
  };
  return (
    <>
      {/* <Header /> */}
      <Container style={{ marginTop: "1rem", marginBottom: "1rem" }}>
        <Row>
          <Col id="mt1">
            <div id="mt2">Recent Tests Done</div>
          </Col>
        </Row>

        <Container id="managetest_tablemain">
          {!paginatedPost ? (
            "No data found"
          ) : (
            <Table
              striped
              bordered
              hover
              style={{ marginTop: "2rem", border: "0px" }}
            >
              <thead id="managetest_thead">
                <tr style={{ border: "none" }}>
                  <th style={{ border: "none" }}>Sl No</th>
                  <th>Name</th>
                  <th>Company name</th>
                  <th>Booking For</th>
                  <th>User type</th>
                  <th>Test type</th>
                  <th>Date</th>
                  <th>Timing</th>
                  <th>Total Amount</th>
                  <th>Current Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {paginatedPost.map((item, i) => (
                  <tr key={i}>
                    <td>{(currentpage * pageSize) +i-9 }</td>
                    <td>{item?.user?.first_name}</td>
                    <td>
                      {item?.user?.organization_name
                        ? item?.user?.organization_name
                        : "N / A"}
                    </td>
                    <td>
                      {item?.booking_for_other
                        ? item?.booking_for_other?.employe_user_name
                        : "Self"}
                    </td>

                    <td>{item?.user?.user_type}</td>
                    <td>{item.lab_test_id?.test_name}</td>

                    <td>{new Date(item.createdAt).toLocaleDateString()}</td>
                    <td>
                      {new Date(item.user.createdAt).toLocaleTimeString()}
                    </td>
                    <td>{item?.order_id?.total_amount}</td>
                    <td id="managetest_send">{item?.status}</td>
                    <td
                      id="managetest_sendd"
                      onClick={() => {
                        navigate("/testedit", { state: { item: item } });
                      }}
                    >
                      {" "}
                      {/* <Link to="/testedit" id="mt5"> */}
                      View Details <ArrowRight size={25} />
                      {/* </Link> */}
                    </td>
                    {/* <td id="managetest_sendd" onClick={() => setEditt(true)}> Edit <TbEdit /></td> */}
                  </tr>
                ))}
                <ManagetestEditModal
                  show={editt}
                  onHide={() => setEditt(false)}
                />
              </tbody>
            </Table>
          )}
          <nav className="d-flex justify-content-center">
            <ul className="pagination">
              {pages.map((page) => (
                <li
                  className={
                    page === currentpage ? "page-item active" : "page-item"
                  }
                >
                  <p className="page-link" onClick={() => pagination(page)}>
                    {page}
                  </p>
                </li>
              ))}
            </ul>
          </nav>
        </Container>
      </Container>
    </>
  );
}
