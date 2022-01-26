import { connect } from "react-redux";
import { Component } from "react";
import { cartActions } from "../../../store";
import MealItemForm from "./MealItemForm";
import styles from "./MealItem.module.css";

class MealItem extends Component {
  addToCartHandler(amount) {
    this.props.addItem({
      id: this.props.id,
      name: this.props.name,
      amount: amount,
      price: this.props.price,
    });
  }
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
          <MealItemForm onAddToCart={this.addToCartHandler.bind(this)} />
        </div>
      </li>
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
    addItem: (amount) => dispatch(cartActions.addItem(amount)),
    removeItem: () => dispatch(cartActions.removeItem()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MealItem);
