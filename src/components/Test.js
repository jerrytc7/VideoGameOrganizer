import React, { Component } from 'react'

class Test extends Component {

    state={
        count:0,
        onGoing:0,
        caption:""
    }

handleChange = (e) =>{
    let newCount = e.target.value.length
    this.setState({
        count: this.state.onGoing + newCount,
        caption: e.target.value
    })
}

handleKeyChange = (e) =>{
    if (e.key === "Enter") {
        this.setState({
            onGoing: this.state.count,
            caption:""
        })
    }
}

    render(){
    return (
        <div>
            <input value={this.state.caption} onChange={this.handleChange} onKeyPress={this.handleKeyChange}></input><button>{this.state.count}</button>
        </div>
    )
}
}

export default Test
