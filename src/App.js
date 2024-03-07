import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  navBar,
  mainBody,
  about,
  repos,
  repo2,
  repo3,
  repo4, 
  leadership,
  skills,
  getInTouch,
  experience,
  awards,
  certifications,
} from "./editable-stuff/config.js";
import MainBody from "./components/home/MainBody";
import AboutMe from "./components/home/AboutMe";
import Project from "./components/home/Project";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Skills from "./components/home/Skills";
// import { Blog } from "./components/blog/Blog";
// import BlogPost from "./components/blog/BlogPost";
import GetInTouch from "./components/home/GetInTouch.jsx";
import Leadership from "./components/home/Leadership.jsx";
import Experience from "./components/home/Experience";
import Awards from "./components/home/Awards.jsx";
import Certification from "./components/home/Certification.jsx";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Jumbotron } from "./components/home/migration.jsx";

const Home = React.forwardRef((props, ref) => {
  return (
    <>
      <MainBody
        gradient={mainBody.gradientColors}
        title={`${mainBody.firstName} ${mainBody.middleName} ${mainBody.lastName}`}
        message={mainBody.message}
        icons={mainBody.icons}
        ref={ref}
      />
      {about.show && (
        <AboutMe
          heading={about.heading}
          message={about.message}
          link={about.imageLink}
          imgSize={about.imageSize}
          resume={about.resume}
        />
      )}
      {experience.show && (
          <Experience 
            heading={experience.heading}
            experienceList={experience.data}
          />
        )
      }
      {repos.show && (
        <Jumbotron id="projects" fluid className="bg-white m-0">
          <Container className="">
            <h2 className="display-4 pb-5 text-center">{repos.heading}</h2> 
              <Row>
                <Project
                  heading={repos.heading}
                  username={repos.gitHubUsername}
                  length={repos.reposLength}
                  specfic={repos.specificRepos}
                />
                <Project
                  heading={repo2.heading}
                  username={repo2.gitHubUsername}
                  length={repo2.reposLength}
                  specfic={repo2.specificRepos}
                />
                <Project
                  heading={repo3.heading}
                  username={repo3.gitHubUsername}
                  length={repo3.reposLength}
                  specfic={repo3.specificRepos}
                />
                <Project
                  heading={repo4.heading}
                  username={repo4.gitHubUsername}
                  length={repo4.reposLength}
                  specfic={repo4.specificRepos}
                />
                </Row>
            </Container>
        </Jumbotron>
      )}
      {leadership.show && (
        <Leadership
          heading={leadership.heading}
          message={leadership.message}
          img={leadership.images}
          imageSize={leadership.imageSize}
        />
      )}
      {skills.show && (
        <Skills
          heading={skills.heading}
          languages={skills.languages}
          libraries={skills.libraries}
          otherSkills={skills.otherSkills}
        />
      )}
      {certifications.show && (
        <Certification 
          heading={certifications.heading}
          certificationList={certifications.data}
          img={certifications.images}
          imageSize={certifications.imageSize}
        />
      )}
      {awards.show && (
        <Awards
          heading={awards.heading}
          message={awards.message}
        />
      )}
    </>
  );
});

const App = () => {
  const titleRef = React.useRef();

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL + "/"}>
      {navBar.show && <Navbar ref={titleRef} />}
      <Routes>
        <Route path="/" exact element={<Home ref={titleRef} />} />
      </Routes>
      {/* {false && <Route path="/blog" exact component={Blog} />}
      {false && <Route path="/blog/:id" component={BlogPost} />} */}
      <Footer>
        {getInTouch.show && (
          <GetInTouch
            heading={getInTouch.heading}
            message={getInTouch.message}
            email={getInTouch.email}
          />
        )}
      </Footer>
    </BrowserRouter>
  );
};

export default App;
