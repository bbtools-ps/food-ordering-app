import { connect } from "react-redux";
import { cartActions } from "../../store";
import { Component } from "react";
import styles from "./CartAdditionalItems.module.css";

class AdditionalItem extends Component {
  constructor(props) {
    super(props);
    this.state = { isActive: false };
  }
  handleItem(item) {
    this.setState((prevState) => {
      return { isActive: !prevState.isActive };
    });
    // if item is not yet active add it to the store
    if (!this.state.isActive) {
      this.props.addItem({
        id: item.id,
        name: item.name,
        amount: 1,
        price: item.price,
      });
    } else {
      this.props.removeItem(item.id);
    }
  }
  render() {
    return (
      <button
        onClick={this.handleItem.bind(this, this.props.item)}
        className={this.state.isActive ? styles.active : ""}
      >
        {this.props.item.name} + ${this.props.item.price}
        <span>+</span>
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
    addItem: (item) => dispatch(cartActions.addItemAdditional(item)),
    removeItem: (id) => dispatch(cartActions.removeItemAdditional(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdditionalItem);
