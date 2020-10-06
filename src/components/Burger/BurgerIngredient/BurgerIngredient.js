import React from 'react';
import PropTypes from 'prop-types';

import burgerIngredientCss from './BurgerIngredient.module.css'

const BurgerIngredient = (props) => {
    let ingredient = null;

    switch (props.type) {
      case "bread-bottom":
        ingredient = <div className={burgerIngredientCss.BreadBottom}></div>;
        break;
      case "bread-top":
        ingredient = (
          <div className={burgerIngredientCss.BreadTop}>
            <div className={burgerIngredientCss.Seeds1}></div>
          </div>
        );
        break;
      case "meat":
        ingredient = <div className={burgerIngredientCss.Meat}></div>;
        break;
      case "cheese":
        ingredient = <div className={burgerIngredientCss.Cheese}></div>;
        break;
      case "salad":
        ingredient = <div className={burgerIngredientCss.Salad}></div>;
        break;
      case "chicken":
        ingredient = <div className={burgerIngredientCss.Chicken}></div>;
        break;
        default:
        ingredient = null;
    }

    return ingredient;
}

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
}

export default BurgerIngredient
