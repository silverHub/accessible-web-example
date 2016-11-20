import React, { PropTypes } from 'react';

function Header(props){
    function addTodo(e) {
       if (e.key === 'Enter'){
           props.addTodo(e.target.value);
           e.target.value = '';
        }
    }
    return (
      <header className="header">
          <h1>a-todos</h1>
          <input className="new-todo" placeholder="What needs to be done?" onKeyDown={addTodo} />
      </header>
  );
}

Header.propTypes = {};
Header.defaultProps = {};

export default Header;