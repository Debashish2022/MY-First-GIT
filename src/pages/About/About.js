import { Button, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./About.css";

function About() {
  return (
    <>
    <div id="about5">About us</div>
      <Box>
        <Typography paragraph>
          <Grid
            container
           rowSpacing={4}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item md={12} lg={12} xs={12}>
              <div id="about1">
                <Grid container spacing={2}>
                  <Grid item md={6} lg={6} xs={12}>
                    <TextField
                      id="filled-multiline-static"
                      label="Our Story"
                      multiline
                      fullWidth
                      
                      defaultValue="The AwiBrand is a privately run consortium of strategic partners in the fintech, financial payment solutions, and marketing space. We will broaden the opportunity for financial freedom within the Caribbean, for the established and underbanked communities island wide, with a focus on providing a decentralized peer to peer exchange that allows loyal AwiPay Members to not only tap into some of the most advanced technologies but also tap into economic growth through the e-commerce services we offer."
                      variant="filled"
                    />
                     <Button  fullWidth id="about2" variant="contained">UPDATE</Button>
                  </Grid>
                  <Grid item md={6} lg={6} xs={12}>
                    <TextField
                      id="filled-multiline-static"
                      label="Our Mission"
                      multiline
                      fullWidth
                      
                      defaultValue="The AwiBrand is a privately run consortium of strategic partners in the fintech, financial payment solutions, and marketing space. We will broaden the opportunity for financial freedom within the Caribbean, for the established and underbanked communities island wide, with a focus on providing a decentralized peer to peer exchange that allows loyal AwiPay Members to not only tap into some of the most advanced technologies but also tap into economic growth through the e-commerce services we offer."
                      variant="filled"
                    />
                    <Button  fullWidth id="about2" variant="contained">UPDATE</Button>
                  </Grid>

                  <Grid item md={12} lg={12} xs={12} id="about3">
                    <TextField
                      id="filled-multiline-static"
                      label="Privacy Policy"
                      multiline
                      fullWidth
                      
                      defaultValue="The AwiBrand is a privately run consortium of strategic partners in the fintech, financial payment solutions, and marketing space. We will broaden the opportunity for financial freedom within the Caribbean, for the established and underbanked communities island wide, with a focus on providing a decentralized peer to peer exchange that allows loyal AwiPay Members to not only tap into some of the most advanced technologies but also tap into economic growth through the e-commerce services we offer."
                      variant="filled"
                    />
                    <Button  fullWidth id="about2" variant="contained">UPDATE</Button>
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </Typography>
      </Box>
    </>
  );
}

export default About;
