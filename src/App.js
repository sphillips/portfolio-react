import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Gallery from './Gallery'
import About from './About'
import FullImage from './FullImage'

import './App.scss'

const App = () =>
  <Router>
    <Switch>
      <Route exact path="/">
        <Gallery />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/image/:id" children={<FullImage />} />
    </Switch>
  </Router>

export default App
