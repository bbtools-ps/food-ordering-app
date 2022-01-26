import { Component } from "react";
import Input from "../../UI/Input";
import styles from "./MealItemForm.module.css";

class MealItemForm extends Component {
  constructor() {
    super();
    this.state = { innerRef: 1 };
  }
  submitHandler(e) {
    e.preventDefault();
    console.log(this.props.innerRef);
  }
  render() {
    return (
      <form className={styles.form} onSubmit={this.submitHandler.bind(this)}>
        <Input
          ref={this.props.innerRef}
          label="Amount"
          input={{
            type: "number",
            min: "1",
            max: "5",
            step: "1",
            defaultValue: "1",
          }}
        />
        <button>+ Add</button>
      </form>
    );
  }
}

export default MealItemForm;
