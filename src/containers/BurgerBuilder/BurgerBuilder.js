import React, {Component} from 'react';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildController/BuildController';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
    salad: 0.5,
    chicken: 1.5,
    cheese: 0.4,
    meat: 0.9
}
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
	totalPrice: 4,
	purchasable: false
  };

  updatePurchasableState (ingredients) {
	const sum = Object.keys(ingredients)
		.map(igKey => {
			return ingredients[igKey]
		})
		.reduce((sum, ele) => {
			return sum + ele
		}, 0);

	this.setState({purchasable: sum > 0})
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCout = oldCount + 1;

    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updatedCout;

    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;

	this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
	this.updatePurchasableState(updatedIngredients);
  };

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
        return;
    }
    const updatedCout = oldCount - 1;

    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updatedCout;

    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;

	this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
	this.updatePurchasableState(updatedIngredients);
  };

  render() {
	const disabledInfo = {
		...this.state.ingredients
	}

	for(let key in disabledInfo) {
		disabledInfo[key] = disabledInfo[key] <= 0
	}

    return (
      <Aux>
		<Modal>
			<OrderSummary ingredients={this.state.ingredients}/>
		</Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls 
        ingredientsAdded={this.addIngredientHandler}
		ingredientRemoved={this.removeIngredientHandler}
		disabled={disabledInfo} 
		price={this.state.totalPrice}
		purchasable={this.state.purchasable}/>
      </Aux>
    );
  }
}

export default BurgerBuilder;