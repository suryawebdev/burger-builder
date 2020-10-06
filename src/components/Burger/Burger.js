import React from 'react';

import burgerCss from './Burger.module.css'
import BurgerIngredient from '../Burger/BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    return (
      <div className={burgerCss.Burger}>
        <BurgerIngredient type="bread-top" />
        <BurgerIngredient type="cheese" />
        <BurgerIngredient type="meat" />
        <BurgerIngredient type="bread-bottom" />
      </div>
    );
}

export default burger;