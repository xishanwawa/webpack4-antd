import React, { Component, PropTypes } from "react";
import { Router, Route, hashHistory, browserHistory } from "react-router";

// const loadComponent = path => Loadable({
//     loader: () => import(`${path}`),
//     loading: Loading
//   });

const prefix = "";
const routes = {
  prefix: prefix,
  path: "/",
  childRoutes: [
    {
      path: "login(/:loginmsg)",
      getComponents(location, cb) {
        require.ensure([], function(require) {
          cb(null, require("components/login"));
        });
      }
    },
    {
      path: prefix,
      indexRoute: { onEnter: (nextState, replace) => replace("/home") },
      getComponents(location, cb) {
        require.ensure([], function(require) {
          cb(null, require("components"));
        });
      },
      childRoutes: [
        {
          path: "home",
          getComponents(location, cb) {
            require.ensure([], function(require) {
              cb(null, require("components/home"));
            });
          }
        },
        {
          path: "list",
          getComponents(location, cb) {
            require.ensure([], function(require) {
              cb(null, require("components/list"));
            });
          }
        },
        {
          path: "customer",
          getComponents(location, cb) {
            require.ensure([], function(require) {
              cb(null, require("components/customer"));
            });
          }
        }
      ]
    }
  ]
};

export default class Routes extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Router routes={routes} history={browserHistory} />;
  }
}
