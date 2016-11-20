import React, { PropTypes } from 'react';
import classNames from 'classnames'

function TodoListItem(props){
    let {label,completed} = props.todo;

    var completedClass = classNames({
        completed
    });

    return (
      <li className={completedClass}>
          <div className="view">
              <input className="toggle" type="checkbox" defaultChecked={completed} onClick={() => {props.toggleTodo(label)}} />
              <label>{label}</label>
              <button className="destroy" onClick={() => {props.removeTodo(label)}}/>
          </div>
          <input className="edit" defaultValue="Create a TodoMVC template" />
      </li>
  );
};

TodoListItem.propTypes = {};
TodoListItem.defaultProps = {};

export default TodoListItem;