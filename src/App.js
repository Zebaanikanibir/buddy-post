import React from 'react';

import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import PostDetail from './Components/PostDetail/PostDetail';
import Posts from './Components/Posts/Posts';


function App() {
  return (
  <div className="App">
    <Router>
      <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/post/:id">
            <PostDetail></PostDetail>
          </Route>
        </Switch>
    </Router>
  </div>
  );
}

export default App;
