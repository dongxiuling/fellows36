import React, { Component } from 'react';
import store from './store';
import Add from './ation';
/*
触发action需要使用store.dispatch(action)
*/
class App extends Component {
    render() {
        return (
            <div>
                hahah 
                <button onClick={()=>{
                    store.dispatch(Add());
                }
                }>click+1</button>
            </div>
        );
    }
}

export default App;