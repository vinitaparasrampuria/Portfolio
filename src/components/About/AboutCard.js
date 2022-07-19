import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Vinita Parasrampuria </span>
            from <span className="purple"> New York, US.</span>
            <br />I am a graduate student pursuing Computer Engineering from New York University. My current CGPA os <span className="purple">3.95</span>.
            <br />I have taken following courses:
            <br />
            <ul>
            <li className="Courses">
               Data Structures and Algorithms
            </li>
            <li className="Courses">
               Internet Architecture and Protocols
            </li>
            <li className="Courses">
               Computer System Architecture
            </li>
            <li className="Courses">
               Database Management Systems
            </li>
            <li className="Courses">
               Java Programming
            </li>
            <li className="Courses">
               Network Modeling and Analysis
            </li>
            <li className="Courses">
               Machine Learning
            </li>
            <li className="Courses">
               Network Security
            </li>
            <li className="Courses">
               Probability and Stochastic Processes
            </li>
          </ul>
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Painting
            </li>
            <li className="about-activity">
              <ImPointRight /> Yoga
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "If people never did silly things, nothing intelligent would ever get done."{" "}
          </p>
          <footer className="blockquote-footer">Ludwig Wittgenstein</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
