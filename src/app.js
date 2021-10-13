import React from 'react';
import ReactDOM from 'react-dom';
import App from './react/index.js';
import Home from './react/home';

const Test = () => {
  return <div>
    jyjin123
  </div>
}

console.log('app == ', App)
console.log('test == ', Test)


ReactDOM.render(
  <div>
    Save the world together!
    <Test/>
    <Home />
    <App />
  </div>,
  document.getElementById('root')
);