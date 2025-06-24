import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../reducers/theme";
import "./theme.css";
import { MoonIcon, SunIcon } from "./themeIcons";

function ThemeSwitcher() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark-theme");
    } else {
      document.documentElement.classList.remove("dark-theme");
    }
  }, [theme]);

  return (
    <button
      className={`theme-switcher ${theme}`}
      onClick={() => dispatch(toggleTheme())}
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <>
          <MoonIcon className="icon" />
        </>
      ) : (
        <>
          <SunIcon className="icon" />
        </>
      )}
    </button>
  );
}

export default ThemeSwitcher;
