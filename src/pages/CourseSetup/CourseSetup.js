import React from "react";
import "./CourseSetup.css";
import { Container, Row, Col } from "react-bootstrap";
import { TextField } from "@mui/material";
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import coursethumb from '../../assets/Coursesetup/Coursethumb.png'
import UploadIcon from '@mui/icons-material/Upload';
import HeaderNav from "../../components/HeaderNav/HeaderNav";

function CourseSetup() {
  return (
    <>
    <HeaderNav />
      <Container>
        <Row md={1}></Row>
        <Row md={10} id="coursesetup1">
          <Row > <Col id="coursesetup2">Basic Setup</Col> </Row>

          <Row>
              <Col md="8" lg="8" xs="12">
              <TextField
                id="standard-basic"
                label="course name"
                variant="standard"
                fullWidth
              />
               </Col>
             <Col md="4" lg="4" xs="12">
              <TextField
                id="standard-basic"
                label="Author name"
                variant="standard"
                fullWidth
              />
               </Col>
          </Row>
          <Row>
              <Col md="12" lg="12" xs="12">
              <TextField
                id="standard-basic"
                label="Descriptions"
                variant="standard"
                multiline
                maxRows={6}
                fullWidth
              />
               </Col>
          
          </Row>
          <Row> <Col><Button variant="contained" id="coursesetup3">Save</Button> </Col> </Row>
        </Row>

{/* container 2  */}


<Row md={10} id="coursesetup1">
          <Row > <Col id="coursesetup2">Video Setup</Col> </Row>

          <Row>
              <Col md="1" lg="1" xs="12">
              <TextField
                id="standard-basic"
                label="No."
                variant="standard"
                fullWidth
              />
               </Col>

               <Col md="3" lg="3" xs="12">

               <Button 
               id="coursesetup3"
  variant="contained"
  component="label"
>
  Upload  Video
  <input
    type="file"
    hidden
  />
</Button>
               </Col>

               <Col md="4" lg="4" xs="12">

<Button 
id="coursesetup4"
variant="contained"
component="label"
>
<UploadIcon />
Uplaod thumbnail

<input
type="file"
hidden
/>
</Button>
</Col>


<Col md="4" lg="4" xs="12">

<Button 
id="coursesetup4"
variant="contained"
component="label"
>
  <UploadIcon/>
Upload Attachments
<input
type="file"
hidden
/>
</Button>
</Col>
             
          </Row>
          <Row>
              <Col md="12" lg="12" xs="12">
              <TextField
                id="standard-basic"
                label="Write Video Title"
                variant="standard"
                multiline
                maxRows={6}
                fullWidth
              />
               </Col>
          
          </Row>
          <Row> <Col><Button variant="contained" id="coursesetup3">Save</Button> </Col> </Row>
        </Row>


        {/* 3rd container  */}

        <Row md={10} id="coursesetup1">
          <Row > <Col id="coursesetup2">Preview</Col> </Row>

        
          <TableContainer >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        
        <TableBody>
         
            <TableRow
              
           
            >
              <TableCell component="th" scope="row">
               01
              </TableCell>
              <TableCell align="right">MERN Stack Course 2023 - MongoDB, Express,
React and NodeJS</TableCell>
              <TableCell align="right"> <img src={coursethumb}/> </TableCell>
              <TableCell align="right" id="coursesetup5">Chapterone.pdf</TableCell>
              
            </TableRow>

            <TableRow
              
           
              >
                <TableCell component="th" scope="row">
                 01
                </TableCell>
                <TableCell align="right">MERN Stack Course 2023 - MongoDB, Express,
  React and NodeJS</TableCell>
                <TableCell align="right"> <img src={coursethumb}/> </TableCell>
                <TableCell align="right" id="coursesetup5">Chapterone.pdf</TableCell>
                
              </TableRow>

              <TableRow
              
           
              >
                <TableCell component="th" scope="row">
                 01
                </TableCell>
                <TableCell align="right">MERN Stack Course 2023 - MongoDB, Express,
  React and NodeJS</TableCell>
                <TableCell align="right"> <img src={coursethumb}/> </TableCell>
                <TableCell align="right" id="coursesetup5">Chapterone.pdf</TableCell>
                
              </TableRow>

              <TableRow
              
           
              >
                <TableCell component="th" scope="row">
                 01
                </TableCell>
                <TableCell align="right">MERN Stack Course 2023 - MongoDB, Express,
  React and NodeJS</TableCell>
                <TableCell align="right" > <img src={coursethumb}/> </TableCell>
                <TableCell align="right" id="coursesetup5" >Chapterone.pdf</TableCell>
                
              </TableRow>
        
        </TableBody>
      </Table>
    </TableContainer>


          <Row> <Col><Button variant="contained" id="coursesetup3">Save</Button> </Col> </Row>
        </Row>



        <Row md={1}></Row>
      </Container>
    </>
  );
}

export default CourseSetup;
