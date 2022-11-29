import React from "react";

export const SidebarTitle = () => {
  return (
    <div className="pb-5 flex flex-col items-center">
      <img
        src="/assets/logo.webp"
        alt=""
        loading="lazy"
        className="w-[100px]"
      />
      <p className="text-xl font-bold">Pokémon Database</p>
    </div>
  );
};
