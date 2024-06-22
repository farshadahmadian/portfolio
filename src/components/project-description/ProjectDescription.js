import "./ProjectDescription.css";

const ProjectDescription = ({ title, description, url, isRightCard }) => {
  return (
    <div
      className={`${
        isRightCard ? "project-description-left" : "project-description-right"
      } project-description-container`}
    >
      <h3 className="project-header">{title}</h3>
      <p className="project-description">{description}</p>
      <p className="project-url">{url}</p>
    </div>
  );
};

export default ProjectDescription;
