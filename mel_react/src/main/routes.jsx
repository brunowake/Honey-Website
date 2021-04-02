import React from 'react'
import {Router,Route,Redirect, hashHistory} from 'react-router'
import About from '../about/About'
import Home from '../home/Home'
import Products from '../products/Products'


export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/products' component={Products}/>
        

    </Router>
)