import * as React from 'react';
import { Jumbotron } from './migration';
import {
    Container,
    Row,
    Col
  } from "react-bootstrap";

const Certification = ({ heading, certificationList }) => {
    return (
        <Jumbotron id="certifications" className="bg-white m-0">
            <Container className=" p-3 mb-5 bg-white rounded">
                <h2 className="display-4 pb-5 text-center">{heading}</h2>
                <Row>
                    {
                        certificationList.map((certification, index) => (
                            <Col>
                                <div className="p-3 mb-0">
                                    <h5>{certification.title}</h5>
                                    <div className="card-text">
                                        {certification.platform}
                                        <br/>
                                        {certification.issued}
                                        <br/>
                                        {certification.credential}
                                        <br/>
                                        {certification.link}
                                    </div>
                                </div>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </Jumbotron>
    )
}

export default Certification; 