import { Container, CssBaseline, Typography } from "@mui/material";
import * as React from "react";
import { init } from "ityped";
import { useEffect, useRef } from "react";

const Home = () => {
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
      <Container sx={{ pt: "100px" }}>
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
          style={{ color: "#C70505" }}
        ></Typography>
      </Container>
    </Container>
  );
};

export default Home;
