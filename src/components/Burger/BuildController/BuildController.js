import React from 'react';

import buildControllerCSS from './BuildController.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Salad', type: 'salad'},
  { label: 'Chicken', type: 'chicken' },
  { label: 'Cheese', type: 'cheese'},
  { label: 'Meat', type: 'meat' },
];

const buildController = (props) => (
  <div className={buildControllerCSS.BuildControls}>
    <p>
      Current Price: <strong>{props.price.toFixed(2)}</strong>
    </p>
    {controls.map((ctrl) => {
      return (
        <BuildControl
          key={ctrl.label}
          label={ctrl.label}
          added={() => props.ingredientsAdded(ctrl.type)}
          removed={() => props.ingredientRemoved(ctrl.type)}
          disabled={props.disabled[ctrl.type]}
        />
      );
    })}
    <button
      className={buildControllerCSS.OrderButton}
      disabled={!props.purchasable}>
      ORDER ITEM
    </button>
  </div>
);

export default buildController;