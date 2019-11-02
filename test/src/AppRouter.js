import React from 'react';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer';
import A from './components/A';
import B from './components/B';
import E from './components/E';
import F from './components/F';
import G from './components/G';
import Children from './components/Children';
import Home from './components/Home'
import {
  HashRouter as Router,
  Link,
  Route,
  Switch,
  Redirect,
  Prompt,
  NavLink
} from "react-router-dom";
import Jump from "./components/Jump"
function App() {
  return (
    <div className="App">
        <Router>
          <Header title="首页---"></Header>
          <hr></hr>
              <NavLink activeClassName="selected" exact to="/">首页</NavLink> | 
              <NavLink to="/a/5">A页面</NavLink> |
              <NavLink to="/b">B页面</NavLink> |
              <NavLink to="/c">C页面</NavLink> |
              <NavLink to="/children">children页面</NavLink> 
              <hr></hr>
              <Jump to="/e">jump到e页面</Jump> |
              <Jump to="/f">jump到f页面</Jump> |
              <Jump to="/g">jump到g页面</Jump> |
              {/* <Route exact path="/" component={Home}></Route>
              <Route path="/a" component={A}></Route>
              <Route path="/b" component={B}></Route> */}
              {/* <Switch> */}
              <Route exact path="/a/:id" component={A}></Route>
              <Route exact path="/b" render={()=>{
                  return <Redirect to="/"></Redirect>
                }
              }></Route>
              {/* <Route exact path="/h" component={H}></Route> */}
              <Route exact path="/c" render={()=>{
                return <h1>hahahah</h1>
              }}></Route>
              {/* <Route exact path="/children" children={(props)=>{
                  console.log(props.match);
                  return (
                    <h2>111</h2>
                  )
              }}></Route> */}
              <Route exact path="/" component={Home}></Route>
              <Route exact path="/e" component={E}></Route>
              <Route exact path="/f" component={F}></Route>
              <Route exact path="/g" component={G}></Route>
              {/* <Prompt when={true} message="确定离开吗？"></Prompt> */}
              {/* </Switch> */}
          <hr></hr>

        <Footer></Footer>
        </Router>

    </div>
  );
}

export default App;
