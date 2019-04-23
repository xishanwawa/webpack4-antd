/**
 * Created by ***
 */

import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { List, Icon, Avatar, Button, Spin } from "antd";
import "./index.less";

import { DragDropContextProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

import Dustbin from "./Dustbin";
import Box from "./Box";

class Dnd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drogList: [{ name: "单行文本", id: "1" }, { name: "多行文本", id: "2" }],
      resultList: []
    };
  }

  componentDidMount() {}

  addResultList = item => {
    let resultList = this.state.resultList;
    resultList.push(item);
    this.setState({ resultList });
  };

  render() {
    let node1 = this.state.drogList.map((item, index) => {
      return <Box data={item} index={index} key={item.id} />;
    });

    return (
      <div>
        <DragDropContextProvider backend={HTML5Backend}>
          <div className="drag-list">
            <div style={{ marginBottom: 20 }}>血汗工厂：</div>
            {node1}
          </div>
          <Dustbin
            data={this.state.resultList}
            onAddChange={item => {
              this.addResultList(item);
            }}
          />
          <div className="drag-setting" />
        </DragDropContextProvider>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    $$state: state.home
  };
}

module.exports = connect(
  mapStateToProps,
  {}
)(Dnd);

//or

// function mapStateToProps(state) {
//   return {
//     $$state: state.indexPageReducer
//   }
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     onIncrement: () => dispatch(onIncrement()),
//     onDecrement: () => dispatch(onDecrement())
//   }
// }
// module.exports = connect(mapStateToProps, mapDispatchToProps)(IndexPage)
