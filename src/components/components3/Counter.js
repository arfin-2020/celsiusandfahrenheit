import { Component } from 'react';

class Counter extends Component {
    state= {
        count: 0,
    }
    incrementCount = () =>{
        this.setState((prevState) =>({count: prevState.count +1}));
    } 
    render() {
        const {render} = this.props;
        return render(this.state.count, this.incrementCount)
    }
}

export default Counter;