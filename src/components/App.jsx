import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import PocemonForm from './PocemonForm/PocemonForm';
import PocemonInfo from './PocemonInfo/PocemonInfo';

// import Modal from './Modal/Modal';

class App extends Component {
  state = {
    // showModal: false,
    pokemonName: '',
  };

  componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokemon/ditto')
      .then(res => res.json())
      .then(pokemon => this.setState({ pokemon }));
  }

  // toogleModal = () => {
  //   this.setState(({ showModal }) => ({
  //     showModal: !showModal,
  //   }));
  // };

  handleSubmit = pokemonName => {
    this.setState({ pokemonName });
  };

  render() {
    // const { showModal, pokemonName } = this.state;
    const { pokemonName } = this.state;

    return (
      <div>
        {/* <button type="button" onClick={this.toogleModal}>
          Open Modal
        </button> */}

        {/* {showModal && (
          <Modal onClose={this.toogleModal}>
            <h1>Hello</h1>
            <button type="button" onClick={this.toogleModal}>
              Close Modal
            </button>
          </Modal>
        )} */}
        <PocemonForm onSubmit={this.handleSubmit} />
        <PocemonInfo pokemonName={pokemonName} />
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}

export default App;
