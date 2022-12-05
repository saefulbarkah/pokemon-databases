import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Card from "../components/Card";
import CardLoading from "../components/CardLoading";
import PageSubTitle from "../components/PageSubTitle";
import Paragraph from "../components/Paragraph";
import TitlePage from "../components/TitlePage";

function Berries() {
  const [berries, setBerries] = useState([]);
  const [limit, setLimit] = useState(12);
  const [isMore, setIsMore] = useState(true);

  const handleLoadMore = () => {
    setLimit((prevState) => prevState + 12);
    if (berries.length === 64) {
      setIsMore(false);
    }
  };

  useEffect(() => {
    async function getBerries() {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/berry/?limit=${limit}`
        );
        const data = await response.json();
        setBerries(data.results);
        console.log(data.results);
      } catch (error) {
        console.log(error);
      }
    }
    getBerries();
  }, [limit]);
  useEffect(() => {
    console.log(berries.length);
  });
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
        <InfiniteScroll
          dataLength={berries.length}
          next={handleLoadMore}
          hasMore={isMore}
          loader={
            <div
              className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5 items-stretch`}
            >
              <CardLoading count={12} />
            </div>
          }
          endMessage={<p className=" text-center mt-5">No more berry</p>}
        >
          <div
            className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5 items-stretch`}
          >
            {berries.map((data, i) => (
              <Card
                key={i}
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${data.name}-berry.png`}
                name={data.name}
              />
            ))}
          </div>
        </InfiniteScroll>
      </div>
    </section>
  );
}

export default Berries;
