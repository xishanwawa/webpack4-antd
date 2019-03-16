// import React from 'react';
// import ReactDOM from 'react-dom';
// ReactDOM.render(<div>hello webpack</div>, document.getElementById("root"))

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "store";
import Routes from "routes";
import { LocaleProvider } from "antd";
import zhCN from "antd/lib/locale-provider/zh_CN";

ReactDOM.render(
  <LocaleProvider locale={zhCN}>
    <Provider store={store}>
      <Routes />
    </Provider>
  </LocaleProvider>,
  document.getElementById("root")
);
