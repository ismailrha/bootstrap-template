import React from "react";
import HeroBlock from "components/common/HeroBlock";
import PriceCard from "components/common/PriceCard";
import Layout from "pages/Layout";
import prices from "Mocked/data";

const App = () => {
  const displayPrices = prices.map((element, index) => (
    <PriceCard key={index} price={element} index={index} />
  ));

  return (
    <>
      <Layout>
        <HeroBlock />
        <div className="card-deck mb-3 text-center">{displayPrices}</div>
      </Layout>
    </>
  );
};

export default App;
