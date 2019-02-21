import React from "react";
import classNames from "classnames";

import Button from "components/common/Button";

const PriceCard = ({ element, index }) => {
  const { title, price, isYearly, description, buttonDescription } = element;
  console.log(title);
  return (
    <div className="card mb-4 shadow-sm">
      <div className="card-header">
        <h4 className="my-0 font-weight-normal">{title}</h4>
      </div>
      <div className="card-body">
        <h1 className="card-title pricing-card-title">
          ${price}{" "}
          <small className="text-muted">/{isYearly ? " y" : " mo"}</small>
        </h1>
        <ul className="list-unstyled mt-3 mb-4">
          {description.map((element, index) => (
            <li key={index}>{element}</li>
          ))}
        </ul>
        <Button
          title={buttonDescription.title}
          styles={classNames(
            "btn btn-lg btn-block ",
            index ? " btn-primary" : "btn-outline-primary"
          )}
        />
      </div>
    </div>
  );
};

export default PriceCard;
