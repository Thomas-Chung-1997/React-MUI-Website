// Component imports
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import * as React from "react";
import "../../globals.css";

// Project component
const Projects = () => {
  // Variables
  const cards = [
    {
      id: 1,
      name: "Conway's Game of Life",
      picture: "/assets/gameOfLife.png",
      blurb:
        "This a recreation of the classic Game of Life made by John Conway. It is a zero-player game where dots on a grid using a very basic ruleset try to simulate intelligence similar to human life.",
      link: "https://github.com/Thomas-Chung-1997/GameOfLifePython",
    },
    {
      id: 2,
      name: "Stump Bot",
      picture: "/assets/discordBot.png",
      blurb:
        "A Discord bot that has basic functionality of managing user messages and playing audio of youtube videos. It also has the ability to play music consecutively from it own local data.",
      link: "https://github.com/Thomas-Chung-1997/Stump_Bot",
    },
    {
      id: 3,
      name: "ARTEMIS",
      picture: "/assets/ARTEMIS.png",
      blurb:
        "A speech recognition assistant that can do google searches, wikipedia searches, play youtube videos, and open user specified applications. Other basic functionalities include weather reports, timers, and current date.",
      link: "https://github.com/Thomas-Chung-1997/ARTEMIS",
    },
    {
      id: 4,
      name: "Yu-Gi-Oh! Database App",
      picture: "/assets/YUGIOH.png",
      blurb:
        "A Yu-Gi-Oh! app for the purpose of creating a digital/virtual version of the user's personal card collection.",
      link: "https://github.com/Thomas-Chung-1997/Yu-Gi-Oh--Database-App",
    },
    {
      id: 5,
      name: "Portfolio Website",
      picture: "/assets/react.png",
      blurb:
        "This current portfolio website. Created with basic React.js functionality, Material UI components, and proper React Router Dom application. ",
      link: "https://github.com/Thomas-Chung-1997/Thomas-Chung-1997.github.io",
    },
    {
      id: 6,
      name: "Polymorphic Inheritance",
      picture: "/assets/polymorphicInheritance.png",
      blurb:
        "A visual demonstration of class Inheritance using linked spheres; while also implementing a Fisher-Yates algorithm and thread management to generate a living background.",
      link: "https://github.com/Thomas-Chung-1997/Polymorphic_Inheritance",
    },
    {
      id: 7,
      name: "Molar Mass Calculator",
      picture: "/assets/molarMassCalculator.png",
      blurb:
        "Using Regex to pull a chemical formula from the user; afterwards utilizing LINQ statements to display all the information about elements used.",
      link: "https://github.com/Thomas-Chung-1997/Molar_Mass_Calculator",
    },
    {
      id: 8,
      name: "Bike Rental Database",
      picture: "/assets/bikeRentalDatabase.png",
      blurb:
        "A Complete build of a database. Creation and deletion of a database and tables as well as pre-built methods that allow easy management of data.",
      link: "https://github.com/Thomas-Chung-1997/Bike_Rental_Database",
    },
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
      <Typography variant="h1" align="center">
        Projects
      </Typography>
      <Typography variant="h5" align="center" gutterBottom>
        Check out my work!
      </Typography>
      <Grid container spacing={8} px={10}>
        {cards.map((card) => (
          <Grid item xs={12} md={6} lg={4}>
            <Card style={{ backgroundColor: "#FAF9F6" }}>
              <CardMedia
                component="img"
                alt={card.id}
                image={card.picture}
                style={{
                  width: "100%",
                  height: "450px",
                }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {card.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {card.blurb}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  href={card.link}
                  style={{ color: "#010101" }}
                >
                  Code
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
