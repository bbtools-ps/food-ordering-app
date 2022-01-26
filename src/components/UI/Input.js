import { Component } from "react";
import React from "react";
import styles from "./Input.module.css";

class Input extends Component {
  render() {
    return (
      <div className={styles.input}>
        <label>
          {this.props.label}
          <input ref={this.props.innerRef} {...this.props.input} />
        </label>
      </div>
    );
  }
}

export default React.forwardRef((props, ref) => (
  <Input innerRef={ref} {...props} />
));
