import { useEffect } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import "./ToggleTheme.css";

const defaultProperties = {
  dark: {
    circle: {
      r: 9,
    },
    mask: {
      cx: "50%",
      cy: "23%",
    },
    svg: {
      transform: "rotate(70deg)",
    },
    lines: {
      opacity: 0,
    },
  },
  light: {
    circle: {
      r: 5,
    },
    mask: {
      cx: "100%",
      cy: "0%",
    },
    svg: {
      transform: "rotate(90deg)",
    },
    lines: {
      opacity: 1,
    },
  },
  springConfig: { mass: 4, tension: 250, friction: 35 },
};

const ToggleTheme = ({ isDark, onToggleTheme }) => {
  useEffect(() => {
    if (isDark) document.querySelector(".app").classList.add("dark");
    else document.querySelector(".dark").classList.remove("dark");
  }, [isDark]);

  return (
    <DarkModeSwitch
      className="theme"
      animationProperties={defaultProperties}
      size={17}
      checked={isDark}
      onChange={onToggleTheme}
    />
  );
};

export default ToggleTheme;
