// TodoList.js
// Source: https://www.kirupa.com/react/simple_todo_app_react.htm

import React, { Component } from "react";
 
class TodoList extends Component {
  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form>
            <input placeholder="enter task">
            </input>
            <button type="submit">add</button>
          </form>
        </div>
      </div>
    );
  }
}

export default TodoList;
