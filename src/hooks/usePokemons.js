import { useEffect, useState } from 'react';
import axios from 'axios';

export default function usePokemons() {
  const [pokemons, setPokemons] = useState([]);

  const getPokemons = async () => {
    const { data } = await axios.get('/api/pokemons/fetchPokemons');
    const { results } = data;
    setPokemons(results);
  };

  return { pokemons, getPokemons };
}
