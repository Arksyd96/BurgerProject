import React from 'react'
import BurgerIngredient from './BurgerIngerdients/BurgerIngredients'
import classes from './Burger.css'

const Burger = (props) => {
    let selectedIngredients = props.ingredients.map((igKey, index) => {
        return <BurgerIngredient type={igKey} key={igKey + index} />
    });
    if (!selectedIngredients.length)
        selectedIngredients = <div>Please add ingredients</div>

    /* */
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="BreadTop" />
            {selectedIngredients}
            <BurgerIngredient type="BreadBottom" />
            <div>Price : {props.price.toFixed(2)}$</div>
        </div>
    );
}

export default Burger;