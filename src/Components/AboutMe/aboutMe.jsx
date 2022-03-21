import { Container, CssBaseline, Grid, Typography } from "@mui/material";
import React from "react";

const AboutMe = () => {
  return (
    <Container
      component="div"
      maxWidth="auto"
      style={{
        minHeight: "100vh",
        backgroundColor: "#00BBDE",
        color: "white",
        paddingTop: "100px",
      }}
    >
      <CssBaseline />
      <Typography variant="h1" align="center" gutterBottom>
        About Me
      </Typography>
      <Grid container spacing={8} px={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="h5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dicta
            soluta voluptatum corrupti odio eveniet perspiciatis sunt nam fugit
            porro, velit perferendis numquam fugiat recusandae unde? Nesciunt
            porro magnam quae!
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography
            variant="h5"
            sx={{ border: "8px solid white", borderRadius: "16px" }}
            p={2}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dicta
            soluta voluptatum corrupti odio eveniet perspiciatis sunt nam fugit
            porro, velit perferendis numquam fugiat recusandae unde? Nesciunt
            porro magnam quae!
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutMe;
