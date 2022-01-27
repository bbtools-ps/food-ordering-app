import { Component } from "react";
import styles from "./CartAdditionalItems.module.css";

class CartItemAdditional extends Component {
  addItemHandler(item) {
    console.log(item);
  }
  render() {
    const additional = this.props.additional
      ? [...this.props.additional, ...this.props.drinks]
      : [...this.props.drinks];
    const result = additional.map((item) => {
      return (
        <button onClick={this.addItemHandler.bind(this, item)} key={item.id}>
          {item.name} + ${item.price}
          <span>+</span>
        </button>
      );
    });
    return <div className={styles.additional}>{result}</div>;
  }
}

export default CartItemAdditional;
