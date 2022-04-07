import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import "../../globals.css";

const Contact = () => {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    setMessage(true);
  };

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
        Contact
      </Typography>
      <Typography variant="h5" align="center" gutterBottom>
        Let's work together!
      </Typography>
      <Container maxWidth="md">
        <form
          action="https://formsubmit.co/thomas.chung.3976@gmail.com"
          method="POST"
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <TextField
            type="text"
            label="Email"
            name="Email"
            variant="outlined"
            required
            margin="normal"
          />
          <TextField
            type="text"
            label="Message"
            name="Message"
            variant="outlined"
            required
            margin="normal"
            multiline
            rows={5}
          />
          <TextField
            type="hidden"
            name="_subject"
            value="Message from portfolio website!"
          />
          <TextField
            type="hidden"
            name="_next"
            value="https://thomas-chung-1997.github.io"
          />
          <Button
            type="submit"
            variant="contained"
            size="medium"
            style={{ backgroundColor: "#F64C4C", color: "#010101" }}
          >
            Send
          </Button>
        </form>
      </Container>
      <Typography variant="h2" align="center" my={4}>
        &zwnj; {message && <span>Sending...</span>}
      </Typography>
      <Container align="center">
        <IconButton
          href="mailto:Thomas.Chung.3976@gmail.com"
          size="large"
          color="inherit"
        >
          <EmailIcon style={{ width: "70px", height: "70px" }} />
        </IconButton>
        <IconButton
          href="https://www.linkedin.com/in/tchung13/"
          size="large"
          color="inherit"
        >
          <LinkedInIcon style={{ width: "70px", height: "70px" }} />
        </IconButton>
        <IconButton href="https://github.com/Thomas-Chung-1997" color="inherit">
          <GitHubIcon style={{ width: "70px", height: "70px" }} />
        </IconButton>
      </Container>
    </Container>
  );
};

export default Contact;
