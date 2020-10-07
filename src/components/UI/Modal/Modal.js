import React from 'react';

import modalCss from './Modal.module.css';

const modal = (props) => (
    <div className={modalCss.Modal}>{props.children}</div>
)

export default modal