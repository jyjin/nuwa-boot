import React from 'react';
import ReactDOM from 'react-dom';
import Demo1 from './react/demo1';
import Demo2 from './react/demo2';

const Header = () => {
  return <div className={'header'} style={{ color: 'white' }}>
    <a>NUWA</a>
  </div>
}

ReactDOM.render(
  <div>
    <Header />
    <h1 align='center'>Welcome to Nuwa! </h1>
    <Demo1 />
    <Demo2 />

  </div>,
  document.getElementById('root')
);