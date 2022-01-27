import { Component } from "react";
import CartAdditionalItems from "./CartAdditionalItems";
import styles from "./CartItem.module.css";

class CartItem extends Component {
  render() {
    const price = `$${this.props.price.toFixed(2)}`;

    return (
      <li className={styles["cart-item"]}>
        <div className={styles.meal}>
          <div>
            <h2>{this.props.name}</h2>
            <div className={styles.summary}>
              <span className={styles.price}>{price}</span>
              <span className={styles.amount}>x {this.props.amount}</span>
            </div>
          </div>
          <div className={styles.actions}>
            <button onClick={this.props.onRemove}>−</button>
            <button onClick={this.props.onAdd}>+</button>
          </div>
        </div>
        <CartAdditionalItems additional={this.props.additional} />
      </li>
    );
  }
}

export default CartItem;
