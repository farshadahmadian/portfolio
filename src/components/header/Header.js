import Navbar from "../navbar/Navbar";
import Modal from "../modal/Modal";
import "./Header.css";
import ModalMenu from "../modal-menu/ModalMenu";

const Header = ({
  onToggleMenu,
  isMenuOpen,
  onCloseModal,
  isDark,
  onToggleTheme,
}) => {
  return (
    <>
      <header
        className={`${
          !isMenuOpen ? "header-container" : "header-container-blur"
        }`}
      >
        <Navbar
          onToggleMenu={onToggleMenu}
          isMenuOpen={isMenuOpen}
          isDark={isDark}
          onToggleTheme={onToggleTheme}
        />
        <div className="banner-container">
          <div className="banner-text">
            <p>Hi,</p>
            <h1>I'm Farshad</h1>
          </div>
          <div className="banner-image-container"></div>
        </div>
      </header>
      {isMenuOpen && (
        <Modal>
          <ModalMenu onCloseModal={onCloseModal} />
        </Modal>
      )}
    </>
  );
};

export default Header;

/* import Navbar from "../navbar/Navbar";
import Modal from "../modal/Modal";
import "./Header2.css";
import ModalMenu from "../modal-menu/ModalMenu";

const Header = ({
  onToggleMenu,
  isMenuOpen,
  onCloseModal,
  isDark,
  onToggleTheme,
}) => {
  return (
    <>
      <header
        className={`${
          !isMenuOpen ? "header-container" : "header-container-blur"
        }`}
      >
        <Navbar
          onToggleMenu={onToggleMenu}
          isMenuOpen={isMenuOpen}
          isDark={isDark}
          onToggleTheme={onToggleTheme}
        />

        <h1>I'm Farshad</h1>
      </header>
      {isMenuOpen && (
        <Modal>
          <ModalMenu onCloseModal={onCloseModal} />
        </Modal>
      )}
    </>
  );
};

export default Header;
 */
