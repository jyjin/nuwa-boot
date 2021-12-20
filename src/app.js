import React from 'react';
import { Route, Switch, withRouter, HashRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import ReactDOM from 'react-dom';
import Demo1 from './react/demo1';
import Demo2 from './react/demo2';
const AppMaster = React.lazy(() => import('/Users/jyjin/workspace/gitProject/nuwa-master/react/routes.js'))
// const AppMaster = React.lazy(() => import('/Users/jyjin/workspace/gitProject/nuwa-master/nuwa/master/app.*.js'))
const App1 = React.lazy(() => import('/Users/jyjin/workspace/gitProject/nuwa-app1/react/routes.js'))
const App2 = React.lazy(() => import('/Users/jyjin/workspace/gitProject/nuwa-app2/react/routes.js'))


function asyncComponent(Comp) {
  return <React.Suspense fallback={<div>loading...</div>}>
    <Comp />
  </React.Suspense>
}

const DefaultRoutePages = (props) => <Router hashHistory={createBrowserHistory}>
  <Switch>
    <Route exact path={`/demo1`} component={_props => <Demo1 {..._props} appInfo={props} />} />
    <Route exact path={`/demo2`} component={Demo2} />
    <Switch>
      <Route exact path={`/demo3`} component={Demo1} />
    </Switch>
  </Switch>
</Router>

const SubApps = () => {
  // console.log('app props == ', props)
  const props = {}
  return [
    <DefaultRoutePages {...props}/>,
    asyncComponent(App1),
    asyncComponent(App2),
  ]
}

ReactDOM.render(
  <div>
    <React.Suspense fallback={<div>loading...</div>}>
      <AppMaster autoRoute={SubApps} />
    </React.Suspense>

  </div>
  ,
  document.getElementById('root')
)