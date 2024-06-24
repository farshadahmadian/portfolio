import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import "./App.css";
import Footer from "./components/footer/Footer";
import ContactForm from "../src/components/ContactForm/ContactForm";

function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  const toggleMenuHandler = function () {
    setMenuOpen((prevState) => !prevState);
  };

  const closeModalHandler = function () {
    setMenuOpen((prevState) => !prevState);
  };

  useEffect(() => {}, [isMenuOpen]);

  const preferedTheme = useMediaQuery(
    { query: "(prefers-color-scheme: dark)" },
    undefined,
    (isSystemDark) => setIsDark(isSystemDark)
  );

  const toggleThemeHandler = (isLight) => {
    setIsDark(isLight);
  };

  return (
    <div className="app">
      <Header
        onToggleMenu={toggleMenuHandler}
        onCloseModal={closeModalHandler}
        isMenuOpen={isMenuOpen}
        isDark={isDark}
        onToggleTheme={toggleThemeHandler}
      />
      <Main isDark={isDark} />
      <Footer isDark={isDark}>
        <ContactForm />
      </Footer>
    </div>
  );
}

export default App;
