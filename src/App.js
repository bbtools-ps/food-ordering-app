import { Component } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartIsShown: false,
    };
  }
  showCartHandler() {
    this.setState({ cartIsShown: true });
  }
  hideCartHandler() {
    this.setState({ cartIsShown: false });
  }
  render() {
    return (
      <>
        {this.state.cartIsShown && (
          <Cart onClose={this.hideCartHandler.bind(this)} />
        )}
        <Header onShowCart={this.showCartHandler.bind(this)} />
        <main>
          <Meals />
        </main>
      </>
    );
  }
}

export default App;
