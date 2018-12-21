import React from 'react'
import classes from './SimpleBuildControl.css'

const simpleBuildControl = (props) => {
    return (
        <div className={classes.SimpleBuildControl}>
            <div className={classes.text}>{props.label}</div>
            <div>
                <button onClick={props.added} className={classes.Button}>More</button>
                <button onClick={props.removed} className={classes.Button}>Less</button>
            </div>
        </div>
    )
}

export default simpleBuildControl;