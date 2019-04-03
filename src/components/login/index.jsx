/**
 * Created by ***
 */

import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { Form, Icon, Input, Button, Checkbox } from "antd";
import { browserHistory } from "react-router";
const { TextArea } = Input;

import moment from "moment";

import request from "reqwest";
//导入UI组件;
class Index1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ok: ""
    };
  }

  login = () => {
    request({
      url: "/api/login",
      method: "get",
      error: function(err) {},
      success: resp => {
        let obj = JSON.parse(resp);
        this.setState({ ok: obj.ok }, () => {
          browserHistory.push("/home");
        });
      }
    });
  };

  render() {
    return (
      <div>
        <Button onClick={this.login}>登录</Button>
        <div>{this.state.ok}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    $$state: state
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
