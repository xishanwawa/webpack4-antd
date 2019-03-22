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
    this.state = {
      ok: ""
    };
  }

  islogin = () => {
    request({
      url: "/api/islogin",
      method: "get",
      error: function(err) {},
      success: resp => {
        debugger;
        let obj = JSON.parse(resp);
        this.setState({ ok: obj.ok });
      }
    });
  };

  login = () => {
    request({
      url: "/api/login",
      method: "get",
      error: function(err) {},
      success: resp => {
        let obj = JSON.parse(resp);
        this.setState({ ok: obj.ok });
      }
    });
  };

  logout = () => {
    request({
      url: "/api/logout",
      method: "get",
      error: function(err) {},
      success: resp => {
        let obj = JSON.parse(resp);
        this.setState({ ok: obj.ok });
      }
    });
  };

  render() {
    return (
      <div>
        <Button onClick={this.islogin}>获取</Button>
        <Button onClick={this.login}>登录</Button>
        <Button onClick={this.logout}>登出</Button>
        <div>{this.state.ok}</div>
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
