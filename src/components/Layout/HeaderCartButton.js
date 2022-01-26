import { connect } from "react-redux";
import { Component } from "react";
import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";

class HeaderCartButton extends Component {
  constructor(props) {
    super(props);
    this.state = { btnIsHighlighted: false };
  }
  // bump the button on each prop update === useEffect(()=>{},[somePropChange])
  componentDidUpdate(prevProps) {
    if (prevProps.totalAmount !== this.props.totalAmount) {
      this.setState({ btnIsHighlighted: true });
      setTimeout(() => {
        this.setState({ btnIsHighlighted: false });
      }, 300);
    }
  }
  render() {
    const numberOfCartItems = this.props.items.reduce((curNumber, item) => {
      return curNumber + item.amount;
    }, 0);
    const btnClasses = `${styles.button} ${
      this.state.btnIsHighlighted ? styles.bump : ""
    }`;
    return (
      <button className={btnClasses} onClick={this.props.onClick}>
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
