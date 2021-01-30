import React, { Component } from 'react'

export class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message : 'hello'
        }
        this.clickHandler = this.clickHandler.bind(this)
    }
    // clickHandler() {
    //     this.setState({
    //         message : 'Good Bye'
    //     })
    //     console.log('Good Bye');
    // }
    clickHandler() {
        this.setState({
            message : 'Good Bye'
        })
        console.log('Good Bye');
    }
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.clickHandler}> Click Event Bind </button> */}
                {/* <button onClick={this.clickHandler.bind(this)}> Click Event Bind </button> */}
                {/* <button onClick={() => this.clickHandler()}> Click Event Bind </button> */}
                
                {/* <button onClick={this.clickHandler}> Click Event Bind </button> */}
                <button onClick={this.clickHandler}> Click Event Bind </button>
            </div>
        )
    }
}

export default EventBind
