import React, { useEffect, useState } from "react";
import BgDecoration from "../components/BgDecoration";
import Card from "../components/Card";
import CardLoading from "../components/CardLoading";
import PageSubTitle from "../components/PageSubTitle";
import Paragraph from "../components/Paragraph";
import TitlePage from "../components/TitlePage";
import Search from "../components/Search";
import { useMemo } from "react";
import Title from "../components/Title";

function Pokemon() {
  const [allPokemon, setAllPokemon] = useState([]);
  const [pokeid, setPokemonId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [searchPoke, setSearchPoke] = useState("");

  const getPokemon = useMemo(() => {
    if (!searchPoke) return allPokemon;
    return allPokemon.filter((item, i) => {
      return item.name.includes(searchPoke.toLowerCase());
    });
  }, [allPokemon, searchPoke]);

  const newObj = (obj) => {
    return obj.map((data, i) => {
      return setAllPokemon((prevState) => [
        ...prevState,
        { id: i + 1, name: data.name },
      ]);
    });
  };

  useEffect(() => {
    // fetch api
    const getPokemon = async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?limit=50`
        );
        const data = await response.json();
        newObj(data.results);
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
      setPokemonId(Math.floor(Math.random() * allPokemon.length) + 1);
    };
    randomizeNumber();
    // eslint-disable-next-line
  }, [allPokemon]);

  return (
    <>
      <Title name="Pokemon Database | Pokemon" />
      <section>
        <BgDecoration
          path={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokeid}.svg`}
        />
        <div className="mt-5">
          <TitlePage>Pokemon</TitlePage>
        </div>
        <Paragraph>
          Pokémon are mysterious creatures filled with many secrets. Some
          Pokémon live alongside humans and some live in the wild in grassy
          fields, caves, or the sea, but much about their ecology that remains
          unknown. One of their main features is that they can be caught using a
          Poké Ball, which allows them to be carried around.
        </Paragraph>

        <div className="mt-[5rem]">
          <div className="xs:flex-col md:flex md:gap-5 md:justify-between items-center">
            <div className="flex-1">
              <PageSubTitle>
                <span className="text-th-cream">List </span>
                Pokemon
              </PageSubTitle>
            </div>
            <Search
              placeHolder="Search pokemon...."
              className="my-4 md:my-0"
              onChange={(e) => setSearchPoke(e.target.value)}
            />
          </div>
        </div>

        {/* card */}
        <>
          {isLoading ? (
            <div
              className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5 items-stretch`}
            >
              <CardLoading count={12} />
            </div>
          ) : getPokemon.length !== 0 ? (
            <div
              className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5 items-stretch`}
            >
              {getPokemon.map((data, i) => (
                <Card
                  key={i}
                  name={data.name}
                  id={i + 1}
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`}
                />
              ))}
            </div>
          ) : (
            <div className="flex justify-center my-[2rem] md:my-[5rem]">
              <p className="text-2xl capitalize">Sorry! no result found</p>
            </div>
          )}
        </>
      </section>
    </>
  );
}

export default Pokemon;
