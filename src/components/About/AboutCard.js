import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am{" "}
            <span className="purple">Maulana Ibnu Fajar </span>
            from <span className="purple"> Tegal, Indonesia.</span>
            <br /> I am a student pursuing an Politeknik Harapan Bersama in
            informatic engineering.
            <br />
            <br />
            <br />
            there are some activities that I like besides coding and design
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> bicycling
            </li>
            <li className="about-activity">
              <ImPointRight /> reading books
            </li>
          </ul>

          
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
