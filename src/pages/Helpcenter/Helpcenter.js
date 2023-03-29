// import {
//   Button,
//   Card,
//   FormControl,
//   Grid,
//   NativeSelect,
//   TextField,
// } from "@mui/material";
// import React from "react";
// import "./Helpcenter.css";
// export default function Helpcenter() {
//   return (
//     <>
//       <div id="help3">
//         <Grid sm={12} lg={12} xs={12} md={12} id="help9">
//           Help Center
//         </Grid>
//         <Card id="comp1">
//           <Grid id="help1" sm={12} lg={12} xs={12} md={12}>
//             Add Question
//           </Grid>
//           <Grid container spacing={2} id="help2">
//             <Grid id="help2">
//               <FormControl id="help2">
//                 <NativeSelect
//                   xs={12}
//                   sm={12}
//                   lg={4}
//                   md={12}
//                   defaultValue={30}
//                   inputProps={{
//                     name: "age",
//                     id: "uncontrolled-native",
//                   }}
//                 >
//                   <option value={10}>Transaction Related</option>
//                   <option value={20}>Getting started</option>
//                   <option value={30}>Other topics</option>
//                 </NativeSelect>
//               </FormControl>
//             </Grid>
//             <Grid id="help4" item>
//               <TextField
//                 fullWidth
//                 id="standard-basic"
//                 label="Add a Topic"
//                 variant="standard"
//               />
//             </Grid>
//             <Grid id="help4" item>
//               <TextField
//                 fullWidth
//                 id="standard-basic"
//                 label="Write Your Questions"
//                 variant="standard"
//               />
//             </Grid>
//           </Grid>
//           <Grid container id="cont">
//             <Grid id="help4" item md={12} lg={12} sm={12} xs={12}>
//               <TextField
//                 className="text"
//                 fullWidth
//                 id="standard-basic"
//                 label="Write Your Answer"
//                 variant="standard"
//               />
//             </Grid>
//           </Grid>
//           <Button variant="contained" id="helpbtn">
//             Add
//           </Button>
//         </Card>
//         <Card id="comp2">
//           <Grid id="help6" sm={12} lg={12} xs={12} md={12}>
//             1.Having an issue in Payment ?
//             <Button variant="text" id="helpbtn2">
//               Delete
//             </Button>
//           </Grid>
//           <Grid id="help7" sm={12} lg={12} xs={12} md={12}>
//             Have question about your prepaid mobile recharge on phonepe so you
//             have to go to recharge section,then you select prepaid service,then
//             enter amount and recharge.
//           </Grid>
//           <Grid id="help8" sm={12} lg={12} xs={12} md={12}>
//             2.Having an issue in Payment ?
//             <Button variant="text" id="helpbtn2">
//               Delete
//             </Button>
//           </Grid>
//           <Grid id="help7" sm={12} lg={12} xs={12} md={12}>
//             Have question about your prepaid mobile recharge on phonepe so you
//             have to go to recharge section,then you select prepaid service,then
//             enter amount and recharge.
//           </Grid>
//           <Grid id="help8" sm={12} lg={12} xs={12} md={12}>
//             3.Having an issue in Payment ?
//             <Button variant="text" id="helpbtn2">
//               Delete
//             </Button>
//           </Grid>
//           <Grid id="help7" sm={12} lg={12} xs={12} md={12}>
//             Have question about your prepaid mobile recharge on phonepe so you
//             have to go to recharge section,then you select prepaid service,then
//             enter amount and recharge.
//           </Grid>
//         </Card>
//       </div>
//     </>
//   );
// }


import {
  Button,
  Card,
  FormControl,
  Grid,
  NativeSelect,
  TextField,
} from "@mui/material";
import React from "react";
import "./Helpcenter.css";
export default function Helpcenter() {
  return (
    <>
      <div id="grid3">
        <Grid sm={12} lg={12} xs={12} md={12} id="grid9">
          Help Center
        </Grid>
        <Card id="card1">
          <Grid id="grid1" sm={12} lg={12} xs={12} md={12}>
            Add Question
          </Grid>
          <Grid container spacing={2} id="cont2">
            <Grid id="grid2">
              <FormControl id="grid2">
                <NativeSelect
                  xs={12}
                  sm={12}
                  lg={4}
                  md={12}
                  defaultValue={30}
                  inputProps={{
                    name: "age",
                    id: "uncontrolled-native",
                  }}
                >
                  <option value={10}>Transaction Related</option>
                  <option value={20}>Getting started</option>
                  <option value={30}>Other topics</option>
                </NativeSelect>
              </FormControl>
            </Grid>
            <Grid id="grid4" item>
              <TextField
                fullWidth
                id="standard-basic"
                label="Add a Topic"
                variant="standard"
              />
            </Grid>
            <Grid id="grid4" item>
              <TextField
                fullWidth
                id="standard-basic"
                label="Write Your Questions"
                variant="standard"
              />
            </Grid>
          </Grid>
          <Grid container id="cont">
            <Grid id="grid4" item md={12} lg={12} sm={12} xs={12}>
              <TextField
                className="text"
                fullWidth
                id="standard-basic"
                label="Write Your Answer"
                variant="standard"
              />
            </Grid>
          </Grid>
          <Button variant="contained" id="mybtn">
            Add
          </Button>
        </Card>
        <Card id="card2">
          <Grid id="grid6" sm={12} lg={12} xs={12} md={12}>
            1.Having an issue in Payment ?
            <Button variant="text" id="btn2">
              Delete
            </Button>
          </Grid>
          <Grid id="grid7" sm={12} lg={12} xs={12} md={12}>
            Have question about your prepaid mobile recharge on phonepe so you
            have to go to recharge section,then you select prepaid service,then
            enter amount and recharge.
          </Grid>
          <Grid id="grid8" sm={12} lg={12} xs={12} md={12}>
            2.Having an issue in Payment ?
            <Button variant="text" id="btn2">
              Delete
            </Button>
          </Grid>
          <Grid id="grid7" sm={12} lg={12} xs={12} md={12}>
            Have question about your prepaid mobile recharge on phonepe so you
            have to go to recharge section,then you select prepaid service,then
            enter amount and recharge.
          </Grid>
          <Grid id="grid8" sm={12} lg={12} xs={12} md={12}>
            3.Having an issue in Payment ?
            <Button variant="text" id="btn2">
              Delete
            </Button>
          </Grid>
          <Grid id="grid7" sm={12} lg={12} xs={12} md={12}>
            Have question about your prepaid mobile recharge on phonepe so you
            have to go to recharge section,then you select prepaid service,then
            enter amount and recharge.
          </Grid>
        </Card>
      </div>
    </>
  );
}