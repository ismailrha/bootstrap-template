import React from "react";

import { Link } from "react-router-dom";

import Button from "components/common/Button";
import NavElement from "components/common/NavElement";

const Header = ({ title }) => {
  return (
    <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
      <h5 className="my-0 mr-md-auto font-weight-normal">
        <Link to="/" className="p-2 text-dark">
          {title}
        </Link>
      </h5>
      <nav className="my-2 my-md-0 mr-md-3">
        <NavElement title="Features" link="/Features" />
        <NavElement title="Enterprise" link="/Enterprise" />
        <NavElement title="Support" link="/Support" />
        <NavElement title="Pricing" link="/Prices" />
      </nav>
      <Link to="/SignUp">
        <Button title="Sign up" styles="btn btn-outline-primary" />
      </Link>
    </div>
  );
};

export default Header;
