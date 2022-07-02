import './App.css';

import React, { useState } from 'react'

import Header from './components/header';
import Main from './components/main';

const App = () => {
  const [state, setState] = useState({
    clicked: 0
  })

  const click = () => {
    setState((prev) => ({
      ...prev,
      clicked: prev.clicked + 1
    }))

  }

  return (
    <>
      <Header clickCount={state.clicked} />
      <Main click={click} />
    </>
  );
}

export default App;
