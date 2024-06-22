import AboutMe from "../about-me/Aboutme";
import Projects from "../projects/Projects";
import "./Main.css";

const Main = () => {
  return (
    <main className="main">
      <AboutMe />
      <Projects />
    </main>
  );
};

export default Main;
