import React, { Component } from 'react';
import store from './store';
import {Add,Reduce} from './ation';
import {connect} from 'react-redux';
/*
触发action需要使用store.dispatch(action)
*/
class App extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.num}</h1>
                hahah 
                <button onClick={()=>{
                    store.dispatch(Add(2));
                }
                }>click+1</button>
                <button onClick={()=>{
                    store.dispatch(Reduce(4));
                }
                }>click-1</button>
            </div>
        );
    }
}
let mapStateToProps = (state) =>({
        num:state.num
    })

export default connect(mapStateToProps)(App);