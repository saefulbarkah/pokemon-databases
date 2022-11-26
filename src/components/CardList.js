import React from "react";
import Card from "./Card";

const CardList = (props) => {
  return (
    <div className={`grid grid-cols-2 md:grid-cols-6 gap-5 mt-5 items-stretch`}>
      {props.items.map((data, i) => (
        <Card key={i} name={data.name} id={i + 1} />
      ))}
    </div>
  );
};

export default CardList;
