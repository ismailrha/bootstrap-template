import React from "react";
import classNames from "classnames";
const Button = ({ title, styles }) => {
  return (
    <button type="button" className={styles}>
      {title}
    </button>
  );
};

export default Button;
