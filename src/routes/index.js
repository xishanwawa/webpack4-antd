import React, { Component, PropTypes } from "react";
import { Router, Route, hashHistory, browserHistory } from "react-router";

// const loadComponent = path => Loadable({
//     loader: () => import(`${path}`),
//     loading: Loading
//   });

const routes = {
  path: "/",
  childRoutes: [
    {
      path: "home",
      getComponent(nextState, cb) {
        require.ensure([], require => {
          cb(null, require("components/home"));
        });
      }
    },
    {
      path: "customer",
      getComponent(nextState, cb) {
        require.ensure([], require => {
          cb(null, require("components/customer"));
        });
      }
    },
    {
      path: "list",
      getComponent(nextState, cb) {
        require.ensure([], require => {
          cb(null, require("components/list"));
        });
      }
    },
    {
      path: "dnd",
      getComponent(nextState, cb) {
        require.ensure([], require => {
          cb(null, require("components/dnd"));
        });
      }
    }
  ],
  component: require("components"),
  indexRoute: { component: require("components/home") }
};

export default class Routes extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Router routes={routes} history={browserHistory} />;
  }
}
