import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import Portal from './Portal';
import Drawer from './Drawer';
import './App.css';

function App() {
  const [show, setShow] = useState(false);

  function handleSetShow() {
    setShow(prevState => !prevState);
  }

  return (
    <div className="App">
      <Portal>
        <CSSTransition in={show} timeout={500} classNames="drawer">
          <Drawer>
            <button onClick={handleSetShow}>Close</button>
          </Drawer>
        </CSSTransition>
      </Portal>
      <p>Click the button to show Navigation Drawer</p>
      <button onClick={handleSetShow}>Show Drawer</button>
    </div>
  );
}

export default App;
