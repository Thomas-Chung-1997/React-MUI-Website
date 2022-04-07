// Component imports
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import * as React from "react";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../../globals.css";

// Home component
const Home = () => {
  // Event handlers
  const typeWriter = useRef();

  useEffect(() => {
    init(typeWriter.current, {
      showCursor: false,
      backDelay: 1500,
      backSpeed: 50,
      strings: [
        "Computer Engineer",
        "Programmer",
        "Technologist",
        "Developer",
        "Gamer",
      ],
    });
  }, []);

  // Component
  return (
    <Container
      className="backgroundColor"
      component="div"
      maxWidth="auto"
      style={{
        minHeight: "100vh",
        paddingTop: "100px",
      }}
    >
      <CssBaseline />
      <Typography variant="h2" align="center">
        Hey there, I'm
      </Typography>
      <Typography variant="h1" align="center">
        Thomas Chung
      </Typography>
      <Typography
        variant="h2"
        align="center"
        ref={typeWriter}
        style={{ color: "#6F0000", height: "100px" }}
      ></Typography>
      <Typography
        variant="h5"
        align="center"
        sx={{ paddingTop: { xs: "20vh", md: "40vh" } }}
      >
        Check out my projects!
      </Typography>
      <Container align="center">
        <IconButton>
          <Link
            to="/projects"
            style={{ textDecoration: "none", color: "black" }}
          >
            <ArrowCircleDownIcon style={{ width: "70px", height: "70px" }} />
          </Link>
        </IconButton>
      </Container>
    </Container>
  );
};

export default Home;
