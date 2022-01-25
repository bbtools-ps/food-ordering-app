import { Component } from "react";
import styles from "./Input.module.css";

class Input extends Component {
  render() {
    return (
      <div className={styles.input}>
        <label>
          {this.props.label}
          <input {...this.props.input} />
        </label>
      </div>
    );
  }
}

export default Input;
