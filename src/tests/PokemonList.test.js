import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import PokemonCard from "../components/PokemonCard";

test("renders a Pokémon card", () => {
  render(
    <PokemonCard name="pikachu" url="https://pokeapi.co/api/v2/pokemon/25/" />,
  );
  expect(screen.getByText(/Pikachu/i)).toBeInTheDocument();
  expect(screen.getByRole("img", { name: /Pikachu/i })).toHaveAttribute(
    "src",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
  );
});
