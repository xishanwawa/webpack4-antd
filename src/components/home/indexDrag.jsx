/**
 * Created by ***
 */

import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { Button, Input, Row, Col, Switch, Modal } from "antd";
import { Router, Route, hashHistory, browserHistory } from "react-router";
const { TextArea } = Input;
import Box from "./box";
import DropTarget from "./target";
import Immutable from "immutable";

// import { DragDropContextProvider } from "react-dnd";
// import HTML5Backend from "react-dnd-html5-backend";

//导入UI组件;
class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: "单行文本", type: "input" },
        { name: "多行文本", type: "textarea" },
        { name: "数字", type: "number" }
      ],
      selectData: []
    };
  }

  renderDataList = () => {
    let node = [];
    node = this.state.data.map(item => {
      return (
        <Box
          key={item.type}
          data={item}
          onEnd={item => {
            this.setState((state, props) => {
              let selectData = Immutable.fromJS(state.selectData).toJS();
              selectData.push(item);
              return { selectData };
            });
          }}
        />
      );
    });
    return node;
  };

  moveCard = (dragIndex, hoverIndex) => {
    const dragCard = this.state.selectData[dragIndex];
    this.setState((state, props) => {
      let selectData = Immutable.fromJS(state.selectData).toJS();
      selectData.splice(dragIndex, 1);
      selectData.splice(hoverIndex, 0, dragCard);

      return {
        selectData
      };
    });
  };

  render() {
    return (
      <div style={{ padding: 20 }}>
        <Row>
          <Col span={12}>
            <div className="d-datalist-con">{this.renderDataList()}</div>
          </Col>
          <Col span={12}>
            <DropTarget data={this.state.selectData} moveCard={this.moveCard} />
          </Col>
        </Row>
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
)(Index);
