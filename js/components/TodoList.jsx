import React, { PropTypes } from 'react';

function TodoList(){
  return (

      <section className="main" >
        <label htmlFor="toggle-all">Mark all as complete</label>
        <input className="toggle-all" type="checkbox" />

          <ul className="todo-list">
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
          </ul>
      </section>
  );
}

TodoList.propTypes = {};
TodoList.defaultProps = {};

export default TodoList;