import React from 'react';
import ExperienceCard from "./ExperienceCard";
import { Jumbotron } from './migration';
import {
  Container,
  Row,
} from "react-bootstrap";

const Experience = ({ heading, experienceList }) => {
  return (
    <Jumbotron fluid id="experience" className="bg-light m-0 target-section">
      <Container className=" p-3 mb-5 bg-light rounded">
        <h2 className="display-4 pb-5 text-center">{heading}</h2>
        <Row>
          {
          experienceList.map((experience, index) => (
                <ExperienceCard
                  key={`experience-card-${index}`}
                  id={`experience-card-${index}`}
                  value={experience}
                />
              )) 
          }
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default Experience;