import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

const SKILLS = [
  { type: "HTML", level: 90 },
  { type: "CSS", level: 75 },
  { type: "JavaScript", level: 65 },
  { type: "jQuery", level: 67 },
  { type: "BootStrap", level: 70 },
  { type: "Photoshop", level: 75 },
  { type: "React.js", level: 48 },
  { type: "Less", level: 75 },
  { type: "Sass", level: 68 },
  { type: "PHP", level: 36 },
  { type: "Java", level: 35 },
  { type: "Mysql", level: 32 }
];

class SkillBars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true,
      title: "My Skills"
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ collapsed: false });
    }, 1000);
  }

  render() {
    const { collapsed } = this.state;
    const { hue, saturation } = this.props;

    return (
      <div id="skills" className={`container ${collapsed ? "collapsed" : ""}`}>
        <h1
          style={{ textAlign: "center" }}
          className="display-3 font-weight-bolder"
        >
          {this.state.title}
        </h1>
        <ScrollAnimation animateIn="bounceInRight" animateOut="bounceOutLeft">
          <hr />
          <ul className="skills">
            {SKILLS.map((skill, index) => (
              <li
                key={skill.type}
                style={{
                  width: `${skill.level}%`,
                  backgroundColor: `hsl(${hue}, ${saturation}%, ${100 /
                    (index + 3.5)}%)`
                }}
              >
                <p>
                  {skill.type}
                  <span>{skill.level}%</span>
                </p>
              </li>
            ))}
          </ul>
        </ScrollAnimation>
      </div>
    );
  }
}

export default SkillBars;
