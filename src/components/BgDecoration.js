import React, { useEffect, useState } from "react";

const BgDecoration = (props) => {
  const [pokeid, setPokemonId] = useState();
  useEffect(() => {
    let id = Math.floor(Math.random() * props.data.length + 1);
    setPokemonId(id);
  }, [props.data]);
  return (
    <div className="fixed opacity-10 md:left-[60%] left-[2%] bottom-[25%] md:bottom-[25%] -z-[50] select-none md:h-[450px]">
      {pokeid !== undefined && (
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokeid}.svg`}
          alt=""
          className="w-[400px] md:w-[700px] select-none pointer-events-none"
        />
      )}
    </div>
  );
};

export default BgDecoration;
