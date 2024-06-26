import AboutMe from "../about-me/Aboutme";
import Projects from "../projects/Projects";
import "./Main.css";

const Main = ({ isDark }) => {
  return (
    <div className="main-container">
      <main className="main">
        <AboutMe />
        <Projects isDark={isDark} />
      </main>
    </div>
  );
};

export default Main;
