import React, { Component } from 'react'

class LifecycleMethod extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 1
        }
        console.log('initialization');
    }
    Increment() {
        this.setState = {
            count: this.state.count + 1
        }
    }
    componentWillMount() {
        console.log('component will mount');
    }

    componentDidUpdate() {
        console.log('component didi update');
    }
    shouldComponentUpdate() {
        console.log(' should component update');
    }
    componentWillUpdate() {
        console.log('will component update');
    }
    // componentWillUnmount() {
    //     alert('component has unmounted')
    // }

    render() {
        console.log('rendering');
        return (

            <>
                <h1>count: {this.state.count}</h1>
                <button onClick={this.Increment}>increment</button>
            </>
        )
    }

}
export default LifecycleMethod;