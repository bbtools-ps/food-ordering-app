import { connect } from "react-redux";
import { Component } from "react";
import { cartActions } from "../../store";
import CartItem from "./CartItem";
import Modal from "../UI/Modal";
import styles from "./Cart.module.css";

class Cart extends Component {
  cartItemAddHandler(item) {
    this.props.addItem({
      id: item.id,
      name: item.name,
      amount: 1,
      price: item.price,
    });
  }
  cartItemRemoveHandler(id) {
    this.props.removeItem(id);
  }
  // notify the user when order is sent
  cartOrderHandler() {
    const itemsList = this.props.items
      .map((item) => {
        return `${item.name} x ${item.amount}`;
      })
      .join("\n");
    alert(
      `Your order has been sent and will arrive as soon as possible.\n\nOrder details:\n${itemsList}\nTotal: $${this.props.totalAmount}\n\nThank you for choosing FoodOrder.`
    );
  }
  cartItems() {
    return (
      <ul className={styles["cart-items"]}>
        {this.props.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            additional={item.additional}
            drinks={item.drinks}
            onAdd={this.cartItemAddHandler.bind(this, item)}
            onRemove={this.cartItemRemoveHandler.bind(this, item.id)}
          />
        ))}
      </ul>
    );
  }
  render() {
    const totalAmount = `$${this.props.totalAmount.toFixed(2)}`;
    const hasItems = this.props.items.length > 0;
    return (
      <Modal onClose={this.props.onClose}>
        {this.cartItems()}
        <div className={styles.total}>
          <span>Total Amount</span>
          <span>{totalAmount}</span>
        </div>
        <div className={styles.actions}>
          <button
            className={styles["button--alt"]}
            onClick={this.props.onClose}
          >
            Close
          </button>
          {hasItems && (
            <button
              className={styles.button}
              onClick={this.cartOrderHandler.bind(this)}
            >
              Order
            </button>
          )}
        </div>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items,
    totalAmount: state.totalAmount,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (item) => dispatch(cartActions.addItem(item)),
    removeItem: (id) => dispatch(cartActions.removeItem(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
