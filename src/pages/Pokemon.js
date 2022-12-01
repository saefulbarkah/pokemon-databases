import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import BgDecoration from "../components/BgDecoration";
import Card from "../components/Card";
import CardLoading from "../components/CardLoading";
import PageSubTitle from "../components/PageSubTitle";
import Paragraph from "../components/Paragraph";
import TitlePage from "../components/TitlePage";

function Pokemon() {
  const [pokemon, setPokemon] = useState([]);
  const [pokeid, setPokemonId] = useState();
  const [limit, setLimit] = useState(12);

  const handleLoadMore = () => {
    console.log("loaded");
    setLimit((prevState) => prevState + 12);
  };

  useEffect(() => {
    // fetch api
    const getPokemon = async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?limit=${limit}`
        );
        const data = await response.json();
        setPokemon(data.results);
        console.log(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    getPokemon();
  }, [limit]);

  useEffect(() => {
    setPokemonId(Math.floor(Math.random() * pokemon.length + 1));
  }, [pokemon.length]);

  return (
    <section>
      <BgDecoration data={pokeid} />
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
        <PageSubTitle>
          <span className="text-th-cream">List </span>
          Pokemon
        </PageSubTitle>
      </div>

      {/* card */}
      <InfiniteScroll
        dataLength={pokemon.length}
        next={handleLoadMore}
        hasMore={true || false}
        loader={
          <div
            className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5 items-stretch`}
          >
            <CardLoading count={12} />
          </div>
        }
        className="h-screen "
      >
        <div
          className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5 items-stretch`}
        >
          {pokemon.map((data, i) => (
            <Card key={i} name={data.name} id={i + 1} />
          ))}
        </div>
      </InfiniteScroll>
    </section>
  );
}

export default Pokemon;
