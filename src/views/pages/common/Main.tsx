import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// const OtherComponent = React.lazy(() => import('./OtherComponent'));
const Home = React.lazy(() => import("../home/Home"));
const Main = () => {
  return (
    <div className="container mx-auto">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/product/:id" element={{}}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Main;
