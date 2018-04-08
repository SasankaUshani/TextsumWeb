import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import SignUp from '../views/signupView'
import app from '../views/App'
import home from '../views/homepage'
import news from '../views/newsPage'

const Routes = () => {
    return (
    
        <Switch>
          
            <Route exact path='/' component={SignUp}/>
            <Route path='/signup' component={SignUp}/>
            <Route path='/home' component={home}/>
            <Route path='/news' component={news}/>


          
            {/*<Route path='/payment-method' component={PaymentMethod}/>*/}
            <Route path='*' component={app}/>
           
        </Switch>
    )
}

export default Routes;