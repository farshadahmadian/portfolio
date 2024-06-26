import ProjectDescription from "../project-description/ProjectDescription";
import ProjectImage from "../projectImage/ProjectImage";
import "./ProjectCard.css";

const ProjectCard = ({ project, isRightCard, isDark }) => {
  if (isRightCard)
    return (
      <li
        className={`${
          isDark
            ? "project-card-dark project-card-dark-right"
            : "project-card-light project-card-light-right-"
        } project-card`}
      >
        <ProjectDescription
          title={project.title}
          description={project.description}
          url={project.url}
          isRightCard={isRightCard}
          isDark={isDark}
        />
        <ProjectImage image={project.image} isRightCard={isRightCard} />
      </li>
    );
  else
    return (
      <li
        className={`${
          isDark
            ? "project-card-dark project-card-dark-left"
            : "project-card-light project-card-light-left"
        } project-card`}
      >
        <ProjectImage image={project.image} isRightCard={isRightCard} />
        <ProjectDescription
          title={project.title}
          description={project.description}
          url={project.url}
          isRightCard={isRightCard}
          isDark={isDark}
        />
      </li>
    );
};

export default ProjectCard;
