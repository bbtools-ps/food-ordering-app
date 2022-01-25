import { Component } from "react";
import Input from "../../UI/Input";
import styles from "./MealItemForm.module.css";

class MealItemForm extends Component {
  render() {
    return (
      <form className={styles.form}>
        <Input
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
