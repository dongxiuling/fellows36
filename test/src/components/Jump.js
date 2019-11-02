import React, { Component } from 'react';
import {
    Link
  } from "react-router-dom";
class Jump extends Component {
    render() {
        return (
            <Link to={this.props.to}>{this.props.children}</Link>
        );
    }
}

export default Jump;