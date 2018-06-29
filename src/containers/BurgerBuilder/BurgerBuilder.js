import React, { Component } from 'react';

import Aux from '../../hoc/Auxilliary';
import Burgier from '../../components/Burgier/Burgier';

class BurgerBuilder extends Component {
	render () {
		return (
			<Aux>
				<Burgier />
				<div>Build Controls (managing burger layers)</div>
			</Aux>
		);
	}
}

export default BurgerBuilder;
