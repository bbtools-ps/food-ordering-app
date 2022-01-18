import { Component } from "react/cjs/react.development";
import { connect } from "react-redux";
import { counterActions } from "../store/index";
import styles from "./Counter.module.css";

class Counter extends Component {
  incrementHandler() {
    this.props.increment();
  }

  decrementHandler() {
    this.props.decrement();
  }

  increaseHandler() {
    this.props.increase();
  }

  toggleCounterHandler() {
    this.props.toggleCounter();
  }
  render() {
    return (
      <div className={styles.counter}>
        {this.props.showCounter && <p>{this.props.counter}</p>}
        <button onClick={this.incrementHandler.bind(this)}>Increment</button>
        <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
        <button onClick={this.increaseHandler.bind(this)}>Increase (5)</button>
        <button onClick={this.toggleCounterHandler.bind(this)}>
          Show/Hide Counter
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
    showCounter: state.showCounter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(counterActions.increment()),
    decrement: () => dispatch(counterActions.decrement()),
    increase: () => dispatch(counterActions.increase(5)),
    toggleCounter: () => dispatch(counterActions.toggleCounter()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
