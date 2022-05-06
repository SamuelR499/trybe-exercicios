import React from 'react';

export default class PokemonCard extends React.Component {
  render() {
      console.log(this);
     const { name, type, weight, unity, image } = this.props;
     return (
      <div>
        <p>Nome:{name} </p>
        <p>Tipo:{type}</p>
        <p>
          Peso: {weight}
          {unity}
        </p>
        <img src={image} alt={name} />
      </div>
    );
  }
}
