import Header from "./components/header/Header";
import Main from "./components/main/Main";
import "./App.css";
import ToggleTheme from "./components/toggle-theme/ToggleTheme";

function App() {
  return (
    <div>
      <Header />
      <Main />
      <ToggleTheme />
    </div>
  );
}

export default App;
