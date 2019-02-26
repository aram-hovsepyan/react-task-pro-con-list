import React from 'react';
import List from '../../containers/List/List';
import classes from './Entry.css';

const entry = props => (
    <div className={classes.Entry}>
        <div className={classes.Title} >{props.title}</div>
        <div className={classes.ListsContainer}>
            <List title="Pros" ></List>
            <List title="Cons" ></List>
        </div>
    </div>
)

export default entry;