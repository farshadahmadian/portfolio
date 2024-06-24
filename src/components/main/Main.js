import AboutMe from "../about-me/Aboutme";
import Projects from "../projects/Projects";
import "./Main.css";

const Main = ({ isDark }) => {
  return (
    <main className="main">
      <AboutMe />
      <Projects isDark={isDark} />
    </main>
  );
};

export default Main;
