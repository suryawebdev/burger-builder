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
        {controls.map(ctrl => {
			return (
        <BuildControl
          key={ctrl.label}
          label={ctrl.label}
          added={() => props.ingredientsAdded(ctrl.type)}
          removed={() => props.ingredientRemoved(ctrl.type)}
        />
      );
        })}
    </div>
)

export default buildController;