import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LazyLoader from "./components/LazyLoader/LazyLoader";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";

import NavBar from "./components/NavBar/Navbar";
import Footer from "./components/Footer/Footer";
import BottomNavBar from "./components/BottomNavBar/BottomNavBar";

import AboutPage from "./components/Pages/About/AboutPage";
const ExperiencePage = () =>
  LazyLoader(
    React.lazy(() => import("./components/Pages/Experience/ExperiencePage"))
  );
const ContactPage = () =>
  LazyLoader(
    React.lazy(() => import("./components/Pages/Contact/ContactPage"))
  );
const ProjectPage = () =>
  LazyLoader(
    React.lazy(() => import("./components/Pages/Project/ProjectPage"))
  );

function App() {
  const [darkState, setDarkState] = useState(true);

  const palletType = darkState ? "dark" : "light";

  const darkTheme = createMuiTheme({
    palette: {
      type: palletType,
    },
  });

  const handleThemeChange = () => {
    setDarkState(!darkState);
  };

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Router>
          <NavBar handleThemeChange={handleThemeChange} darkState={darkState} />
          <Switch>
            <Route path="/project">
              <ProjectPage />
            </Route>
            <Route path="/experience">
              <ExperiencePage />
            </Route>
            <Route path="/contact">
              <ContactPage />
            </Route>
            <Route path="/" exact={true}>
              <AboutPage darkState={darkState} />
            </Route>
          </Switch>
          <BottomNavBar />
          <Footer />
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
