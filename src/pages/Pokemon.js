import React, { useEffect, useState } from "react";
import BgDecoration from "../components/BgDecoration";
import CardList from "../components/CardList";
import PageSubTitle from "../components/PageSubTitle";
import Paragraph from "../components/Paragraph";
import TitlePage from "../components/TitlePage";

function Pokemon() {
  const [pokemon, setPokemon] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // fetch api
    const getPokemon = async () => {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
        const data = await response.json();
        setPokemon(data.results);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getPokemon();
  }, []);

  return (
    <section>
      <BgDecoration data={pokemon} />
      <TitlePage>Pokemon</TitlePage>
      <Paragraph>
        Pokémon are mysterious creatures filled with many secrets. Some Pokémon
        live alongside humans and some live in the wild in grassy fields, caves,
        or the sea, but much about their ecology that remains unknown. One of
        their main features is that they can be caught using a Poké Ball, which
        allows them to be carried around.
      </Paragraph>

      <PageSubTitle>
        <span className="text-th-cream">List </span>
        Pokemon
      </PageSubTitle>

      {/* card */}
      <CardList items={pokemon} loading={isLoading} />
    </section>
  );
}

export default Pokemon;
