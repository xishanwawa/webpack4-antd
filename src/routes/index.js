import React, { Component, PropTypes } from "react";
import { Router, Route, hashHistory, browserHistory } from "react-router";

// const loadComponent = path => Loadable({
//     loader: () => import(`${path}`),
//     loading: Loading
//   });

let hookFn = (nextState, replace) => {
  let userinfor = JSON.parse(localStorage.getItem("userInfor"));
  if (userinfor.islogin == 1) {
  } else {
    replace("/login");
  }
};

let hooklogin = (nextState, replace) => {
  let userinfor = JSON.parse(localStorage.getItem("userInfor"));
  if (userinfor.islogin == 1) {
    replace("/home");
  } else {
  }
};

const prefix = "";
const routes = {
  prefix: prefix,
  path: "/",
  childRoutes: [
    {
      path: "login(/:loginmsg)",
      onEnter: hooklogin,
      getComponents(location, cb) {
        require.ensure([], function(require) {
          cb(null, require("components/login"));
        });
      }
    },
    {
      path: prefix,
      indexRoute: { onEnter: hookFn, component: require("components/home") },
      getComponents(location, cb) {
        require.ensure([], function(require) {
          cb(null, require("components"));
        });
      },
      childRoutes: [
        {
          path: "home",
          onEnter: hookFn,
          getComponents(location, cb) {
            require.ensure([], function(require) {
              cb(null, require("components/home"));
            });
          }
        },
        {
          path: "list",
          onEnter: hookFn,
          getComponents(location, cb) {
            require.ensure([], function(require) {
              cb(null, require("components/list"));
            });
          }
        },
        {
          path: "customer",
          onEnter: hookFn,
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
