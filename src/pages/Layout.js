import React from "react";
import Header from "components/includes/Header";
import Footer from "components/includes/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header title="Company name" />
      <div className="container">
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
