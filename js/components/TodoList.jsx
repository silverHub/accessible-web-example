import React, { PropTypes } from 'react';
import TodoListItem from './TodoListItem';

function TodoList(props){

    return (
      <section className="main">
        <label htmlFor="toggle-all">Mark all as complete</label>
        <input className="toggle-all" type="checkbox" />
          <ul className="todo-list">
              {props.todos.map((todo, i) => <TodoListItem key={i} todo={todo} removeTodo={props.removeTodo} toggleTodo={props.toggleTodo} />)}
          </ul>
      </section>
  );
}

TodoList.propTypes = {};
TodoList.defaultProps = {};

export default TodoList;


/*
*
 <li className="completed">
 <div className="view">
 <input className="toggle" type="checkbox" defaultChecked="true" />
 <label>Taste JavaScript</label>
 <button className="destroy"/>
 </div>
 <input className="edit" defaultValue="Create a TodoMVC template" />
 </li>

 <li>
 <div className="view">
 <input className="toggle" type="checkbox" />
 <label>Buy a unicorn</label>
 <button className="destroy"/>
 </div>
 <input className="edit" defaultValue="Rule the web" />
 </li>
*
* */