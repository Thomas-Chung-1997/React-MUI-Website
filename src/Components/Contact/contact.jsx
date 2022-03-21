import {
  Container,
  CssBaseline,
  IconButton,
  TextField,
  Typography,
  Button,
  Paper,
  Grid,
} from "@mui/material";
import { useState } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

const Contact = () => {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    setMessage(true);
  };

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
            color="primary"
            size="medium"
          >
            Send
          </Button>
        </form>
      </Container>
      <Typography variant="h2" align="center" my={4}>
        &zwnj; {message && <span>Sent!</span>}
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
