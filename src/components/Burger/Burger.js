import React from 'react';

import burgerCss from './Burger.module.css'
import BurgerIngredient from '../Burger/BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, i) => {
          return <BurgerIngredient key={igKey + i} type={igKey} />;
        });
    })
    .reduce((arr, ele) => {
        return arr.concat(ele);
    }, []);

    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please add ingrediens</p>;
    }

    return (
      <div className={burgerCss.Burger}>
        <BurgerIngredient type="bread-top" />
        {transformedIngredients}
        <BurgerIngredient type="bread-bottom" />
      </div>
    );
}

export default burger;