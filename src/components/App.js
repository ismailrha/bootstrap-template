import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import HeroBlock from "components/common/HeroBlock";
import PriceCard from "components/common/PriceCard";
import Layout from "pages/Layout";
import Features from "pages/Features";
import SignUp from "pages/SignUp";
import { prices, descriptions } from "Mocked/data";

const App = () => {
  const displayPrice = () => {
    return prices.map((element, index) => (
      <PriceCard key={index} element={element} index={index} />
    ));
  };

  const heroBlock = title => {
    return descriptions.map((element, index) =>
      element.title === title ? (
        <HeroBlock key={index} description={element} />
      ) : (
        ""
      )
    );
  };

  const displayHeroBlock = descriptions.map((element, index) => (
    <Route
      key={index}
      path={"/" + element.title}
      component={() => heroBlock(element.title)}
    />
  ));
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Route exact path="/" component={() => heroBlock("Home")} />
          {displayHeroBlock}

          <div className="card-deck mb-3 text-center">
            <Route path="/Features" component={Features} />
            <Route path="/Prices" component={displayPrice} />
            <Route path="/SignUp" component={SignUp} />
          </div>
        </Layout>
      </BrowserRouter>
    </>
  );
};

export default App;
