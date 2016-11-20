import React, { PropTypes } from 'react';

function Header(){

    function addTodo(e) {
        console.log(e);
        if (e.keyCode === 'Enter'){
            console.log("Enter");
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