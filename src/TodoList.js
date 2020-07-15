// TodoList.js
// Source: https://www.kirupa.com/react/simple_todo_app_react.htm

import React, { Component } from "react";
import TodoItems from "./TodoItems";
import "./TodoList.css";


class TodoList extends Component {

  constructor(props) {
    super(props);

// initalize state
    this.state = {
      items: []
    };

// add binding
    this.addItem = this.addItem.bind(this);
  }

  addItem(e) {

// if not blank, create newItem
    if (this._inputElement.value !== "") {
      var newItem = {
        text: this._inputElement.value,
        key: Date.now()
      };

// add newItem to state
//
      this.setState((prevState) => {
        return {
          items: prevState.items.concat(newItem)
        };
      });

//  clear out input
//
      this._inputElement.value = "";
    }

    console.log(this.state.items);

//  Keep page from reloading
//
    e.preventDefault();
  }


//  add ref to input to access DOM
//
  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input ref={(a) => this._inputElement = a}
                  placeholder="enter task">
            </input>
            <button type="submit">add</button>
          </form>
        </div>
        <TodoItems entries={this.state.items}/>
      </div>
    );
  }
}

export default TodoList;
