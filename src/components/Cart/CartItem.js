import { Component } from "react";
import styles from "./CartItem.module.css";

class CartItem extends Component {
  render() {
    const price = `$${this.props.price.toFixed(2)}`;
    const drinks = this.props.drinks.map((drink) => {
      return (
        <button key={drink.id}>
          {drink.name} + ${drink.price}
          <span>+</span>
        </button>
      );
    });
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
        {this.props.additional && (
          <div className={styles.additional}>
            {this.props.additional.map((item) => {
              return (
                <button key={item.id}>
                  {item.name} + ${item.price}
                  <span>+</span>
                </button>
              );
            })}
          </div>
        )}
        <div className={styles.additional}>{drinks}</div>
      </li>
    );
  }
}

export default CartItem;
