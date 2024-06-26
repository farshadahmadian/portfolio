import { aboutMe, toCV } from "../../data";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <article id="about-me" className="about-me-container">
      <div className="about-me-text-container">
        <h2 className="about-me-header">About Me</h2>
        <p className="about-me-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A molestiae
          atque facere ullam repellendus officiis nisi tempora. Dicta, nobis
          quae modi, quos facere consequatur fuga aspernatur inventore culpa
          neque nulla.
        </p>
        <p>
          {/* {toCV} */}
          <a
            className="to-cv"
            href="https://farshadahmadian.github.io/cv"
            target="_blank"
            rel="noreferrer"
          >
            here
          </a>
          .
        </p>
      </div>
      <div className="about-me-image-container">
        {/* <img className="about-me-image" src="./header.jpeg" alt="Farshad" /> */}
      </div>
    </article>
  );
};

export default AboutMe;
