import React from "react";
import { ThemeToggler } from "gatsby-plugin-dark-mode";
import { Link } from "gatsby";
import IconsLibrary from "./bvIcons";

const Button = () => {
  return (
    <div className="fixed top-0 flex justify-between items-center px-10 pt-10 w-full z-10">
      <Link to="/">
        <IconsLibrary type="main-logo" />
      </Link>

      <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <label>
            <input
              type="checkbox"
              onChange={(e) => toggleTheme(e.target.checked ? "dark" : "light")}
              checked={theme === "dark"}
            />{" "}
            Dark mode
          </label>
        )}
      </ThemeToggler>
      <IconsLibrary type="menu-icon" />
    </div>
  );
};

export default Button;
