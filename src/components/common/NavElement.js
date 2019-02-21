import React from "react";
import { Link } from "react-router-dom";
const NavElement = ({ title, styles = "p-2 text-dark", link = "#" }) => {
  return (
    <Link to={link} className={styles}>
      {title}
    </Link>
  );
};

export default NavElement;
