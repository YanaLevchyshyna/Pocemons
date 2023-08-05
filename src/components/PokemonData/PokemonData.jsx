// import PropTypes from 'prop-types';

export const PokemonData = ({ pokemon: { name, sprites, stats } }) => {
  return (
    <div>
      <img
        src={sprites.other['official-artwork'].front_default}
        width="240"
        alt={name}
      />
      <h2>{name}</h2>
      <ul>
        {stats.map(stat => (
          <li key={stat.stat.name}>
            {stat.stat.name}: {stat.base_stat}
          </li>
        ))}
      </ul>
    </div>
  );
};

// PokemonData.propTypes = {
//   pokemon: PropTypes.arrayOf(
//     PropTypes.shape({
//       name: PropTypes.string.isRequired,
//       sprites: PropTypes.object.isRequired,
//       stats: PropTypes.array.isRequired,
//     }).isRequired
//   ),
// };
