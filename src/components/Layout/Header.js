import { Component } from "react";
import Logo from "../UI/Logo";
import HeaderCartButton from "./HeaderCartButton";
import mealsImage from "../../assets/meals.jpg";
import styles from "./Header.module.css";

class Header extends Component {
  render() {
    return (
      <>
        <header className={styles.header}>
          <Logo />
          <HeaderCartButton onClick={this.props.onShowCart} />
        </header>
        <div className={styles["main-image"]}>
          <img src={mealsImage} alt="a table of meals" />
        </div>
      </>
    );
  }
}

export default Header;
