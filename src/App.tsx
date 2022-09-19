import axios from "axios";
import React, { useEffect, useState } from "react";
import "./assets/sass/style.scss";
import PokemonColection from "./components/PokemonColection";
import loading_gif from "./assets/loading.gif";

import { Pokemon } from "./interface";
interface Pokemons {
  name: string;
  url: string;
}

const App: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [nextUrl, setNextUrl] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const getPokemon = async () => {
      const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=10");
      setNextUrl(res.data.next);
      res.data.results.forEach(async (pokemon: Pokemons) => {
        const poke = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        setPokemons((p) => [...p, poke.data]);
        setLoading(false);
      });
    };
    getPokemon();
  }, []);

  const loadmore = async () => {
    setLoading(true);
    let res = await axios.get(nextUrl);
    setNextUrl(res.data.next);
    res.data.results.forEach(async (pokemon: Pokemons) => {
      const poke = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
      );
      setPokemons((p) => [...p, poke.data]);
      setLoading(false);
    });
  };
  return (
    <div className="App">
      <div id="loader_xuly" className={loading == true ? "" : "hidden"}>
        <img src={loading_gif} alt="Đang xử lý..." />
        <p>Đang xử lý...</p>
      </div>
      <PokemonColection pokemons={pokemons} />
      <div className="loadmore">
        <button onClick={loadmore}>Load more</button>
      </div>
    </div>
  );
};

export default App;
