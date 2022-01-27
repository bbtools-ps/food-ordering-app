import { connect } from "react-redux";
import { Component } from "react";
import { cartActions } from "../../store";
import styles from "./CartAdditionalItems.module.css";

class CartItemAdditional extends Component {
  constructor(props) {
    super(props);
    this.state = { itemIsHighlighted: false };
  }
  addItemHandler(item) {
    this.setState((prevState) => {
      return { itemIsHighlighted: !prevState.itemIsHighlighted };
    });
    console.log(item);
    // this.props.addItem({
    //   id: item.id,
    //   name: item.name,
    //   amount: 1,
    //   price: item.price,
    // });
  }
  render() {
    const additional = this.props.additional
      ? [...this.props.additional, ...this.props.drinks]
      : [...this.props.drinks];
    const result = additional.map((item) => {
      return (
        <button onClick={this.addItemHandler.bind(this, item)} key={item.id}>
          {item.name} + ${item.price}
          <span>+</span>
        </button>
      );
    });
    return <div className={styles.additional}>{result}</div>;
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

export default connect(mapStateToProps, mapDispatchToProps)(CartItemAdditional);
