import React from "react";
import { ThemeToggler } from "gatsby-plugin-dark-mode";
import { Link } from "gatsby";
import IconsLibrary from "./bvIcons";
import { isBrowser } from "../utils";

const Header = ({ location }) => {
  console.log(location);

  let currentTheme;

  if (isBrowser) {
    currentTheme = window.localStorage.getItem("theme");
  }

  console.log(currentTheme);

  return (
    <div className="fixed top-0 flex justify-between items-center px-10 pt-10 w-full z-10">
      <Link to="/">
        <IconsLibrary
          fill={location.pathname === "/" ? "white" : "#40e640"}
          type="main-logo"
        />
      </Link>
      <div className="flex gap-2 items-center">
        <ThemeToggler>
          {({ theme, toggleTheme }) => (
            <label>
              <input
                type="checkbox"
                onChange={(e) =>
                  toggleTheme(e.target.checked ? "dark" : "light")
                }
                checked={theme === "dark"}
              />{" "}
              Dark mode
            </label>
          )}
        </ThemeToggler>
        <IconsLibrary
          type="menu-icon"
          fill={location.pathname === "/" ? "black" : "#ebebeb"}
          fillChild={location.pathname === "/" ? "white" : "#black"}
        />
      </div>
    </div>
  );
};

export default Header;
