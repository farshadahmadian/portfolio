import "./projectImage.css";

const ProjectImage = ({ image, isRightCard }) => {
  return (
    <div
      className={`${
        isRightCard
          ? "project-image-container-right"
          : "project-image-container-left"
      } project-image-container`}
    >
      <img className="project-image" src={image} alt="" />
    </div>
  );
};

export default ProjectImage;
