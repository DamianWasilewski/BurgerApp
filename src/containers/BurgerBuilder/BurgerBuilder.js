import React, { Component } from 'react';

import Aux from '../../hoc/Auxilliary';
import Burgier from '../../components/Burgier/Burgier';
import BuildControls from '../../components/Burgier/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
	salad: 0.5,
	cheese: 0.4,
	meat: 1.3,
	bacon: 0.7
}

class BurgerBuilder extends Component {

	state = {
		ingredients: {
			salad: 0,
			bacon: 0,
			cheese: 0,
			meat: 0
		},
		totalPrice: 4
	}

	addIngredientHandler = (type) => {
		const oldQuantity = this.state.ingredients[type];
		const updatedQuantity = oldQuantity + 1;
		const updatedIngredients = {
			...this.state.ingredients
		};

		updatedIngredients[type] = updatedQuantity;
		const priceAddition = INGREDIENT_PRICES[type];
		const oldPrice = this.state.totalPrice;
		const newPrice = oldPrice + priceAddition;

		this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
	}

	removeIngredientHandler = (type) => {
		const oldQuantity = this.state.ingredients[type];
		if (oldQuantity <= 0) {
			return;
		}
		const updatedQuantity = oldQuantity - 1;
		const updatedIngredients = {
			...this.state.ingredients
		};

		updatedIngredients[type] = updatedQuantity;
		const priceDeduction = INGREDIENT_PRICES[type];
		const oldPrice = this.state.totalPrice;
		const newPrice = oldPrice - priceDeduction;

		this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
	}

	render () {
		const disabledButton = {
			...this.state.ingredients
		};

		for (let key in disabledButton) {
			disabledButton[key] = disabledButton[key] <= 0
		}
		return (
			<Aux>
				<Burgier ingredients={this.state.ingredients} />
				<BuildControls
				ingredientAdded = {this.addIngredientHandler}
				ingredientRemoved = {this.removeIngredientHandler}
				disabled = {disabledButton}
				price = {this.state.totalPrice} />
			</Aux>
		);
	}
}

export default BurgerBuilder;
