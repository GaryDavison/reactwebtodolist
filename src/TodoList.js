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
    }; // this.state

// add binding
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  } // constructor

  addItem(e) {

// if not blank, create newItem
    if (this._inputElement.value !== "") {
      var newItem = {
        text: this._inputElement.value,
        key: Date.now()
      }; // newItem

// add newItem to state
//
      this.setState((prevState) => {
        return {
          items: prevState.items.concat(newItem)
        }; // return
      }); // setState

//  clear out input
//
      this._inputElement.value = "";
    } // if

    console.log(this.state.items);

//  Keep page from reloading
//
    e.preventDefault();
  }  // addItem


// deleteItem added to ... delete an item
  deleteItem(key) {
// filteredItems is item list with the key item excluded
    var filteredItems = this.state.items.filter(function (item) {
      return (item.key !== key);
    });  // var filteredItems

    // updates items
    this.setState({
      items: filteredItems
    }); // setState
  } // deleteItem


//  add ref to input to access DOM
// Add prop to TodoItems called delete
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
        <TodoItems entries={this.state.items}
                   delete={this.deleteItem}/>
      </div>
    ); // return
  } // render
} // TodoList

export default TodoList;
