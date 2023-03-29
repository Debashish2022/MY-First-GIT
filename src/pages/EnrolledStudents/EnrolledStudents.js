import {
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import HeaderNav from "../../components/HeaderNav/HeaderNav";
import "./EnrolledStudents.css";

const columns = [
  { id: "sl", label: "#", minWidth: 100 },
  { id: "name", label: "Name", minWidth: 170 },
  { id: "email", label: "Email", minWidth: 170 },
  { id: "id", label: "Student id", minWidth: 170 },
  { id: "course", label: "Course name", minWidth: 170 },
  { id: "time", label: "Time&date", minWidth: 170 },
];

function createData(sl, name, email, id, course, time) {
  return { sl, name, email, id, course, time };
}

const rows = [
  createData(1, "Bhabani", "bhabanikhuntia@outlook.com", 3287263, "mca", "9/3/2023"),
  createData(2, "Bhabani", "bhabanikhuntia@outlook.com", 3287263, "mca", "9/3/2023"),

];

export default function EnrolledStudents() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <>
      <HeaderNav />

      <Container>
        <Row>
          <Col style={{ marginTop: "2rem" }}>
            <Paper sx={{ width: "100%", overflow: "hidden" }}>
              <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                    <TableRow>
                      {columns.map((column) => (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          style={{ minWidth: column.minWidth, fontSize:"1rem", fontWeight:"900" }}
                        >
                          {column.label}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((row) => {
                        return (
                          <TableRow
                            hover
                            role="checkbox"
                            tabIndex={-1}
                            key={row.code}
                          >
                            {columns.map((column) => {
                              const value = row[column.id];
                              return (
                                <TableCell key={column.id} align={column.align}>
                                  {column.format && typeof value === "number"
                                    ? column.format(value)
                                    : value}
                                </TableCell>
                              );
                            })}
                          </TableRow>
                        );
                      })}
                  </TableBody>
                </Table>
              </TableContainer>
              <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </Paper>
          </Col>
        </Row>
      </Container>
    </>
  );
}
