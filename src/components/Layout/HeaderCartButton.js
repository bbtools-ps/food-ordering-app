import { connect } from "react-redux";
import { Component } from "react";
import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";

class HeaderCartButton extends Component {
  render() {
    const numberOfCartItems = this.props.items.reduce((curNumber, item) => {
      return curNumber + item.amount;
    }, 0);
    return (
      <button className={styles.button} onClick={this.props.onClick}>
        <span className={styles.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={styles.badge}>{numberOfCartItems}</span>
      </button>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items,
    totalAmount: state.totalAmount,
  };
};

export default connect(mapStateToProps)(HeaderCartButton);
