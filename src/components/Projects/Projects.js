import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import note from "../../Assets/Projects/Notes.PNG";
import chat from "../../Assets/Projects/Chat.PNG";
import snake from "../../Assets/Projects/Snake.PNG";
import mmm from "../../Assets/Projects/MMM.PNG";
import weather from "../../Assets/Projects/Weather.PNG";
import hms from "../../Assets/Projects/hms.PNG";
import ecommerce from "../../Assets/Projects/ecommerce.PNG";
import lms from "../../Assets/Projects/lms.PNG";
import course from "../../Assets/Projects/course.PNG";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
             <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="E-commerce analytics pipeline"
              description="Designed logical and relational models with over 50k data entries, ensuring data efficiency and accuracy through normalization, Developed ETL and CDC processes to seamlessly transfer data from OLTP databases to a DW, aligning it with the DW schema.Leveraged advanced database features such as partition tables, indexes, triggers, etc. to optimize data management and access. Conducted extensive data analytics using Tableau to identify loss factors, resulting in improved marketing strategies and profits."
              ghLink="https://github.com/vinitaparasrampuria/E-commerce"
              
            />
          </Col>

                 <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lms}
              isBlog={false}
              title="Library Management System"
              description="Developed a web application with logins for user and admin to issue book, reserve rooms, schedule seminar and exhibitions. Implemented features like forgot and change password, invoice generation and created a database management system to store data."
              ghLink="https://github.com/vinitaparasrampuria/Library-Management-System"
              
            />
          </Col>

                
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={course}
              isBlog={false}
              title="CourseLink"
              description="Leveraged Java springboot framework to create REST API endpoints for managing courses using Java MVC pattern. The API provides endpoints for CRUD operations using a MongoDB database connected using JPA with authentication using JWT."
              ghLink="https://github.com/vinitaparasrampuria/CourseLink"
              
            />
          </Col>

                 <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hms}
              isBlog={false}
              title="Hospital Mangement System"
              description="Created a unified platform for patients, doctors and admin to standardize hospital records, appointment booking and payment processing with features like automatic patient ID generation, password encryption, appointment cancellation and automatic pdf bill generation."
              ghLink="https://github.com/vinitaparasrampuria/Hospital-Management-System"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chat}
              isBlog={false}
              title="Chat Application"
              description="Developed a group chatting system in Java where multiple users can connect to a common server and send messages to each other."
              ghLink="https://github.com/vinitaparasrampuria/Chat-application-in-Java"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={snake}
              isBlog={false}
              title="Snake Game"
              description="Developed Snake Game in Java with different levels which can be played online simultaneously by multiple users. Features such as login,
              highest score and best time implemented using database"
              ghLink="https://github.com/vinitaparasrampuria/Snake-Game-Java"
                          
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={note}
              isBlog={false}
              title="Notes App"
              description="Designed a web application for making notes, deleting and searching for notes, toggling dark mode and storing to local storage"
              ghLink="https://github.com/vinitaparasrampuria/Notes-Application"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather App"
              description="Designed a weather application to get various temperature attributes from OpenWeatherMap API as per location entered by user."
              ghLink="https://github.com/vinitaparasrampuria/Weather-Application"
        
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mmm}
              isBlog={false}
              title="Mentor mentee match app"
              description="Built a website for best possible mentor-mentee matching having interactive features and appointment scheduling for Tech Alpharetta."
              ghLink="https://github.com/vinitaparasrampuria/Mentor-Mentee-Match"
    
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
