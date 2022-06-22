import React from "react";
import { Card } from "../src/components/Home/Card";
import { data } from "../data";

const links = () => {
  return (
    <div>
      <h1 className="text-3xl mb-10 ml-10"> My Links </h1>
      <div className="grid grid-cols-4 ">
        {data.map((link) => (
          <Card key={link.id} link={link} />
        ))}
      </div>
    </div>
  );
};

export default links;
