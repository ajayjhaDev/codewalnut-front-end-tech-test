"use client";

import React from "react";
import Link from "next/link";

const PokemonCard = ({ name, url }) => {
  const pokemonId = url.split("/").filter(Boolean).pop(); // Extract ID from URL

  return (
    <div className="pokemon-card">
      <Link href={`/pokemon/${pokemonId}`}>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`}
          alt={name}
          style={{ width: "100px", height: "100px" }}
        />
        <h3>{name.charAt(0).toUpperCase() + name.slice(1)}</h3>
      </Link>
    </div>
  );
};

export default PokemonCard;
