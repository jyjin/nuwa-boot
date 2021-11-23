import React from 'react';
import { Route, Switch, withRouter, HashRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import ReactDOM from 'react-dom';
import Demo1 from './react/demo1';
import Demo2 from './react/demo2';
const AppMaster = React.lazy(() => import('{{appMaster}}'))
const App1 = React.lazy(() => import('{{app1}}'))


function asyncComponent(Comp) {
  return <React.Suspense fallback={<div>loading...</div>}>
    <Comp />
  </React.Suspense>
}

const DefaultRoutePages = () => <Router hashHistory={createBrowserHistory}>
  <Switch>
    <Route exact path={`/demo1`} component={_props => <Demo1 {..._props} appInfo={props} />} />
    <Route exact path={`/demo2`} component={Demo2} />
    <Switch>
      <Route exact path={`/demo3`} component={Demo1} />
    </Switch>
  </Switch>
</Router>

const SubApps = props => {
  console.log('app props == ', props)
  return [
    <DefaultRoutePages />,
    asyncComponent(App1) 
  ]
}

ReactDOM.render(
  <div>
    <React.Suspense fallback={<div>loading...</div>}>
      <AppMaster app={SubApps} />
    </React.Suspense>

  </div>
  ,
  document.getElementById('root')
)