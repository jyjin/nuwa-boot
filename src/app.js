import React from 'react';
import { Route, Switch, withRouter, HashRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import ReactDOM from 'react-dom';
import Demo1 from './react/demo1';
import Demo2 from './react/demo2';

const Header = () => {
  return <div className={'header'} style={{ color: 'white' }}>
    <a>NUWA</a>
  </div>
}

// const getComp = ()=> import('./react.demo1.js')
// const stream = []
// getComp().then((module)=>{
//   stream.push(module.default || module)
// })

// ReactDOM.render(
//   <div>
//     <Header />
//     <h1 align='center'>Welcome to Nuwa! </h1>
//     <Demo1 />
//     <Demo2 />
//   </div>,
//   document.getElementById('root')
// );

const Spin = () => <div>Loading...</div>

ReactDOM.render(
  <Router hashHistory={createBrowserHistory}>
    <Switch>
      <Route exact path={`/demo1`} component={Demo1} />
      <Route exact path={`/demo2`} component={Demo2} />
      {/* <Route exact path={`${match.url}${match.url === '/' ? '' : '/'}undefined`} component={Spin} />
      <Route path={match.url} component={AutoRouter} /> */}
    </Switch>
  </Router>
  ,
  document.getElementById('root')
)