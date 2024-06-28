import "./AboutMe.css";

const AboutMe = () => {
  return (
    <article id="about-me" className="about-me-container">
      <div className="about-me-text-container">
        <h2 className="about-me-header">About Me</h2>
        <div className="about-me-text">
          <p>
            With over a decade of experience building landing pages for
            startups, I've developed my skills in creating dynamic and
            user-friendly web solutions. While I enjoyed my work, I looked for
            more challenging and fulfilling projects to expand my expertise.
          </p>
          <p>
            In 2022, I discovered 42 Heilbronn, which provided the perfect
            opportunity to transform my career. There, I shifted my focus to
            back-end and software development. Through this intensive program, I
            mastered C and C++, significantly enhancing my programming skills.
          </p>
          <p>
            My passion for continuous learning drives me to stay updated with
            the rapidly changing world of software development and technology.
            Each day, I strive to acquire new knowledge and improve my skills to
            contribute effectively to innovative projects.
          </p>
          <p>
            Feel free to check out my{" "}
            <a
              className="to-cv"
              href="https://farshadahmadian.github.io/cv"
              target="_blank"
              rel="noreferrer"
            >
              CV here
            </a>
            .
          </p>
        </div>
      </div>
      {/*   <div className="about-me-image-container">
        <img className="about-me-image" src="./header.jpeg" alt="Farshad" />
      </div> */}
    </article>
  );
};

export default AboutMe;
