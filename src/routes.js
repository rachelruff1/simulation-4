import React from 'react';
import {Route, Switch} from 'react-router-dom';
import AuthView from './components/AuthView/AuthView';
import Menu from './components/Menu/Menu';
import Detail from './components/Detail/Detail';


export default (
    <Switch>
        <Route exact path='/' component={AuthView} />
        <Route path='/menu' component={Menu} />
        <Route path='/detail/:id' component={Detail} />

    </Switch>
)