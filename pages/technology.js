import React from "react";
import Header from "../components/Header/Header";
import TechnologyTab from "../components/technology/TechnologyTab";

const Technology = () => {
  return (
    <div className="technology">
      <Header />
      <h1 className="title-tech">
        <span>03</span> Space launch 101
      </h1>
      <TechnologyTab />
    </div>
  );
};

export default Technology;
