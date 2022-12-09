import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import CardLoading from "../components/CardLoading";
import PageSubTitle from "../components/PageSubTitle";
import Paragraph from "../components/Paragraph";
import TitlePage from "../components/TitlePage";

function Berries() {
  const [berries, setBerries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getBerries() {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/berry/?limit=9999`
        );
        const data = await response.json();
        setBerries(data.results);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    getBerries();
  }, []);
  return (
    <section>
      <div className="mt-5">
        <TitlePage>Berries</TitlePage>
        <div className="my-2">
          <Paragraph>
            Berries were introduced in Generation II to take advantage of the
            newly introduced held items feature. Pokémon do not know how to use
            held artificial healing items, such as Potions and Full Heals, but
            they can use held Berries.
          </Paragraph>
        </div>
      </div>

      {/* list berries */}
      <div className="mt-[5rem]">
        <PageSubTitle>
          <span className="text-th-cream">List </span>
          <span>Berry</span>
        </PageSubTitle>
        <div
          className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5 items-stretch`}
        >
          {isLoading ? (
            <CardLoading count={12} />
          ) : (
            berries.map((data, i) => (
              <Card
                key={i}
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${data.name}-berry.png`}
                name={data.name}
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
}

export default Berries;
