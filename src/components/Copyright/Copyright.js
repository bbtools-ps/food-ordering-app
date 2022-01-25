import { Component } from "react";
import styles from "./Copyright.module.css";

const getCurrentDate = () => {
  const date = new Date();
  return date.getFullYear();
};

class Copyright extends Component {
  render() {
    return (
      <footer className={styles.copyright}>
        <p className={styles["copyright-text"]}>
          © {getCurrentDate()}.{" "}
          <span className={styles.author}>{this.props.author}</span>
        </p>
      </footer>
    );
  }
}

export default Copyright;
