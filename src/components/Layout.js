import React from "react";

import "../styles/layout.css";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "var(--bg)",
        color: "var(--textNormal)",
        transition: "color 0.2s ease-out, background 0.2s ease-out",
      }}
      className="w-full h-full"
    >
      <Header />
      {children}
    </div>
  );
};

export default Layout;
