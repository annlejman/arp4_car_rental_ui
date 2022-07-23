import React from 'react';
import classes from './Card.module.css';

const Card  = (props) => {
    return (
        <div className={classes.CardContainer}>
            <div className={classes.CardHeader}>
                {props.cardTitle}
            </div>
            <div className={classes.CardBody}>
                {props.children}
            </div>
        </div>
    );
};

export default Card;