import React from 'react';

import buildControlCss from './BuildControl.module.css';

const buildControl = (props) => (
  <div className={buildControlCss.BuildControl}>
    <div className={buildControlCss.Label}>{props.label}</div>
    <button className={buildControlCss.Less}>Less</button>
    <button className={buildControlCss.More}>More</button>
  </div>
);

export default buildControl;