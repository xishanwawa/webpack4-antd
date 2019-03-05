/**
 * Created by ***
 */

import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { Button, Input, Row, Col, Switch, Modal } from "antd";

const { TextArea } = Input;

import moment from "moment";

import request from "reqwest";

//导入UI组件;
class Index1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getClickData = () => {
    request({
      url: "/api/index",
      method: "get",
      error: function(err) {},
      success: function(resp) {
        debugger;
      }
    });
  };

  render() {
    return <div>{"home1"}</div>;
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
)(Index1);

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
