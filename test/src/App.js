import React from 'react';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer';
import A from './components/A';
import B from './components/B';

import {HashRouter as Router,Link,Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Header title="首页---"></Header>
        <hr></hr>
            <Router>
                <Link to="/a">A页面</Link>
                <Link to="/b">B页面</Link>
                <Route path="/a" component={A}></Route>
                <Route path="/b" component={B}></Route>
            </Router>
        <hr></hr>
        <Footer></Footer>
    </div>
  );
}

export default App;
