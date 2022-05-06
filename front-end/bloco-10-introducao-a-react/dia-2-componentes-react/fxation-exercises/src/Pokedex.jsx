import { Component } from 'react';
import pokemons from './Data';
import PokemonCard from './PokemonCard';

export default class Pokedex extends Component {
  render() {
    return (
      <div>
        {pokemons.map(({name, type, averageWeight, image }) => {
          return (
            <PokemonCard
              name={name}
              type={type}
              weight={averageWeight.value}
              unity={averageWeight.measurementUnit}
              image={image}
            />
          );
        })}
      </div>
    );
  }
}
