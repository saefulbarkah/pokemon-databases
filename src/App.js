import React from "react";
import { Route, Routes } from "react-router-dom";
import Layouts from "./components/Layouts";
import { SidebarProvider } from "./context/sidebarContext";
import Berries from "./pages/Berries";
import Home from "./pages/Home";
import Pokemon from "./pages/Pokemon";
import ShowPokemon from "./pages/Pokemon/ShowPokemon";

function App() {
  return (
    <SidebarProvider>
      <Layouts>
        <Routes>
          <Route index element={<Home />} />
          <Route path="pokemon" element={<Pokemon />} />
          <Route path="berry" element={<Berries />} />
          <Route path="pokemon/:name" element={<ShowPokemon />} />
          <Route path="*" element={<p>Page Not Found!</p>} />
        </Routes>
      </Layouts>
    </SidebarProvider>
  );
}

export default App;
