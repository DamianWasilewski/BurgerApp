import React, { Component } from 'react';

import Aux from '../../hoc/Auxilliary';

class BurgerBuilder extends Component {
	render () {
		return (
			<Aux>
				<div>Hamburgier (visual)</div>
				<div>Build Controls (managing burger layers)</div>
			</Aux>
		);
	}
}

export default BurgerBuilder;
