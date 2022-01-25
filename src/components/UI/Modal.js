import { Component } from "react";
import reactDom from "react-dom";
import styles from "./Modal.module.css";

class Backdrop extends Component {
  render() {
    return <div className={styles.backdrop} onClick={this.props.onClose}></div>;
  }
}

class ModalOverlay extends Component {
  render() {
    return (
      <div className={styles.modal}>
        <div className={styles.content}>{this.props.children}</div>
      </div>
    );
  }
}

const portalElement = document.querySelector("#overlays");

class Modal extends Component {
  render() {
    return (
      <>
        {reactDom.createPortal(
          <Backdrop onClose={this.props.onClose} />,
          portalElement
        )}
        {reactDom.createPortal(
          <ModalOverlay>{this.props.children}</ModalOverlay>,
          portalElement
        )}
      </>
    );
  }
}

export default Modal;
