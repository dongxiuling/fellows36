import React from 'react';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer';
import A from './components/A';
import B from './components/B';
import E from './components/E';
import Children from './components/Children';
import Home from './components/Home'
import {
  HashRouter as Router,
  Link,
  Route,
  Switch
} from "react-router-dom";
import Jump from "./components/Jump"
function App() {
  return (
    <div className="App">
        <Header title="首页---"></Header>
        <hr></hr>
            <Router>
                <Link to="/">首页</Link> | 
                <Link to="/a/5">A页面</Link> |
                <Link to="/b">B页面</Link> |
                <Link to="/c">C页面</Link> |
                <Link to="/children">children页面</Link> 
                <Jump to="/e">jump到e页面</Jump>
                {/* <Route exact path="/" component={Home}></Route>
                <Route path="/a" component={A}></Route>
                <Route path="/b" component={B}></Route> */}
                {/* <Switch> */}
                <Route exact path="/a/:id" component={A}></Route>
                <Route exact path="/b" component={B}></Route>
                <Route exact path="/c" render={()=>{
                  return <h1>hahahah</h1>
                }}></Route>
                <Route exact path="/children" children={(props)=>{
                    console.log(props.match);
                    return (
                      <h2>111</h2>
                    )
                }}></Route>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/e" component={E}></Route>
                {/* </Switch> */}
                

                a
                b
                c
            </Router>
        <hr></hr>
        <Footer></Footer>
    </div>
  );
}

export default App;
