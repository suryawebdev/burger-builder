import React, {Component} from 'react';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
  // constructor() {
  //     super();
  //     this.state = [...]
  // }

  state = {
    ingredients: {
      salad: 0,
      chicken: 0,
      cheese: 0,
      meat: 0,
    },
  };

  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <p>burger ingredients</p>
      </Aux>
    );
  }
}

export default BurgerBuilder;