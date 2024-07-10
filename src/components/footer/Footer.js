import "./Footer.css";

const Footer = ({ isDark, children }) => {
  return (
    <div className="footer">
      {children}
      <div className="footer-text">
        <div className="footer-contacts">
          <a href="#" target="_blank" rel="noreferrer">
            <img
              className="icon footer-icon footer-icon-github"
              src="./github-white.png"
              alt="Github"
            />
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            <img
              className="icon footer-icon footer-icon-linkedin"
              src="./linkedin-white.png"
              alt="Linkedin"
            />
          </a>
        </div>
        <p>Farshad Ahmadian Yazdi</p>
      </div>
    </div>
  );
};

export default Footer;
