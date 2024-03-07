import * as React from 'react';
import { Jumbotron } from './migration';
import Carousel from 'react-bootstrap/Carousel'
import {
    Container,
    Row,
  } from "react-bootstrap";

const Certification = ({ heading, certificationList, img, imageSize }) => {
    return (
        <Jumbotron id="certifications" className="bg-white m-0">
            <h2 className="display-4 pb-5 text-center">{heading}</h2>
            <div className="d-flex">
                <Container className=" p-3 mb-5 bg-white rounded">
                    <Row>
                        {certificationList.map((certification, index) => (
                            <div className="p-3 mb-0">
                            <h5>{certification.title}</h5>
                                <div className="card-text">
                                    {certification.platform}
                                    <br/>
                                    {certification.issued}
                                    <br/>
                                    <a href={certification.link}>link</a>
                                </div>
                            </div>
                        ))}
                    </Row>
                </Container>
                <div className="col-md-4">
                    {console.log("TEST")}
                    <Carousel>
                        {img.map((value, index) => {
                            return (
                                <Carousel.Item key={index}>
                                    <img 
                                        className="d-block w-300 h-100"
                                        src={value.img}
                                        alt="First slide"
                                        width={imageSize.width}
                                        height={imageSize.height}
                                    />
                                </Carousel.Item>
                            )
                        })}
                    </Carousel>
                </div>
            </div>
        </Jumbotron>
    )
}

export default Certification; 