import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/index';
import Home from './src/home';

const Test = () => {
  return <div>
    jyjin123
  </div>
}

console.log('app == ', App)
console.log('test == ', Test)


ReactDOM.render(
  <div>
    <Test/>
    <Home />
    <App />
  </div>,
  document.getElementById('root')
);