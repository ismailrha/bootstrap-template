import React from "react";
import Button from "components/common/Button";
const Header = ({ title }) => {
  return (
    <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
      <h5 className="my-0 mr-md-auto font-weight-normal">{title}</h5>
      <nav className="my-2 my-md-0 mr-md-3">
        <a className="p-2 text-dark" href="#">
          Features
        </a>
        <a className="p-2 text-dark" href="#">
          Enterprise
        </a>
        <a className="p-2 text-dark" href="#">
          Support
        </a>
        <a className="p-2 text-dark" href="#">
          Pricing
        </a>
      </nav>
      <Button title="Sign up" styles="btn btn-outline-primary" />
    </div>
  );
};

export default Header;
