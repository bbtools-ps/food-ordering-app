import { cartActions } from "../../store";
import { connect } from "react-redux";
import { Component } from "react";
import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";

class HeaderCartButton extends Component {
  render() {
    return (
      <button className={styles.button} onClick={this.props.onClick}>
        <span className={styles.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={styles.badge}>3</span>
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

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: () => dispatch(cartActions.addItem()),
    removeItem: () => dispatch(cartActions.decrement()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderCartButton);
