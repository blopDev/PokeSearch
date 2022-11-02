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

export const GET_WEIGHT = gql`
query GetAllPokemon($take: Int) {
  getAllPokemon(offset: 87, take: $take) {
    num
    species
    weight
  }
}
`;

export const GET_HEIGHT = gql`
query GetAllPokemon($take: Int) {
  getAllPokemon(offset: 87, take: $take) {
    num
    species
    height
  }
}
`;

export const GET_TYPES = gql`
query GetItem($take: Int) {
  getAllPokemon(offset: 87, take: $take) {
    num
    species
    types {
      name
    }
  }
}
`;

export const GET_COLOR = gql`
query GetAllPokemon($take: Int) {
  getAllPokemon(offset: 87 take: $take) {
    num
    species
    color
  }
}
`;
