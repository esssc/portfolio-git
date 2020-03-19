import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import profileImg from "../assets/profile.jpg";

class About extends Component {
  state = {
    about: {
      title: "About me",
      subtitleText:
        "I am currently looking for the programmer’s position in IT Company.",
      aboutMeText:
        "I am a passionate individual who is a quick learner and have developed IT skills during education and work experience. My experience includes Front-end development and working with Mysql database, php and Css during my work placement. I was always passionate about technologies and recently shifted my career focus from logistics to IT and always looking for the next challenge ahead.",
      phoneTitle: "Phone",
      emailTitle: "Email",
      email: "sarunaszimkus@gmail.com",
      phone: "07754518910",
      webTitle: "Website",
      website: "affffaa.com",
      profImg: profileImg
    }
  };

  render() {
    return (
      <section id="about" className="about App">
        <div className="section-heading text-center">
          <h2 className="display-3 font-weight-bolder">
            {this.state.about.title}
          </h2>
        </div>
        <Container fluid={false}>
          <div className="about-content test-sass">
            <Row>
              <div className="col-lg-6">
                <div className="single-about-txt">
                  <h3>{this.state.about.subtitleText}</h3>
                  <p>{this.state.about.aboutMeText}</p>
                  <Row>
                    <div className="col-lg-6">
                      <div className="single-about-add-info">
                        <h3>{this.state.about.phoneTitle}</h3>
                        <p>{this.state.about.phone}</p>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="single-about-add-info">
                        <h3>{this.state.about.emailTitle}</h3>
                        <p>{this.state.about.email}</p>
                      </div>
                    </div>
                  </Row>
                </div>
              </div>
              <div className="col-lg-offset-1 col-lg-5 ">
                <div className="single-about-img">
                  <img className="about__img" src={this.state.about.profImg} alt="profile_image" />
                </div>
              </div>
            </Row>
          </div>
        </Container>
      </section>
    );
  }
}

export default About;
