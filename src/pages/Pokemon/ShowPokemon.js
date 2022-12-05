import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import PageSubTitle from "../../components/PageSubTitle";
import BgDecoration from "../../components/BgDecoration";
import Border from "../../components/Border";
import TitlePage from "../../components/TitlePage";
import "react-lazy-load-image-component/src/effects/opacity.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { BsFillCaretLeftFill } from "react-icons/bs";
import Dropdown from "../../components/Dropdown";
import DropdownItem from "../../components/DropdownItem";
import ChangeColorNumber from "../../components/ChangeColorNumber";

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
      color: "bg-purple-800",
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
    async function showPoke() {
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
    }
    showPoke();
    // eslint-disable-next-line
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
    // eslint-disable-next-line
  }, [ability]);
  return (
    <>
      <section className="my-5 flex items-center">
        <NavLink
          className="transition-all py-2 text-th-blue border-b-2 border-transparent hover:border-th-blue flex gap-1 items-center"
          to="/pokemon"
        >
          <BsFillCaretLeftFill className="text-[2rem]" />
          <span className="text-xl">All Pokemon</span>
        </NavLink>
      </section>

      <section className="my-5">
        <BgDecoration data={pokemon.id} />
        <div className="flex items-center gap-5">
          <div className="bg-th-blue-dark rounded-full  flex items-center">
            <LazyLoadImage
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
              className="rounded-full w-[90px] h-[90px] object-cover bg-center"
              alt=""
              effect="opacity"
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
        <div className="my-[3rem] lg:mx-[10rem]">
          <PageSubTitle>
            <span className="text-th-cream">Pokemon </span>Profile
          </PageSubTitle>
          <div className="mt-5">
            <div className="bg-th-blue-dark/80 p-5 shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
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
                    <p className="font-bold text-xl">
                      {pokemon.weight}
                      <span className="font-light text-sm"> lbs.</span>
                    </p>
                  </div>
                  <div className="flex flex-col text-lg my-2 gap-2">
                    <p className="font-light text-sm">Type</p>
                    <div className="grid grid-cols-3 md:grid-cols-2 gap-2 text-center items-stretch">
                      {elementColor.map((data, key) =>
                        type.map((i) =>
                          data.element === i["type"].name ? (
                            <p
                              className={`rounded-lg capitalize  ${
                                data.element === i["type"].name && data.color
                              } ${data.fontColor}`}
                              key={key}
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
                  <div className="w-[200px] h-[200px] flex justify-center">
                    <LazyLoadImage
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
                      alt=""
                      className="object-contain w-full h-full bg-center"
                      effect="opacity"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 items-center gap-2 order-last justify-center md:w-full col-span-3 md:col-span-1">
                  <div className="flex flex-col text-lg leading-3 my-2 col-span-2">
                    <p className="font-bold text-2xl  capitalize">Base Stats</p>
                  </div>
                  {stat.map((item, key) => (
                    <div
                      className="flex flex-col text-lg leading-3 my-2"
                      key={key}
                    >
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
        <Border />
        <div className="my-2">
          <TitlePage>Ability</TitlePage>
        </div>
        <div className="my-[3rem] lg:mx-[10rem]">
          {/* abiilites */}
          <PageSubTitle>
            <span className="text-th-cream capitalize">ability </span>{" "}
            <span className="capitalize">list</span>
          </PageSubTitle>
          {ability.map((item, i) => (
            <div className="mt-5" key={i}>
              <Dropdown title={item["ability"].name.split("-").join(" ")}>
                {abilityEffect.map((data, index) =>
                  data.name === item["ability"].name
                    ? data.effect_entries.map((ability, no) =>
                        ability.language["name"] === "en" ? (
                          <React.Fragment key={no}>
                            <DropdownItem
                              title="Effect"
                              className="text-th-blue"
                            >
                              <ChangeColorNumber
                                text={ability.effect}
                                hexColor="#377DCB"
                                regex={/([0-9]+.)/g}
                              />
                            </DropdownItem>
                            <DropdownItem
                              title="Short Effect"
                              className="text-th-cream"
                            >
                              <ChangeColorNumber
                                text={ability.short_effect}
                                hexColor="#377DCB"
                                regex={/([0-9]+.)/g}
                              />
                            </DropdownItem>
                          </React.Fragment>
                        ) : null
                      )
                    : ""
                )}
              </Dropdown>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default ShowPokemon;
