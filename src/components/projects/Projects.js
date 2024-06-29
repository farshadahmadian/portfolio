// import ControlledCarousel from "../../Carousel/Carousel";
import ProjectCard from "../project-card/ProjectCard";
import "./Projects.css";

import { projects } from "../../data";
import { useState } from "react";

const initialProjectsNum = 5;

const Projects = ({ isDark }) => {
  const [projectsList, setProjectsList] = useState(projects);
  const [isAllProjects, setIsAllProjects] = useState(false);

  const clickHandler = () => {
    setIsAllProjects((prevState) => !prevState);
    setProjectsList((prevState) => {
      return isAllProjects
        ? [...prevState.filter((_project, i) => i < initialProjectsNum)]
        : projects;
    });
  };

  return (
    <article id="projects" className="projects-section-container">
      <h2 className="projects-section-header">Some Projects</h2>
      <ul className="project-card-container">
        {projectsList
          .filter((_project, i) =>
            !isAllProjects ? i < initialProjectsNum : true
          )
          .map((project, i) => {
            return (
              <ProjectCard
                key={project.id}
                project={project}
                isRightCard={i % 2 === 0 ? false : true}
                isDark={isDark}
                // className={i > 3 ? "hidden-project" : ""}
              />
            );
          })}
      </ul>
      <p className="show-more-projects" onClick={clickHandler}>
        {isAllProjects ? "Less Projects" : "More Projects"}
      </p>
    </article>
  );
};

export default Projects;
