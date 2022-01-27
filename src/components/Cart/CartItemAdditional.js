import { Component } from "react";
import styles from "./CartItem.module.css";

class CartItemAdditional extends Component {
  render() {
    const additional = this.props.additional
      ? [...this.props.additional, ...this.props.drinks]
      : [...this.props.drinks];
    const result = additional.map((item) => {
      return (
        <button key={item.id}>
          {item.name} + ${item.price}
          <span>+</span>
        </button>
      );
    });
    return <div className={styles.additional}>{result}</div>;
  }
}

export default CartItemAdditional;
