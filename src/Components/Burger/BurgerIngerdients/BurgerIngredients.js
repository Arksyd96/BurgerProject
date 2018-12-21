import React from 'react'
import PropTypes from 'prop-types'
import classes from './BurgerIngredients.css'

class BurgerIngredient extends React.Component {
    render() {
        let ingredient = null;

        switch (this.props.type) {
            case ('BreadBottom'):
                ingredient = <div className={classes.BreadBottom}></div>;
                break;
            case ('BreadTop'):
                ingredient = (
                    <div className={classes.BreadTop}>
                        <div className={classes.Seeds1}></div>
                        <div className={classes.Seeds2}></div>
                    </div>
                );
                break;
            case ('Meat'):
                ingredient = <div className={classes.Meat}></div>;
                break;
            case ('Cheese'):
                ingredient = <div className={classes.Cheese}></div>;
                break;
            case ('Salad'):
                ingredient = <div className={classes.Salad}></div>;
                break;
            case ('Bacon'):
                ingredient = <div className={classes.Bacon}></div>;
                break;
            default:
                ingredient = null;
        }
        return ingredient;
    }
}

BurgerIngredient.propTypes = {
    type : PropTypes.string.isRequired
}

export default BurgerIngredient;