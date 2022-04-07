// Component imports
import { List, ListSubheader } from "@mui/material";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";
import "../../globals.css";

// AboutMe Component
const AboutMe = () => {
  //Variables
  const skills = [
    "C# : 2 years of education. Basics, object-oriented programming, Windows Form Application, ASP.net, and sockets.",
    "C++ : 1 year of education. Data management, algorithms, I/O integration.",
    "HTML, CSS, JavaScript: 1.5 years of education. Basics, jQuery, PHP, database integration, REST API",
    "MySQL : 1 year of education. System design, queries, and functions. ",
    "Python : Self taught. APIs and ingration to live services.",
    "Currently learning: Windows Presentation Foundation, Unity, React.js, Material UI, Tailwind CSS, and Model View Control.",
  ];

  // Component
  return (
    <Container
      component="div"
      maxWidth="auto"
      className="backgroundColor"
      style={{
        minHeight: "100vh",
        paddingTop: "100px",
      }}
    >
      <CssBaseline />
      <Typography variant="h1" align="center" gutterBottom>
        About Me
      </Typography>
      <Grid container spacing={8} px={4}>
        <Grid item xs={12} lg={6}>
          <Typography variant="h3" sx={{ paddingBottom: 2 }}>
            I'm Thomas Chung
          </Typography>
          <Typography variant="h6" sx={{ paddingBottom: 6 }}>
            I started my journey at the Northern Alberta Institute of
            Technology; taking Computer Engineer Technology. After completing my
            associate's degree in 2019, I've been looking to improve my tool
            kit. Learning new technology to create a diverse collection of
            applications to improve workflow or quality of life. I look to make
            a difference in the way people look at technology as an asset than a
            nuisance. To make a difference in people's lives that helps them do
            their work more efficiently, effectively or something that they
            could not do on their own.
          </Typography>
          <Typography variant="h3" sx={{ paddingBottom: 2 }}>
            My Methodology
          </Typography>
          <Typography variant="h6" gutterBottom>
            Everything has its reason and its place. If there was only one
            defacto way of doing things, why haven't we adapted to that
            philosophy? Different technologies have specific goals in mind when
            implementing them. That being creating modular code, researching the
            most efficient algorithm, or making it more or less accessible to
            users. There is a reason to use a certain strategy over another.
            There is a reason to use one technology over a similar one based on
            factors like accessibility or how effective it is. <br />
            <br /> Being a programmer is more than just coding; you are also a
            researcher, a developer, and a designer.
          </Typography>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Container
            sx={{ border: "8px solid black", borderRadius: "16px", padding: 2 }}
          >
            <Typography variant="h3">Skills</Typography>
            {skills.map((skill) => (
              <Typography variant="h6">&#8226; {skill}</Typography>
            ))}
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutMe;
