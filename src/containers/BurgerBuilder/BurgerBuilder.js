import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
// class because we need to handle with state here
class BurgerBuilder extends Component {
  render() {
    return (
      <Aux>
        <div>Burger</div>
        <div>Build Controls</div>
      </Aux>
    );
  }
}

export default BurgerBuilder;
