import React, { useEffect, useState } from "react";
import { Container, Col, Row, Table } from "react-bootstrap";
import { apicaller } from "../../utils/api";
import "./Bookingtablecomp.css";
import _ from "lodash";
const pageSize = 10;
export default function Bookingtablecomp() {
  const [recentBooking, setRecentBooking] = useState([]);
  //for page count
  const [paginatedPost, setPaginatedPost] = useState();
  const [currentpage, setcurrentPage] = useState(1);
  useEffect(() => {
    getRecentBooking();
  }, []);

  const getRecentBooking = () => {
    apicaller("admin/all-order", null, "get", null)
      .then((res) => {
        setRecentBooking(res.data);
        setPaginatedPost(_(res.data).slice(0).take(pageSize).value());
      })
      .catch((e) => {
        // console.log(e);
      });
  };
  const pageCount = recentBooking
    ? Math.ceil(recentBooking.length / pageSize)
    : 0;
  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);
  const pagination = (pageNo) => {
    setcurrentPage(pageNo);
    const startIndex = (pageNo - 1) * pageSize;
    const paginatedPost = _(recentBooking)
      .slice(startIndex)
      .take(pageSize)
      .value();
    setPaginatedPost(paginatedPost);
  };
  return (
    <>
      <Container id="tdbc4">
        <div id="tdbc1">Recent Bookings</div>
        {!paginatedPost ? (
          "No data found"
        ) : (
          <Table responsive="sm">
            <thead>
              <tr id="tdbc2">
                <th id="tdbc3">Sl no</th>
                <th id="tdbc3">Name</th>
                <th id="tdbc3">Pathology Name</th>
                <th id="tdbc3">Date & time</th>
                <th id="tdbc3">Phone no</th>
                <th id="tdbc3">Email</th>
                <th id="tdbc3">Total Amount</th>
              </tr>
            </thead>
            <tbody>
              {paginatedPost?.map((item, i) => (
                <tr key={i}>
                  <td id="tdbc5">{(currentpage * pageSize) + i - 9}</td>
                  <td id="tdbc5">
                    {item.user.first_name} {item.user.last_name}
                  </td>
                  <td id="tdbc5">{item?.pathology_id?.lab_name}</td>
                  <td id="tdbc5">
                    {new Date(item.user?.createdAt).toLocaleDateString()}{" "}
                    {new Date(item.user?.createdAt).toLocaleTimeString()}
                  </td>
                  <td id="tdbc5">{item.user?.phone_number}</td>
                  <td id="tdbc5">{item.user?.email}</td>
                  <td id="tdbc5">{item.total_amount}</td>
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
    </>
    // <div>
    //   <Container>
    //     <Row>
    //       <Col id="recentbookingcard1">
    //         <Row id="recentbookingcard3">
    //           <Col>Recent Bookings</Col>
    //         </Row>
    //         <Row id="recentbookingcard5">
    //             <Col md="1" xs="1">
    //               Sl No
    //             </Col>
    //             <Col>Name</Col>
    //             <Col>
    //               Date & time
    //             </Col>
    //             <Col>Phone no</Col>
    //             <Col>Email</Col>
    //             <Col>Current status</Col>
    //           </Row>
    //         {recentBooking.map((item, i) => (
    //           <Row key={i}>
    //             <Col id="recentbookingcard4" md="1" xs="1">
    //               {i + 1}
    //             </Col>
    //             <Col id="recentbookingcard2">
    //               {item.user.first_name} {item.user.last_name}
    //             </Col>
    //             <Col id="recentbookingcard2">
    //               {new Date(item.user.createdAt).toLocaleDateString()}{" "}
    //               {new Date(item.user.createdAt).toLocaleTimeString()}
    //             </Col>
    //             <Col id="recentbookingcard2">{item.user.phone_number}</Col>
    //             <Col id="recentbookingcard2">{item.user.email}</Col>
    //             <Col id="recentbookingcard2">Order Confirmed</Col>
    //           </Row>
    //         ))}
    //         {/* <Row >
    //                 <Col id="recentbookingcard4" xs="1" md="1">2</Col>
    //                 <Col id="recentbookingcard2">Long Life Lab</Col>
    //                 <Col id="recentbookingcard2">10:45:16 AM</Col>
    //                 <Col id="recentbookingcard2">9876543210</Col>
    //                 <Col id="recentbookingcard2">Patia, Bhubneswer</Col>
    //             </Row>
    //             <Row >
    //                 <Col id="recentbookingcard4" xs="1" md="1">3</Col>
    //                 <Col id="recentbookingcard2">Long Life Lab</Col>
    //                 <Col id="recentbookingcard2">10:45:16 AM</Col>
    //                 <Col id="recentbookingcard2">9876543210</Col>
    //                 <Col id="recentbookingcard2">Patia, Bhubneswer</Col>
    //             </Row> */}
    //       </Col>
    //     </Row>
    //   </Container>
    // </div>
  );
}
