// import React from 'react';
// import ReactDOM from 'react-dom';
// ReactDOM.render(<div>hello webpack</div>, document.getElementById("root"))

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "store";
import Routes from "routes";
import { DragDropContextProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
ReactDOM.render(
  <DragDropContextProvider backend={HTML5Backend}>
    <Provider store={store}>
      <Routes />
    </Provider>
  </DragDropContextProvider>,
  document.getElementById("root")
);
