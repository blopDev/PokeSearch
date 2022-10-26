import { gql } from "@apollo/client";

export const GET_POKEMONS = gql`
query GetAllPokemon($take: Int) {
  getAllPokemon(offset: 87, take: $take) {
    num
    sprite
    species
    key
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
