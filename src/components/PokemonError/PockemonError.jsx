import errorImage from './errorImage.jpeg';
import PropTypes from 'prop-types';
export const PokemonError = ({ message }) => {
  return (
    <div role="alert">
      <img src={errorImage} width="240" alt="Error image" />
      <h1>{message}</h1>;
    </div>
  );
};

PokemonError.propTypes = {
  message: PropTypes.string.isRequired,
};
