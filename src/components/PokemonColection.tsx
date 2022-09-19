import React from "react";
import { Container, Row } from "react-bootstrap";
import { Pokemon } from "../interface";
import PokemonList from "./PokemonList";
interface Props {
  pokemons: Pokemon[];
}
const PokemonColection: React.FC<Props> = (props) => {
  const { pokemons } = props;
  return (
    <>
      <div className="title">
        <h1>POKEMON LIST</h1>
      </div>
      <div className="pokemon_wrap">
        {pokemons.map((pokemon, key) => {
          return (
            <PokemonList
              name={pokemon.name}
              id={pokemon.id}
              image={pokemon.sprites.front_default}
            />
          );
        })}
      </div>
    </>
  );
};

export default PokemonColection;
