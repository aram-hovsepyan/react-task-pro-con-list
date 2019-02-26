import React, { Component } from 'react';
import ListItem from '../../components/ListItem/ListItem';
import uuid from 'uuid';
import classes from './List.css';

class List extends Component {
    state = {
        items: [{value: '', id: uuid()}]
    }

    itemChangeHandler = (event, index) => {
        const changedItems = [...this.state.items];
        if (event.target.value) {
            if (index === changedItems.length - 1) {
                changedItems.push({value: "", id: uuid()});
            }
            changedItems[index] = {...changedItems[index], value: event.target.value}
        } else {
            if (index !== changedItems.length - 1) {
                changedItems.splice(index,1);
            }
        } 
        this.setState({
            items: changedItems
        })
    }

    render () {
        const mappedItems = this.state.items.map((item, index) => (
            <ListItem 
                key={item.id}
                value={item.value} 
                onChange={e=>this.itemChangeHandler(e, index)}/>
        ));
        return (
            <div className={classes.List} >
                <div className={classes.Title} >
                    {this.props.title}
                </div>
                <ol className={classes.ListItems} >
                    {mappedItems}
                </ol>
            </div>);
    }
}

export default List;