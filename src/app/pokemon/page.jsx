"use client";

import React, { useState, useEffect } from "react";
import { getPokemonList } from "../../utils/api";
import PokemonCard from "../../components/PokemonCard";

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);

  const limit = 20;

  useEffect(() => {
    const fetchPokemons = async () => {
      setLoading(true);
      const offset = (currentPage - 1) * limit;
      const data = await getPokemonList(limit, offset);
      setPokemonList(data.results);
      setTotalPages(Math.ceil(data.count / limit));
      setLoading(false);
    };

    fetchPokemons();
  }, [currentPage]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filteredPokemon = pokemonList.filter((pokemon) =>
    pokemon.name.includes(searchTerm),
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div>
      <h1>Pokémon Explorer</h1>
      <input
        type="text"
        placeholder="Search Pokémon..."
        onChange={handleSearchChange}
        value={searchTerm}
        style={{ marginBottom: "20px", padding: "10px", width: "100%" }}
      />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {filteredPokemon.map((pokemon) => (
            <PokemonCard
              key={pokemon.name}
              name={pokemon.name}
              url={pokemon.url}
            />
          ))}
        </div>
      )}
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button
          type="button"
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          type="button"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PokemonList;
