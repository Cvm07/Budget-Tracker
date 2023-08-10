import React from 'react'
import Navbar from './Navbar'
import {Home} from './components/Pages/Home'
import {About} from './components/Pages/About'
import './index.css'
import Apppage from './components/AppPage/Apppage'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const App = () => {
  return (<>
    <Router>
      <Navbar />
      <div className="pages">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/budgetracker" component={Apppage}/>
        </Switch>
      </div>
    </Router>
  </>
  )
}

export default App
