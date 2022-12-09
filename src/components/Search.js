import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";

const Search = (props) => {
  return (
    <div className={`flex shadow-lg ${props.className}`}>
      <div className="bg-th-red flex items-center p-2 rounded-l-lg absolute z-[1]">
        <BiSearchAlt2 className="font-bold text-2xl" />
      </div>
      <input
        type="text"
        className="rounded-lg w-full py-2 pl-[3rem] pr-[10px] outline-none bg-th-sky-dark/50
			focus:outline focus:outline-th-red backdrop-blur-sm transition-all outline"
        name="name_pokemon"
        placeholder={props.placeHolder}
        id=""
        onChange={props.onChange}
      />
    </div>
  );
};

export default Search;
