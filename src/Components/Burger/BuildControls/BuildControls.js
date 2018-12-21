import React from 'react'
import classes from './BuildControls.css'
import SimpleBuildControl from './SimpleBuildControl/SimpleBuildControl'

const BuildControls = (props) => {
    return (
        <div className={classes.BuildControls}>
            <SimpleBuildControl 
                added={() => props.ingredientAdd("Meat")} 
                removed={() => props.ingredientRemove("Meat")} 
                label="Meat"/>
            <SimpleBuildControl 
                added={() => props.ingredientAdd("Salad")} 
                removed={() => props.ingredientRemove("Salad")}
                label="Salad"/>
            <SimpleBuildControl 
                added={() => props.ingredientAdd("Cheese")} 
                removed={() => props.ingredientRemove("Cheese")}
                label="Cheese"/>
            <SimpleBuildControl 
                added={() => props.ingredientAdd("Bacon")} 
                removed={() => props.ingredientRemove("Bacon")}
                label="Bacon"/>
        </div>
    );
}

export default BuildControls;