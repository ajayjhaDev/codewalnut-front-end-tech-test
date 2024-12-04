"use client";

import React from "react";

const PokemonDetails = ({ pokemon }) => (
  <div style={{ textAlign: "center", padding: "20px" }}>
    <h1>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h1>
    <img
      src={pokemon.sprites.front_default}
      alt={pokemon.name}
      style={{ width: "150px", height: "150px" }}
    />
    <h2>Types:</h2>
    <ul>
      {pokemon.types.map((type) => (
        <li key={type.slot}>{type.type.name}</li>
      ))}
    </ul>
    <h2>Abilities:</h2>
    <ul>
      {pokemon.abilities.map((ability) => (
        <li key={ability.slot}>{ability.ability.name}</li>
      ))}
    </ul>
    <h2>Stats:</h2>
    <ul>
      {pokemon.stats.map((stat) => (
        <li key={stat.stat.name}>
          {stat.stat.name}: {stat.base_stat}
        </li>
      ))}
    </ul>
  </div>
);

export default PokemonDetails;
