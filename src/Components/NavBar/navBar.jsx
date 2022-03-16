// Component imports
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { CssBaseline } from "@mui/material";
import { Link } from "react-router-dom";

// NavBar component
const NavBar = () => {
  // Event handlers
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // Component
  return (
    <AppBar position="static">
      <CssBaseline />
      <Container maxWidth="{false}">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, mr: 2, display: { xs: "none", md: "flex" } }}
          >
            Thomas.Chung
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {/* {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))} */}
              <MenuItem key="Home" onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Home
                  </Link>
                </Typography>
              </MenuItem>
              <MenuItem key="AboutMe" onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <Link
                    to="/aboutMe"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    About Me
                  </Link>
                </Typography>
              </MenuItem>
              <MenuItem key="Projects" onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <Link
                    to="/projects"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Projects
                  </Link>
                </Typography>
              </MenuItem>
              <MenuItem key="Contact" onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <Link
                    to="/contact"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Contact
                  </Link>
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            Thomas.Chung
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {/* {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <Link to={"/" + page}>{page}</Link>
              </Button>
            ))} */}
            <Button
              key="Home"
              onClick={handleCloseNavMenu}
              sx={{ my: 2, display: "block" }}
            >
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                Home
              </Link>
            </Button>
            <Button
              key="About Me"
              onClick={handleCloseNavMenu}
              sx={{ my: 2, display: "block" }}
            >
              <Link
                to="/aboutMe"
                style={{ textDecoration: "none", color: "white" }}
              >
                About Me
              </Link>
            </Button>
            <Button
              key="Projects"
              onClick={handleCloseNavMenu}
              sx={{ my: 2, display: "block" }}
            >
              <Link
                to="/projects"
                style={{ textDecoration: "none", color: "white" }}
              >
                Projects
              </Link>
            </Button>
            <Button
              key="Contact"
              onClick={handleCloseNavMenu}
              sx={{ my: 2, display: "block" }}
            >
              <Link
                to="/contact"
                style={{ textDecoration: "none", color: "white" }}
              >
                Contact
              </Link>
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
