import "./ProjectDescription.css";

const ProjectDescription = ({
  title,
  description,
  url,
  isRightCard,
  isDark,
}) => {
  return (
    <div
      className={`${
        isRightCard ? "project-description-left" : "project-description-right"
      } project-description-container`}
    >
      <h3 className="project-header">{title}</h3>
      <p className="project-description">{description}</p>
      <div className="project-link-container">
        <a
          href={url}
          className={`${
            isDark ? "project-url-dark" : "project-url-light"
          } project-url`}
          target="_blank"
          rel="noreferrer"
        >
          <span className="description-repository">to github repository </span>
        </a>
      </div>
    </div>
  );
};

export default ProjectDescription;
