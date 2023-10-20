import React from "react";
import styled from "styled-components";
import Card from "../components/CardComponent";
import proj1 from "./project1.png"
import proj2 from "./project2.png"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Projects = () => {
  const projects = [
    {
      image: proj1,
      description: "This is my first project.Profile Page using React",
      githubLink: "https://github.com/my-username/project1",
    },
    {
      image: proj2,
      description: "This is a MERN Stack project. Farmer Website to buy and rent farming equipment",
      githubLink: "https://github.com/my-username/project2",
    },
  ];

  const ProjectsList = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    margin:30px;
    padding:30px
  `;

  return (
    <div>
    <Navbar />
      <h1>Projects</h1>
      <ProjectsList>
        {projects.map((project) => (
          <li key={project.description}>
            <Card
              image={project.image}
              description={project.description}
              githubLink={project.githubLink}
            />
          </li>
        ))}
      </ProjectsList>
      <Footer name={"Gaurang Mapuskar"} number={9969780696} />
    </div>
  );
};

export default Projects;
