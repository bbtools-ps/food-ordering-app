import { Component } from "react";
import styles from "./Logo.module.css";

class Logo extends Component {
  render() {
    return (
      <h1 className={styles.logo}>
        <a href="./">FoodOrder</a>
      </h1>
    );
  }
}

export default Logo;
