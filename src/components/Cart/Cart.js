import { Component } from "react";
import CartItem from "./CartItem";
import Modal from "../UI/Modal";
import styles from "./Cart.module.css";

class Cart extends Component {
  cartItemRemoveHandler(id) {}
  cartItemAddHandler(item) {}
  cartItems() {
    return (
      <ul className={styles["cart-items"]}>
        {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onAdd={this.cartItemAddHandler.bind(this, item)}
            onRemove={this.cartItemRemoveHandler.bind(this, item.id)}
          />
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
