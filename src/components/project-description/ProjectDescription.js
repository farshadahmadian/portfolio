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
      <div className="project-link-container">
        <a href={url} className="project-url" target="_blank" rel="noreferrer">
          <span>to github repository </span>
          <img
            className="icon icon-arrow-forward"
            src="./arrow_forward2.svg"
            alt="Arrow Forward"
          />
        </a>
      </div>
    </div>
  );
};

export default ProjectDescription;
