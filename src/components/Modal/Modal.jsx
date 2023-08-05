import { Component } from 'react';
import PropTypes from 'prop-types';
import { ModalBackdrop, ModalContetnt } from './Modal.styled';

export default class Modal extends Component {
  componentDidMount() {
    console.log('Modal component DidMount');

    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    console.log(' Modal component WillUnmount');
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    console.log(e.code);

    if (e.code === 'Escape') {
      console.log('Click Escape');

      this.props.onClose();
    }
  };

  handleBackdropClick = e => {
    console.log('click on backdrop');
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    return (
      <ModalBackdrop onClick={this.handleBackdropClick}>
        <ModalContetnt>{this.props.children}</ModalContetnt>
      </ModalBackdrop>
    );
  }
}

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };
