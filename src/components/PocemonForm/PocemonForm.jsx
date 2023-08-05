import { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import PropTypes from 'prop-types';
import {
  FormWrapper,
  FormEl,
  LabelName,
  InputName,
  Button,
} from './PocemonForm.styled';

class PocemonForm extends Component {
  state = { pokemonName: '' };

  // Відповідає за оновлення стану
  handleChange = e => {
    const { value } = e.currentTarget;

    this.setState({ pokemonName: value.toLowerCase() });
  };

  // Викликається під час відправлення форми
  handleSubmit = e => {
    e.preventDefault();

    if (this.state.pokemonName.trim() === '') {
      toast.error('Please enter pokemon name !', {
        position: toast.POSITION.TOP_LEFT,
      });
      return;
    }

    this.props.onSubmit(this.state.pokemonName);
    this.setState({ pokemonName: '' });
  };

  render() {
    const { pokemonName } = this.state;

    return (
      <FormWrapper>
        <FormEl onSubmit={this.handleSubmit}>
          <LabelName>
            Pokemon
            <InputName
              type="text"
              placeholder="Enter pokemon name"
              name="pokemonName"
              value={pokemonName}
              onChange={this.handleChange}
              // required
            />
          </LabelName>
          <Button type="submit">Search</Button>
        </FormEl>
      </FormWrapper>
    );
  }
}

export default PocemonForm;

// Form.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };
