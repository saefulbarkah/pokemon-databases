import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";

const BgDecoration = (props) => {
  return (
    <div className="fixed opacity-10 md:left-[60%] left-[2%] bottom-[25%] md:bottom-[25%] -z-[50] select-none md:h-[450px]">
      {props.data && (
        <LazyLoadImage
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${props.data}.svg`}
          alt=""
          effect="opacity"
          className="w-[400px] md:w-[700px] select-none pointer-events-none"
        />
      )}
    </div>
  );
};

export default BgDecoration;
