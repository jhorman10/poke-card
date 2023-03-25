import axios from "axios";
import { BASE_URL } from "@/constants";


export default function fetchPokemons(req, res) {
  return res.json({
    name: 'Pikachu',
    power: 'Thunder',
  });
}
