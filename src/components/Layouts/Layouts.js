import React from 'react';

import Aux from '../../hoc/Aux';

const layout = (props) => {
    return (
        <Aux>
            <div>toolbar, backdrop, sidebar</div>
            <main>
                {props.children}
            </main>
        </Aux>
    )
}

export default layout;