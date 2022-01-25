import { Component } from "react";
import Modal from "../UI/Modal";
import styles from "./Cart.module.css";

class Cart extends Component {
  cartItems() {
    return (
      <ul className={styles["cart-items"]}>
        {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
          <li>{item.name}</li>
        ))}
      </ul>
    );
  }
  render() {
    return (
      <Modal onClose={this.props.onClose}>
        {this.cartItems()}
        <div className={styles.total}>
          <span>Total Amount</span>
          <span>35.62</span>
        </div>
        <div className={styles.actions}>
          <button
            className={styles["button--alt"]}
            onClick={this.props.onClose}
          >
            Close
          </button>
          <button className={styles.button}>Order</button>
        </div>
      </Modal>
    );
  }
}

export default Cart;
