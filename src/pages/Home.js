import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import TitlePage from "../components/TitlePage";
import "react-lazy-load-image-component/src/effects/black-and-white.css";
import Title from "../components/Title";

function Home() {
  return (
    <>
      <Title name="Pokemon Database" />
      <section className="">
        <div className="fixed opacity-20 md:left-[60%] left-[2%] bottom-[0%] md:bottom-[25%] -z-[50] select-none md:h-[450px]">
          <LazyLoadImage
            src={`https://i.pinimg.com/originals/35/ba/a2/35baa23613f80db94564d2fe5c1ecce6.png`}
            alt=""
            className="w-[400px] md:w-[700px] select-none pointer-events-none"
            effect="black-and-white"
          />
        </div>
        <TitlePage>Welcome to Pokémon Databases</TitlePage>
      </section>
    </>
  );
}

export default Home;
