import React from 'react';

import classes from './Burgier.css';
import BurgierIngredient from './BurgierIngredient/BurgierIngredients';

const burgier = (props) => {
	return (
		<div className={classes.Burgier}>
			<BurgierIngredient type="roll-top" />
			<BurgierIngredient type="cheese" />
			<BurgierIngredient type="meat" />
			<BurgierIngredient type="roll-bottom" />
		</div>
	);
};

export default burgier;