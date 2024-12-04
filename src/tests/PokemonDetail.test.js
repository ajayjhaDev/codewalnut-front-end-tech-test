import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import PokemonDetails from "../components/PokemonDetails";

const mockPokemon = {
  name: "pikachu",
  sprites: { front_default: "https://url-to-image" },
  types: [{ slot: 1, type: { name: "electric" } }],
  abilities: [{ slot: 1, ability: { name: "static" } }],
  stats: [{ stat: { name: "hp" }, base_stat: 35 }],
};

test("renders Pokémon details", () => {
  render(<PokemonDetails pokemon={mockPokemon} />);
  expect(screen.getByText(/Pikachu/i)).toBeInTheDocument();
  expect(screen.getByRole("img", { name: /Pikachu/i })).toHaveAttribute(
    "src",
    "https://url-to-image",
  );
  expect(screen.getByText(/electric/i)).toBeInTheDocument();
});
