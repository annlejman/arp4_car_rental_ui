import React from 'react';
import classes from './AppHeader.module.css'

const AppHeader = () => {
    return (
        <div className={classes.AppHeader}>
            <div className={classes.HeaderLeft}>
                <p>ARP 4 - Rental</p>
            </div>
            <div className={classes.HeaderRight}>
                <div>Home</div>
                <div>List</div>
                <div>Form</div>
            </div>
        </div>
    );
};

export default AppHeader;