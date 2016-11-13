import React, { PropTypes } from 'react';
import Header from './Header'
import TodoList from './TodoList'
import TodoFooter from './TodoFooter'
import Footer from './Footer'

function Todo(){
    return (
        <div>
            <Header></Header>
            <TodoList></TodoList>
            <TodoFooter></TodoFooter>
            <Footer></Footer>
        </div>
    );
};

Todo.propTypes = {};
Todo.defaultProps = {};

export default Todo;