import { Component } from 'react';
import { createPortal } from 'react-dom';

const drawerRoot = document.getElementById('drawer-root');

export default class Portal extends Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    drawerRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    drawerRoot.removeChild(this.el);
  }

  render() {
    // Render the children inside createElement `div`
    // createPortal will render the component outside the DOM Tree in React.
    // And also have an access in the state
    return createPortal(this.props.children, this.el);
  }
}
