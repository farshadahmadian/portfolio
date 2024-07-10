import AnchorLink from "react-anchor-link-smooth-scroll";
import "./ModalMenu.css";

const ModalMenu = ({ onCloseModal }) => {
  return (
    <div className="modal-menu-container">
      <AnchorLink
        className="link-open-menu"
        onClick={onCloseModal}
        href="#about-me"
      >
        About Me
      </AnchorLink>
      <AnchorLink
        className="link-open-menu"
        onClick={onCloseModal}
        href="#projects"
      >
        Projects
      </AnchorLink>
      <AnchorLink
        className="link-open-menu"
        onClick={onCloseModal}
        href="#contact"
      >
        Contact
      </AnchorLink>
      <button onClick={onCloseModal} className="close-btn">
        <img className="close-btn" src="./close.png" alt="Close Button" />
      </button>
    </div>
  );
};

export default ModalMenu;
