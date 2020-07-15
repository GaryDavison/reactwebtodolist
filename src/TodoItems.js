// TodoItems.js
// Source: https://www.kirupa.com/react/simple_todo_app_react.htm
//

import React, { Component } from "react";
import FlipMove from "react-flip-move";


class TodoItems extends Component {

// Add constructor and binding
// Binding needed to make delete possible
  constructor(props) {
    super(props);

    this.createTasks = this.createTasks.bind(this);
  }

  delete(key) {
    this.props.delete(key);
  }

// output a task as a row
// Add onClick event manager to row HTML
  createTasks(item) {
    return <li onClick={() => this.delete(item.key)}
                key={item.key}>{item.text}</li>
  }

  render() {
// todoEntries - state
    var todoEntries = this.props.entries;
// listItems = HTML result of creating rows from state array
    var listItems = todoEntries.map(this.createTasks);

// spit out the page
    return (
      <ul className="theList">
        <FlipMove duration={250} easing="ease-out">
          {listItems}
        </FlipMove>
      </ul>
    );
  }
};

export default TodoItems;
