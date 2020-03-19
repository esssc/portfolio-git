import React from "react";
import "./App.css";
import "animate.css/animate.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import Abouts from "./components/Abouts";
import SkillBars from "./components/SkillBars";
import ControlledCarousel from "./components/PagesCarousel/PagesCarousel";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "S Z",
      headerLinks: {
        title: "Home",
        path: "/"
      },
      home: {
        title: "Portfolio",
        subTitle: "Projects make a difference"
      }
    };
  }

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar bg="transperant" variant="light" expand="lg">
            <Navbar.Brand href="#home" className="text-secondary">
              Sarunas Zimkus
            </Navbar.Brand>
            <Navbar.Toggle
              className="border-0"
              aria-controls="basic-navbar-nav"
            />
            <Navbar.Collapse id="basic-navbar-nav" className="text-secondary">
              <Nav className="ml-auto">
                <Nav.Link href="#about" className="text-secondary">
                  About
                </Nav.Link>
                <Nav.Link href="#skills" className="text-secondary">
                  Skills
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Route
            path="/"
            exact
            render={() => (
              <HomePage
                title={this.state.home.title}
                subTitle={this.state.home.subTitle}
                text={this.state.home.text}
              />
            )}
          />

          <Route path="/" exact component={Abouts} />
          <SkillBars hue="200" saturation="50" />
          <ControlledCarousel/>
          <Footer />
        </Container>
      </Router>
    );
  }
}

export default App;
