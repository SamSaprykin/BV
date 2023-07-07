import React, { useState } from "react";
import { ThemeToggler } from "gatsby-plugin-dark-mode";
import { Link } from "gatsby";
import Clock from "react-live-clock";
import IconsLibrary from "./bvIcons";
import { isBrowser } from "../utils";

const NavBar = {
  navItems: [
    {
      name: "Cases",
      url: "/cases",
    },
    {
      name: "What we do",
      url: "/what-we-do",
    },
    {
      name: "Who we are",
      url: "/who-we-are",
    },
    {
      name: "Contact",
      url: "/contact",
    },
  ],
  smallItems: [
    {
      name: "Journal",
      url: "/journal",
    },
    {
      name: "Careers",
      url: "/careers",
    },
    {
      name: "Whitelabel",
      url: "/whitelabel",
    },
  ],
};

const Menu = ({ menuData, menuOpen }) => {
  const result = Intl.DateTimeFormat()
    .resolvedOptions()
    .timeZone.replace(/^.*\//, "");
  return (
    <div
      className={`rounded-3xl bg-[#1a1a1a] absolute z-10 top-0 right-0 -mr-[15px] -mt-[15px] w-[420px] flex flex-col justify-start ease-in-out duration-300  ${
        menuOpen ? "opacity-1 p-[40px]" : "opacity-0 p-[32px]"
      }`}
    >
      <div className="flex flex-col mb-[33px]">
        {menuData.navItems.map((navItem) => {
          return (
            <Link
              to={navItem.url}
              key={navItem.name}
              className="text-white text-[42px] leading-none mb-3 hover:opacity-80"
            >
              {navItem.name}
            </Link>
          );
        })}
      </div>
      <div className="flex flex-col mb-[85px]">
        {menuData.smallItems.map((navItem) => {
          return (
            <Link
              to={navItem.url}
              key={navItem.name}
              className="text-white text-[24px] leading-none mb-3 hover:opacity-80"
            >
              {navItem.name}
            </Link>
          );
        })}
      </div>
      <IconsLibrary type="moon" />
      <div className="flex justify-between mt-[30px]">
        <span className="text-[#a5a5a5] text-[14px]">{result}</span>
        <Clock
          className="text-[#a5a5a5] text-[14px]"
          format={"HH:mm:ss"}
          ticking={true}
        />
      </div>
    </div>
  );
};

const Header = ({ location }) => {
  const [menuOpen, setMenuOpen] = useState(false);
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
        <div className="relative">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <IconsLibrary
              type="menu-icon"
              fill={location.pathname === "/" ? "black" : "#ebebeb"}
              fillChild={location.pathname === "/" ? "white" : "#black"}
              className={`relative z-20 ease-in-out duration-300 ${
                menuOpen ? "rotate-45" : "rotate-0"
              }`}
            />
          </button>
          <Menu menuOpen={menuOpen} menuData={NavBar} />
        </div>
      </div>
      <div
        className={`bg-[#1a1a1a] block absolute right-0 top-0 w-screen h-screen ease-in-out duration-300 ${
          menuOpen ? "opacity-25" : "opacity-0"
        }`}
      />
    </div>
  );
};

export default Header;
