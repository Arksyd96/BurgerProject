import React from 'react'
import Burger from '../../Components/Burger/Burger'
import BuildControls from '../../Components/Burger/BuildControls/BuildControls'
import classes from './BurgerBuilder.css'

const INGREDIENT_PRICE = {
    Bacon: 0.49,
    Salad: 0.19,
    Cheese: 0.29,
    Meat: 0.99
}

class BurgerBuilder extends React.Component {
    state = {
        currentPrice: 0,
        ingredients: []
    }
    /*Modification methods*/
    addIngredientHandler = (type) => {
        this.setState((prevState, props) => {
            const array = prevState.ingredients;
            array.unshift(type);
            return { currentPrice: prevState.currentPrice + INGREDIENT_PRICE[type], ingrs: array }
        });
    }
    removeIngredientHandler = (type) => {
        this.setState((prevState, props) => {
            const array = prevState.ingredients;
            let newPrice = prevState.currentPrice;
            const found = array.findIndex((ingType) => { return type === ingType });
            if (found !== -1) {
                array.splice(found,1);
                newPrice = prevState.currentPrice - INGREDIENT_PRICE[type];
            }
            return { ingredients: array, currentPrice: newPrice }
        })
    }

    /* */
    render() {
        return (
            <div className={classes.BurgerBuilder}>
                <BuildControls
                    ingredientAdd={this.addIngredientHandler}
                    ingredientRemove={this.removeIngredientHandler} />
                <Burger ingredients={this.state.ingredients} price={this.state.currentPrice} />
            </div>
        )
    }
}


export default BurgerBuilder;