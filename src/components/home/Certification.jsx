import * as React from 'react';
import { Jumbotron } from './migration';
import {
    Container,
    Row,
  } from "react-bootstrap";

const Certification = ({ heading, message }) => {
    return (
        <Jumbotron id="certifications" className="bg-light m-0">
            <Container className=" p-3 mb-5 bg-light rounded">
                <h2 className="display-4 pb-5 text-center">{heading}</h2>
                <Row>
                    
                </Row>
            </Container>
        </Jumbotron>
    )
}

export default Certification; 