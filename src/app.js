import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Portfolio from './containers/Portfolio';
import Contact from './components/contact';

const app = () =>{
    return(
        <Switch>
            <Route path='/' exact component={Portfolio}/>
            <Route path='/Contact' component={Contact}/>
        </Switch>
    )
}
export default app;