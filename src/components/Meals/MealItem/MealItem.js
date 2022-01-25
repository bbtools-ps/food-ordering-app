import { Component } from "react";
import MealItemForm from "./MealItemForm";
import styles from "./MealItem.module.css";

class MealItem extends Component {
  render() {
    return (
      <li className={styles.meal}>
        <div>
          <h3>{this.props.name}</h3>
          <div className={styles.description}>{this.props.description}</div>
          <div className={styles.price}>{`$${this.props.price.toFixed(
            2
          )}`}</div>
        </div>
        <div>
          <MealItemForm />
        </div>
      </li>
    );
  }
}

export default MealItem;
