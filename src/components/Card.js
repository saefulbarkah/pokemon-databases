import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import "react-lazy-load-image-component/src/effects/opacity.css";

const Card = (props) => {
  return (
    <Link
      className={`bg-th-blue-dark p-3.5 rounded-lg transition-opacity duration-300`}
      to={props.name}
    >
      <div className="flex flex-col items-center">
        <div className="w-full flex justify-center h-[75px]">
          <LazyLoadImage
            src={props.src}
            alt=""
            className="w-[75px] h-[75px]"
            effect="opacity"
          />
        </div>
        <h4 className="font-bold capitalize mt-3 text-lg">{props.name}</h4>
      </div>
    </Link>
  );
};

export default Card;
