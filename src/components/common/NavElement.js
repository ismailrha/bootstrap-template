import React from "react";

const NavElement = ({ title, styles = "p-2 text-dark", link = "#" }) => {
  return (
    <a href={link} className={styles}>
      {title}
    </a>
  );
};

export default NavElement;
