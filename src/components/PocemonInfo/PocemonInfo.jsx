import { Component } from 'react';
import { PokemonError } from '../PokemonError/PockemonError';
import { PokemonData } from '../PokemonData/PokemonData';
// import PropTypes from 'prop-types';

class PocemonInfo extends Component {
  state = {
    pokemon: null,
    error: null,
    status: 'idle',
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.pokemonName;
    const nextName = this.props.pokemonName;

    if (prevName !== nextName) {
      console.log('name changed');

      this.setState({ status: 'pending' });

      fetch(`https://pokeapi.co/api/v2/pokemon/${nextName}`)
        .then(response => {
          if (response.ok) {
            return response.json();
          }

          return Promise.reject(
            new Error(`There is no pokemon as ${nextName}`)
          );
        })
        .then(pokemon => this.setState({ pokemon, status: 'resolved' }))
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }

  render() {
    const { pokemon, error, status } = this.state;

    if (status === 'idle') {
      return <p>Enter a pokemon name</p>;
      /* /*--> зазначаємо якщо ім'я покемона забули передати 
    або ж воно приводиться до фолс чи андефайнд */
    }

    if (status === 'pending') {
      return <div>Loading...</div>;
    }

    if (status === 'rejected') {
      return <PokemonError message={error.message} />;
    }

    if (status === 'resolved') {
      return <PokemonData pokemon={pokemon} />;
    }
  }
}

export default PocemonInfo;

// Form.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };
