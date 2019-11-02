import React, { Component } from 'react';

class A extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                A页面的内容
                <button onClick={()=>{
                    this.props.history.push('/');
                    }
                }>跳转到home</button>
                {this.props.match.params.id}
            </div>
        );
    }
}

export default A;