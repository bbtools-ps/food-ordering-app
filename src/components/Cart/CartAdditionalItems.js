import { Component } from "react";
import AdditionalItem from "./AdditionalItem";
import styles from "./CartAdditionalItems.module.css";

class CartItemAdditional extends Component {
  render() {
    const result = this.props.additional.map((item) => {
      return <AdditionalItem key={item.id} item={item} />;
    });
    return <div className={styles.additional}>{result}</div>;
  }
}

export default CartItemAdditional;
