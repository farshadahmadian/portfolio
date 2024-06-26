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
        {/* <h1 className="header-text">Welcome</h1> */}
        <div className="banner-container">
          <div className="banner-text">left</div>
          <div className="banner-image-container">
            {/* <img className="banner-image" src="./farshad.jpeg" alt="Banner" /> */}
          </div>
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
