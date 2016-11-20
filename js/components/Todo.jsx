import React, { Component, PropTypes } from 'react';
import Header from './Header'
import TodoList from './TodoList'
import TodoFooter from './TodoFooter'
import Footer from './Footer'

class Todo extends Component {

    render(){
        return(
            <div>
                <Header/>
                <TodoList/>
                <TodoFooter/>
                <Footer/>
            </div>
        );
    }
}

Todo.propTypes = {};
Todo.defaultProps = {};

export default Todo;