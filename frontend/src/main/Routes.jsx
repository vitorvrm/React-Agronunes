import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from '../components/Home/Home'
import userCrud from '../components/Users/userCrud'

export default props =>
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/users' component={userCrud} />
        <Redirect from='*' to='/' />
    </Switch>