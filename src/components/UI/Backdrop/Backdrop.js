import React from 'react';

import backdropCss from './Backdrop.module.css';

const backdrop = (props) => (
    props.show ? <div className={backdropCss.Backdrop} onClick={props.clicked}></div> : null
);

export default backdrop;