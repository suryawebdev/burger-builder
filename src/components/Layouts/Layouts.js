import React from 'react';

import Aux from '../../hoc/Aux';
import layoutCss from './Layouts.module.css';

const layout = (props) => {
    return (
      <Aux>
        <div>toolbar, backdrop, sidebar</div>
        <main className={layoutCss.content}>{props.children}</main>
      </Aux>
    );
}

export default layout;