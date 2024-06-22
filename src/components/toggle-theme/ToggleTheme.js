import { useEffect, useState } from "react";
import Toggle from "react-toggle";
import { useMediaQuery } from "react-responsive";
import "./ToggleTheme.css";

const ToggleTheme = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) document.body.classList.add("dark");
    else document.body.classList.remove("dark");
  }, [isDark]);

  const preferedTheme = useMediaQuery(
    { query: "(prefers-color-scheme: dark)" },
    undefined,
    (isSystemDark) => setIsDark(isSystemDark)
  );

  const changeHandler = (event) => {
    console.log(event.target.checked);
    setIsDark(event.target.checked);
  };

  return (
    <Toggle
      checked={isDark}
      onChange={changeHandler}
      icons={{ checked: "🌙", unchecked: "☀️" }}
      aria-label="Dark mode toggle"
    />
  );
};

export default ToggleTheme;
