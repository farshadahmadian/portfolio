import AnchorLink from "react-anchor-link-smooth-scroll";
import "./Links.css";

const Links = () => {
  return (
    <div className="navbar-links-container">
      <AnchorLink className="link-closed-menu" href="#about-me">
        About Me
      </AnchorLink>
      <AnchorLink className="link-closed-menu" href="#projects">
        Projects
      </AnchorLink>
      <AnchorLink className="link-closed-menu" href="#contact">
        Contact
      </AnchorLink>
    </div>
  );
};

export default Links;
