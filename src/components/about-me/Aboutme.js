import "./AboutMe.css";

const AboutMe = () => {
  return (
    <article className="about-me-container">
      <div className="about-me-text">
        <h2 className="about-me-header">About Me</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et odio
          consequuntur illo placeat laudantium pariatur perspiciatis aliquid
          nobis facere tenetur harum consectetur voluptatum earum aliquam
          deleniti, excepturi sit laborum! Molestias.
        </p>
      </div>
      <div className="about-me-image-container">
        {/* <img className="about-me-image" src="./header.jpeg" alt="Farshad" /> */}
        <img className="about-me-image" src="" alt="Farshad" />
      </div>
    </article>
  );
};

export default AboutMe;
