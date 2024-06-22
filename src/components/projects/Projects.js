// import ControlledCarousel from "../../Carousel/Carousel";
import ProjectCard from "../project-card/ProjectCard";
import "./Projects.css";

import { projects } from "../../data";

const Projects = () => {
  return (
    <article className="projects-section-container">
      <h2 className="projects-section-header">Some Projects</h2>
      {/* <h2>
        <ControlledCarousel interval={1000} />
      </h2> */}
      <ul className="project-card-container">
        {projects.map((project, i) => {
          return (
            <ProjectCard
              key={project.id}
              project={project}
              isRightCard={i % 2 === 0 ? false : true}
              // isRightCard={false}
            />
          );
        })}
      </ul>
    </article>
  );
};

export default Projects;
