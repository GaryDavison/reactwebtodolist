// TodoItems.js
// Source: https://www.kirupa.com/react/simple_todo_app_react.htm
//

import React, { Component } from "react";

class TodoItems extends Component {

// output a task as a row
  createTasks(item) {
    return <li key={item.key}>{item.text}</li>
  }

  render() {
// todoEntries - state
    var todoEntries = this.props.entries;
// listItems = HTML result of creating rows from state array
    var listItems = todoEntries.map(this.createTasks);

// spit out the page
    return (
      <ul className="theList">
          {listItems}
      </ul>
    );
  }
};

export default TodoItems;
