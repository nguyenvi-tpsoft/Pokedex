import React from "react";
import { Col } from "react-bootstrap";
interface Props {
  name: string;
  id: number;
  image: string;
}
const PokemonList: React.FC<Props> = (props) => {
  const { name, id, image } = props;
  return (
    <div className="pokemon_item">
      <p>{name}</p>
      <img src={image} alt="" />
    </div>
  );
};

export default PokemonList;
