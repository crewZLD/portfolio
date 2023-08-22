import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import attendance from "../../Assets/Projects/absen.jpeg";
import donation from "../../Assets/Projects/donation.jpeg";
import eticket from "../../Assets/Projects/eticket.png";
import movie from "../../Assets/Projects/movie.png";


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
              imgPath={attendance}
              isBlog={false}
              title="Attendance System"
              description="A system of attendance using object detection is a system that uses object recognition technology to record and verify the attendance of individuals. By using cameras or visual sensors, this system can detect and identify faces or certain objects that are unique to each individual."
              ghLink="https://colab.research.google.com/drive/1XHJCzaqqWK-6jY_P6JDO6iC0qEMXPb92?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={donation}
              isBlog={false}
              title="Blood Donation"
              description="A blood donor app is an application designed to facilitate the blood donation process. Through this app, users can register as blood donors, search and find the nearest location to donate blood, get information about blood donation requirements and procedures, and get notifications about ongoing blood donation campaigns or activities."
              ghLink="https://github.com/maulana421/DARAHKU-GEMASTK"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movie}
              isBlog={false}
              title="Movie Recommender"
              description="A movie recommendation app is an application that provides movie recommendations to users based on their preferences and interests. The app uses algorithms and data analysis techniques to analyze audience history, genre preferences, previous movie ratings, and other factors. Based on this information, the app will provide movie recommendations that match the user's interests, helping them discover new movies they might like."
              ghLink="https://github.com/maulana421/ChallangeCH8-Binar"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eticket}
              isBlog={false}
              title="MyAirFire"
              description="An airline ticket booking application is an application that allows users to make reservations and purchase airline tickets online. Through this application, users can search flight schedules, compare ticket prices from various airlines, select seats, and make payments securely. This application provides convenience and comfort for users in booking airplane tickets without having to come to a physical travel agent."
              ghLink="https://github.com/maulana421/MyAIRFARE"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
