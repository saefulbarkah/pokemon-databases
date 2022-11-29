import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <Link
      className={`bg-th-blue-dark p-3.5 rounded-lg transition-opacity duration-300`}
      to={props.name}
    >
      <div className="flex flex-col items-center">
        <div className="w-full flex justify-center h-[75px]">
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${props.id}.svg`}
            alt=""
            className="w-[75px]"
            loading="lazy"
          />
        </div>
        <h4 className="font-bold capitalize mt-3 text-lg">{props.name}</h4>
      </div>
    </Link>
  );
};

export default Card;
