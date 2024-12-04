"use client";

import React, { useEffect, useState } from "react";
import { getPokemonDetails } from "../../../utils/api";
import PokemonDetails from "../../../components/PokemonDetails";

const PokemonDetailPage = ({ params }) => {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      const data = await getPokemonDetails(params.id);
      setPokemon(data);
    };

    fetchPokemonDetails();
  }, [params.id]);

  if (!pokemon) return <p>Loading...</p>;

  return <PokemonDetails pokemon={pokemon} />;
};

export default PokemonDetailPage;
