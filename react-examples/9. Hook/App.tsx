import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';

const App = () => {
  const [visible, setVisible] = React.useState(false);
  
  return (
    <div>
      <button onClick={() => {
        setVisible(!visible)
      }}>
        {visible ? "숨기기" : "보이기"}
      </button>

      <hr/>
      {visible && <Counter/>}
    </div>
  );
};

export default App;