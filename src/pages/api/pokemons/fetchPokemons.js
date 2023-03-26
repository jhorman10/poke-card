import axios from 'axios';
import { BASE_URL, GET_100_POKEMONS } from '@/constants';

export default async function fetchPokemons(req, res) {
  const { data } = await axios.get(`${BASE_URL}${GET_100_POKEMONS}`);
  const { results } = data;
  return res.status(200).json({ results });
}
