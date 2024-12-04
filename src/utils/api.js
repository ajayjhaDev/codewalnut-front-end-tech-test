import axios from "axios";

const BASE_URL = "https://pokeapi.co/api/v2";

export const getPokemonList = async (limit, offset) => {
  const response = await axios.get(
    `${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`,
  );
  return response.data;
};

export const getPokemonDetails = async (id) => {
  const response = await axios.get(`${BASE_URL}/pokemon/${id}`);
  return response.data;
};
