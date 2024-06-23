import { useEffect, useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useMediaQuery } from "react-responsive";
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

const ToggleTheme = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) document.querySelector(".app").classList.add("dark");
    else document.querySelector(".dark").classList.remove("dark");
  }, [isDark]);

  const preferedTheme = useMediaQuery(
    { query: "(prefers-color-scheme: dark)" },
    undefined,
    (isSystemDark) => setIsDark(isSystemDark)
  );

  const changeHandler = (isLight) => {
    console.log(isLight);
    setIsDark(isLight);
  };

  return (
    <DarkModeSwitch
      className="theme"
      animationProperties={defaultProperties}
      size={17}
      checked={isDark}
      onChange={changeHandler}
    />
  );
};

export default ToggleTheme;
