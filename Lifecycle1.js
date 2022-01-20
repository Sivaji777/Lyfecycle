import React, { Component } from 'react'

export default class Lifecycle1 extends Component {
   
    componentWillUnmount(){
        console.log('Component will unmount');
    }

    render() {
        return (
            <div>
                <h1>Component Will unmount</h1>
            </div>
        )
    }
}
