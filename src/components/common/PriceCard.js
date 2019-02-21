import React from "react";
import classNames from "classnames";

import Button from "components/common/Button";

const PriceCard = ({ price, index }) => {
  return (
    <div className="card mb-4 shadow-sm">
      <div className="card-header">
        <h4 className="my-0 font-weight-normal">{price.title}</h4>
      </div>
      <div className="card-body">
        <h1 className="card-title pricing-card-title">
          ${price.price}{" "}
          <small className="text-muted">/{price.isYearly ? " y" : " mo"}</small>
        </h1>
        <ul className="list-unstyled mt-3 mb-4">
          {price.description.map((element, index) => (
            <li key={index}>{element}</li>
          ))}
        </ul>
        <Button
          title={price.buttonDescription}
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
