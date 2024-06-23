import { useEffect, useState } from "react";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import "./App.css";

function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenuHandler = function () {
    setMenuOpen((prevState) => !prevState);
  };

  const closeModalHandler = function () {
    setMenuOpen((prevState) => !prevState);
  };

  useEffect(() => {}, [isMenuOpen]);

  return (
    <div className="app">
      <Header
        onToggleMenu={toggleMenuHandler}
        onCloseModal={closeModalHandler}
        isMenuOpen={isMenuOpen}
      />
      <Main />
    </div>
  );
}

export default App;
