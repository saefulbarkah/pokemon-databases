import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import SidebarContext from "../context/sidebarContext";

const SidebarItems = (props) => {
  const { handleSidebar } = useContext(SidebarContext);
  return (
    <>
      <NavLink
        to={`${props.url}`}
        end
        className={({ isActive }) =>
          isActive
            ? "transition-all hover:bg-white/5 py-3 hover:font-bold hover:translate-x-2 hover:text-th-cream text-th-cream font-bold capitalize"
            : "transition-all hover:bg-white/5 py-3 hover:font-bold hover:translate-x-2 hover:text-th-cream capitalize"
        }
        onClick={() => handleSidebar()}
      >
        {props.name}
      </NavLink>
    </>
  );
};

export default SidebarItems;
