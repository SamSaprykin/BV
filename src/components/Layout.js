import React from "react";
import Footer from "./Footer";

import Header from "./Header";

const Layout = ({ children, location }) => {
  return (
    <div
      style={{
        backgroundColor: "var(--bg)",
        color: "var(--textNormal)",
        transition: "color 0.2s ease-out, background 0.2s ease-out",
      }}
      className="w-full h-full"
    >
      <Header location={location} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
