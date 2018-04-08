import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter} from 'react-router-dom'
import Routes from './util/routes'
import Nav from './views/navBar'

// main app
import App from './views/App';

ReactDOM.render(
    <BrowserRouter>
    <div>
   <Nav/>
    <Routes/> 
</div>
</BrowserRouter>, document.getElementById('app'))