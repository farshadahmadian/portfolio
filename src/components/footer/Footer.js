import "./Footer.css";

const Footer = ({ isDark, children }) => {
  return (
    // <div className={`${isDark ? "footer-dark" : "footer-light"} footer`}>
    <div className="footer">
      {children}
      <div className="footer-text">
        <div className="footer-contacts">
          <a
            href="https://github.com/farshadahmadian"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="icon footer-icon footer-icon-github"
              // src={isDark ? "./github-black.png" : "./github-white.png"}
              src="./github-white.png"
              alt="Github"
            />
          </a>
          <a
            href="linkedin.com/in/farshad-ahmadian-yazdi"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="icon footer-icon footer-icon-linkedin"
              // src={isDark ? "./linkedin-black.png" : "./linkedin-white.png"}
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
