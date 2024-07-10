import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import "./App.css";
import Footer from "./components/footer/Footer";
import ContactForm from "./components/ContactForm/ContactForm";
import ToTop from "./components/to-top/ToTop";

function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const toggleMenuHandler = function () {
    setMenuOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape" && isMenuOpen)
        setMenuOpen((prevState) => !prevState);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  useMediaQuery(
    { query: "(prefers-color-scheme: light)" },
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
        onCloseModal={toggleMenuHandler}
        isMenuOpen={isMenuOpen}
        isDark={isDark}
        onToggleTheme={toggleThemeHandler}
      />
      <Main isDark={isDark} />
      <Footer isDark={isDark}>
        <ContactForm />
      </Footer>
      <ToTop />
    </div>
  );
}

export default App;
