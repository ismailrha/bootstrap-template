import React from "react";

const Button = ({ title, styles }) => {
  return (
    <button type="button" className={styles}>
      {title}
    </button>
  );
};

export default Button;
