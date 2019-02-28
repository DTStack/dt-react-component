import React, { Component } from 'react';

export class Button extends Component {
    constructor (props) {
        super(props)
    }
    render () {
        return (
            <button
                style={{ backgroundColor: '#fff', border: '1px solid #ccc' }}
                onClick={this.props.onClick}
            >{this.props.children}</button>
        )
    }
}