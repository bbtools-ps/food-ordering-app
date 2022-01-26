import React from "react";
import { Component } from "react";
import Input from "../../UI/Input";
import styles from "./MealItemForm.module.css";

class MealItemForm extends Component {
  constructor(props) {
    super(props);
    this.inputAmount = React.createRef();
    this.state = { enteredAmountIsValid: true };
  }
  submitHandler(e) {
    e.preventDefault();
    const enteredAmount = this.inputAmount.current.value;

    // convert enteredAmount string to number
    const enteredAmountNumber = parseInt(enteredAmount);

    // validation check
    if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1) {
      this.setState({ enteredAmountIsValid: false });
      return;
    }

    // call function for adding amount to cart
    this.props.onAddToCart(enteredAmountNumber);
  }
  render() {
    return (
      <form className={styles.form} onSubmit={this.submitHandler.bind(this)}>
        <Input
          ref={this.inputAmount}
          label="Amount"
          input={{
            type: "number",
            min: "1",
            step: "1",
            defaultValue: "1",
          }}
        />
        <button>+ Add</button>
        {!this.state.enteredAmountIsValid && (
          <p>Please enter a valid amount.</p>
        )}
      </form>
    );
  }
}

export default MealItemForm;
