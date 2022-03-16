//import "./App.css";
import "@mui/material";
import NavBar from "./Components/NavBar/navBar.jsx";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <div>Home</div>
            </Route>
            <Route path="/aboutMe">
              <div>About Me</div>
            </Route>
            <Route path="/projects">
              <div>Projects</div>
            </Route>
            <Route path="/contact">
              <div>Contact</div>
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
