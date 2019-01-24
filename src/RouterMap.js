import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//admin

import App from './App';
import TodoList from './views/TodoList'

class RouterMap extends Component {
    render() {
        return (
            <Router>
              <Fragment>
                <Link to="/">Home</Link>
                <br/>
                <Link to="/todo/">Todo</Link>
                <Route path="/" exact component={App} />
                <Route path="/todo/" component={TodoList} />
              </Fragment>
            </Router>
        )
    }
}

export default RouterMap