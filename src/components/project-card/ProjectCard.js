import ProjectDescription from "../project-description/ProjectDescription";
import ProjectImage from "../projectImage/ProjectImage";
import "./ProjectCard.css";

const ProjectCard = ({ project, isRightCard }) => {
  if (isRightCard)
    return (
      <li className="project-card project-card-right">
        <ProjectDescription
          title={project.title}
          description={project.description}
          url={project.url}
          isRightCard={isRightCard}
        />
        <ProjectImage image={project.image} isRightCard={isRightCard} />
      </li>
    );
  else
    return (
      <li className="project-card">
        <ProjectImage image={project.image} isRightCard={isRightCard} />
        <ProjectDescription
          title={project.title}
          description={project.description}
          url={project.url}
          isRightCard={isRightCard}
        />
      </li>
    );
};

export default ProjectCard;
