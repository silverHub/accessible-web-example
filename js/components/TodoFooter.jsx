import React, { PropTypes } from 'react';

function TodoFooter(){
  return (
      <footer className="footer">
          <span className="todo-count"><strong>0</strong> item left</span>
          <ul className="filters">
              <li>
                  <a className="selected" href="#/">All</a>
              </li>
              <li>
                  <a href="#/active">Active</a>
              </li>
              <li>
                  <a href="#/completed">Completed</a>
              </li>
          </ul>
          <button className="clear-completed">Clear completed</button>
      </footer>
  );
};

TodoFooter.propTypes = {};
TodoFooter.defaultProps = {};

export default TodoFooter;