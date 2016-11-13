import React, { PropTypes } from 'react';

function Header(){
  return (
      <header className="header">
          <h1>a-todos</h1>
          <input className="new-todo" placeholder="What needs to be done?" autofocus />
      </header>
  );
};

Header.propTypes = {};
Header.defaultProps = {};

export default Header;