// Component imports
import NavBar from "./Components/NavBar/navBar.jsx";
import Home from "./Components/Home/home.jsx";
import AboutMe from "./Components/AboutMe/aboutMe.jsx";
import Contact from "./Components/Contact/contact.jsx";
import Projects from "./Components/Projects/projects.jsx";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//App component
function App() {
  // Component
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/aboutMe">
              <AboutMe />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
