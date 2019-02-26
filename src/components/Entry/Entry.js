import React from 'react';
import List from '../../containers/List/List';
import classes from './Entry.css';

const entry = props => (
    <div className={classes.Entry}>
        <div className={classes.Title} >{props.title}</div>
        <div className={classes.ListsContainer}>
            <div className={classes.List}>
                <List title="Pros" ></List>
            </div>
            <div className={classes.List}>
                <List title="Cons" ></List>
            </div>
        </div>
    </div>
)

export default entry;