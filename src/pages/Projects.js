import React from "react";
import styled from "styled-components";
import Card from "../components/CardComponent";

const Projects = () => {
  const projects = [
    {
      image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Flitslink.com%2Fwp-content%2Fuploads%2F2020%2F12%2Fnode.js-logo-image.png&tbnid=ZrYFEIUojjdpuM&vet=12ahUKEwjF84y1o_uBAxVlz6ACHQxtDykQMygCegQIARBx..i&imgrefurl=https%3A%2F%2Flitslink.com%2Fblog%2Fwhat-should-you-know-about-the-future-of-nodejs&docid=gooSzMCGi9DaEM&w=5834&h=3334&q=nodejs&ved=2ahUKEwjF84y1o_uBAxVlz6ACHQxtDykQMygCegQIARBx",
      description: "This is my first project.",
      githubLink: "https://github.com/my-username/project1",
    },
    {
      image: "./images/project2.png",
      description: "This is my second project.",
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
    </div>
  );
};

export default Projects;
