import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageSubTitle from "../../components/PageSubTitle";
import BgDecoration from "../../components/BgDecoration";
import { Disclosure } from "@headlessui/react";
import Paragraph from "../../components/Paragraph";
import Border from "../../components/Border";
import TitlePage from "../../components/TitlePage";

function ShowPokemon() {
  const [pokemon, setPokemon] = useState([]);
  const [ability, setAbility] = useState([]);
  const [type, setType] = useState([]);
  const [stat, setStat] = useState([]);
  const [abilityEffect, setAbilityEffect] = useState([]);
  const { name } = useParams();
  const elementColor = [
    {
      element: "fire",
      color: "bg-red-600",
      fontColor: "text-white",
    },
    {
      element: "grass",
      color: "bg-green-600",
      fontColor: "text-white",
    },
    {
      element: "poison",
      color: "bg-purple-600",
      fontColor: "text-white",
    },
    {
      element: "electric",
      color: "bg-yellow-600",
      fontColor: "text-white",
    },
    {
      element: "fairy",
      color: "bg-pink-700",
      fontColor: "text-white",
    },
    {
      element: "water",
      color: "bg-blue-700",
      fontColor: "text-white",
    },
    {
      element: "ice",
      color: "bg-sky-500",
      fontColor: "text-white",
    },
    {
      element: "fighting",
      color: "bg-orange-700",
      fontColor: "text-white",
    },
    {
      element: "flying",
      color: "bg-gray-500",
      fontColor: "text-white",
    },
    {
      element: "bug",
      color: "bg-green-800",
      fontColor: "text-white",
    },
    {
      element: "dark",
      color: "bg-slate-800",
      fontColor: "text-white",
    },
    {
      element: "normal",
      color: "bg-purple-500",
      fontColor: "text-white",
    },
    {
      element: "ghost",
      color: "bg-blue-700",
      fontColor: "text-white",
    },
    {
      element: "ground",
      color: "bg-orange-700",
      fontColor: "text-white",
    },
    {
      element: "rock",
      color: "bg-orange-900",
      fontColor: "text-white",
    },
    {
      element: "steel",
      color: "bg-lime-700",
      fontColor: "text-white",
    },
  ];

  useEffect(() => {
    const showPoke = async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${name}`
        );
        const data = await response.json();
        setPokemon(data);
        setAbility(data.abilities);
        setType(data.types);
        setStat(data.stats);
        console.log(stat);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    showPoke();
  }, []);

  useEffect(() => {
    const showAbilities = async (abilityName) => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/ability/${abilityName}`
        );
        const data = await response.json();
        setAbilityEffect((state) => [...state, data]);
      } catch (error) {
        console.log(error);
      }
    };
    ability.forEach((element) => {
      showAbilities(element["ability"].name);
    });
  }, [ability]);
  return (
    <>
      <section>
        <BgDecoration data={pokemon.id} />
        <div className="flex items-center gap-5">
          <div className="bg-th-blue-dark rounded-full w-[75px] h-[75px]">
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
              className="rounded-full w-full h-full object-cover"
              loading="lazy"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-bold uppercase text-3xl">{pokemon.name}</p>
          </div>
        </div>
      </section>

      {/* Pokemon information */}
      <section>
        <div className="mt-[5rem]">
          <TitlePage>Information</TitlePage>
        </div>
        <div className="my-[3rem] md:mx-[10rem]">
          <PageSubTitle>
            <span className="text-th-cream">Pokemon </span>Profile
          </PageSubTitle>
          <div className="mt-5">
            <div className="bg-th-blue-dark/60 p-5 rounded-lg w-full shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {/* details */}
                <div className="flex flex-col order-2 md:order-1 md:w-full col-span-3 md:col-span-1">
                  <div className="flex flex-col text-lg leading-3 my-2">
                    <p className="font-bold text-2xl text-center md:text-start capitalize">
                      {pokemon.name}
                    </p>
                  </div>
                  <div className="flex flex-col text-lg leading-3 my-2">
                    <p className="font-light text-sm">Height</p>
                    <p className="font-bold text-xl">{pokemon.height}</p>
                  </div>
                  <div className="flex flex-col text-lg leading-3 my-2">
                    <p className="font-light text-sm">Weight</p>
                    <p className="font-bold text-xl">{pokemon.weight}</p>
                  </div>
                  <div className="flex flex-col text-lg my-2 gap-2">
                    <p className="font-light text-sm">Type</p>
                    <div className="flex gap-2">
                      {elementColor.map((data) =>
                        type.map((i) =>
                          data.element === i["type"].name ? (
                            <p
                              className={`px-3 rounded-lg capitalize ${
                                data.element === i["type"].name && data.color
                              } ${data.fontColor}`}
                            >
                              {i["type"].name}
                            </p>
                          ) : null
                        )
                      )}
                    </div>
                  </div>
                </div>

                {/* images */}
                <div className="flex flex-col justify-center items-center order-1 md:order-2 md:w-full col-span-3 md:col-span-1">
                  <div className="w-[250px] h-[250px]">
                    <img
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
                      alt=""
                      className="object-contain w-full h-full"
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 items-center gap-2 order-last justify-center md:w-full col-span-3 md:col-span-1">
                  <div className="flex flex-col text-lg leading-3 my-2 col-span-2">
                    <p className="font-bold text-2xl  capitalize">Base Stats</p>
                  </div>
                  {stat.map((item) => (
                    <div className="flex flex-col text-lg leading-3 my-2">
                      <p className="font-light text-sm capitalize">
                        {item["stat"].name}
                      </p>
                      <p className="font-bold text-xl">{item.base_stat}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ability */}
      <section>
        <div className="my-5">
          <Border />
        </div>
        <div className="my-2">
          <TitlePage>Ability</TitlePage>
        </div>
        <div className="my-[3rem] md:mx-[10rem]">
          {/* abiilites */}
          <PageSubTitle>
            <span className="text-th-cream">List </span>Abilities
          </PageSubTitle>
          {ability.map((item, i) => (
            <div className="mt-5" key={i}>
              <Disclosure>
                <Disclosure.Button className="bg-th-sky-dark/75 w-full text-start font-bold text-md p-3">
                  {item["ability"].name}
                </Disclosure.Button>
                {abilityEffect.map((data, index) =>
                  data.name === item["ability"].name
                    ? data.effect_entries.map((language, no) =>
                        language.language["name"] === "en" ? (
                          <>
                            <Disclosure.Panel
                              className="bg-th-blue-dark p-5"
                              key={index}
                            >
                              <div className="bg-th-darken p-5">
                                <h5 className="font-bold text-2xl capitalize text-th-blue">
                                  Effect
                                </h5>
                                <Paragraph>{language.effect}</Paragraph>
                              </div>
                            </Disclosure.Panel>
                            <Disclosure.Panel className="bg-th-blue-dark p-5">
                              <div className="bg-th-darken p-5">
                                <h5 className="font-bold text-2xl capitalize text-th-cream">
                                  Short Effect
                                </h5>
                                <Paragraph>{language.short_effect}</Paragraph>
                              </div>
                            </Disclosure.Panel>
                          </>
                        ) : null
                      )
                    : ""
                )}
              </Disclosure>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default ShowPokemon;
