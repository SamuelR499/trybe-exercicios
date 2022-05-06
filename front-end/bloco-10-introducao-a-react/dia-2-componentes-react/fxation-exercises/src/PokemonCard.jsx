import React from 'react';
import PropTypes from 'prop-types';

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

PokemonCard.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  weight: PropTypes.number.isRequired,
  unity: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};
