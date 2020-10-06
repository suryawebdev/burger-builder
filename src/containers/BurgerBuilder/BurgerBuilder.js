import React, {Component} from 'react';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
    render() {
        return (
            <Aux>
                <Burger/>
                <p>burger ingredients</p>
            </Aux>
        );
    }
}

export default BurgerBuilder;