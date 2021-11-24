import { Component } from "react";
import ItemCount from "./ItemCount";
import CounterDisplay from "./DisplayCounter";


class ContainerCount extends Component {

    constructor(props) {
        super(props);
        this.state = {
            number: 0
          }
          this.increment = this.increment.bind(this)
          this.decrement = this.increment.bind(this)

        }

        increment() {
            this.setState({number : this.state.number + 1})
        }

        decrement() {
            this.setState({number : this.state.number + 1})
        }


    render() {
        return (
            <div>
                <CounterDisplay number = {1} />
                <ItemCount onIncrement = { this.increment } onDecrement= { this.decrement } />
            </div>
             
        })
    }

    export default ContainerCount;