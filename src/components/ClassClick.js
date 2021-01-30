import React, { Component } from 'react'

export class ClassClick extends Component {
    clickHandler(){
        console.log('Click class me');
    }
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Click class me</button>
            </div>
        )
    }
}

export default ClassClick
