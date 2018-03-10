import React from 'react'
import {
  Switch,
  Route
} from 'react-router-dom'

// Components
import HomePage from './components/pages/HomePage'
import TestPage from './components/pages/TestPage'

export default (
  <Switch>
    <Route path='/' component={HomePage} exact />
    <Route path='/test' component={TestPage} />
    <Route component={HomePage} />
  </Switch>
)
