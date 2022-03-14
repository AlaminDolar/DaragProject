import React from "react";
import Dslider from "../../components/custom/Dslider";
import ProductArray from "../../components/home/ProductArray";

const Home = () => {
  return (
    <main>
      <div className="py-20">
        <Dslider />
      </div>
      <div>
        <ProductArray />
      </div>
    </main>
  );
};

export default Home;
