import React, { useEffect, useState } from "react";
import BgDecoration from "../components/BgDecoration";
import Card from "../components/Card";
import CardLoading from "../components/CardLoading";
import PageSubTitle from "../components/PageSubTitle";
import Paragraph from "../components/Paragraph";
import TitlePage from "../components/TitlePage";
import { BiSearchAlt2 } from "react-icons/bi";

function Pokemon() {
  const [allPokemon, setAllPokemon] = useState([]);
  const [pokeid, setPokemonId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleSearchname = (event) => {
    const namePokemon = event.target.value;
    console.log(namePokemon);
  };

  useEffect(() => {
    // fetch api
    const getPokemon = async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?limit=250&offset=0`
        );
        const data = await response.json();
        setAllPokemon(data.results);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getPokemon();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const randomizeNumber = () => {
      setPokemonId(Math.floor(Math.random() * 200) + 1);
    };
    randomizeNumber();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const getAllPokemon = async () => {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon/?limit=1154"
        );
        const data = await response.json();
        setAllPokemon(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    getAllPokemon();
    // eslint-disable-next-line
  }, []);
  return (
    <section>
      <BgDecoration
        path={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokeid}.svg`}
      />
      <div className="mt-5">
        <TitlePage>Pokemon</TitlePage>
      </div>
      <Paragraph>
        Pokémon are mysterious creatures filled with many secrets. Some Pokémon
        live alongside humans and some live in the wild in grassy fields, caves,
        or the sea, but much about their ecology that remains unknown. One of
        their main features is that they can be caught using a Poké Ball, which
        allows them to be carried around.
      </Paragraph>

      <div className="mt-[5rem]">
        <div className="xs:flex-col md:flex md:gap-5 md:justify-between items-center">
          <div className="flex-1">
            <PageSubTitle>
              <span className="text-th-cream">List </span>
              Pokemon
            </PageSubTitle>
          </div>
          <div className="flex shadow-lg my-4 md:my-0">
            <div className="bg-th-red flex items-center p-2 rounded-l-lg absolute z-[1]">
              <BiSearchAlt2 className="font-bold text-2xl" />
            </div>
            <input
              type="text"
              className="rounded-lg w-full py-2 pl-[3rem] pr-[10px] outline-none bg-th-sky-dark/50
              focus:outline focus:outline-th-red backdrop-blur-sm transition-all outline"
              name="name_pokemon"
              placeholder="Search Pokemon"
              id=""
              onChange={handleSearchname}
            />
          </div>
        </div>
      </div>

      {/* card */}
      <>
        <div
          className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5 items-stretch`}
        >
          {isLoading ? (
            <CardLoading count={12} />
          ) : (
            allPokemon.map((data, i) => (
              <Card
                key={i}
                name={data.name}
                id={i + 1}
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
                  i + 1
                }.svg`}
              />
            ))
          )}
        </div>
      </>
    </section>
  );
}

export default Pokemon;
