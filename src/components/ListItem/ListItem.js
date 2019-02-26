import React from 'react';
import classes from './ListItem.css';

const listItem = (props) => {
    return (
        <li className={classes.ListItem}>
            <input type='text' value={props.value} onChange={props.onChange} />
        </li>
    );
}

export default listItem;