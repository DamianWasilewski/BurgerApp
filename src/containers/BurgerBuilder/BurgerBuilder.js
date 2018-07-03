import React, { Component } from 'react';

import Aux from '../../hoc/Auxilliary';
import Burgier from '../../components/Burgier/Burgier';
import BuildControls from '../../components/Burgier/BuildControls/BuildControls';

class BurgerBuilder extends Component {

	state = {
		ingredients: {
			salad: 0,
			bacon: 0,
			cheese: 0,
			meat: 0
		}
	}

	render () {
		return (
			<Aux>
				<Burgier ingredients={this.state.ingredients} />
				<BuildControls />
			</Aux>
		);
	}
}

export default BurgerBuilder;
