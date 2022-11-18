import { gql } from "@apollo/client";

export const GET_POKEMONS = gql`
query GetAllPokemon($getAllPokemonTakeFlavorTexts2: Int) {
  getAllPokemon(offset: 87, take: 10, offsetFlavorTexts: 87, takeFlavorTexts: $getAllPokemonTakeFlavorTexts2) {
    num
    species
    key
    sprite
  }
}
`;

export const GET_POKEMON_NAME = gql`
query GetPokemon($pokemon: PokemonEnum!, $getPokemonTakeFlavorTexts2: Int ) {
  getPokemon(pokemon: $pokemon, takeFlavorTexts: $getPokemonTakeFlavorTexts2) {
    key
    num
    species
    flavorTexts {
      flavor
    }
  }
}
`;

