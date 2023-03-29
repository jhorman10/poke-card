import axios from 'axios';
import { useState } from 'react';

export default function usePokemonDetails(url) {
  const [pokeDetails, setPokeDetails] = useState({
    moves: [],
    img: '',
    weight: 0,
  });
  const getPokemonDetails = async () => {
    const { data } = await axios.get(url);

    const pokeDetails = {
      moves: [data.moves[0].move.name, data.moves[1].move.name],
      weight: data.weight,
      img: data.sprites.other.dream_world.front_default,
    };
    setPokeDetails(pokeDetails);
  };

  return { pokeDetails, getPokemonDetails };
}
