/**
 * Created by ***
 */

import React, { Component, PropTypes } from "react";
import { Button, Icon, Row, Col, Tabs } from "antd";

import { SearchForm } from "./lib";

//导入UI组件
export default class HandleHead extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={{ marginBottom: 16 }}>
        <SearchForm />
        <Row>
          <Col span={3}>
            <Button type="primary" onClick={this.props.onCreate}>
              <Icon type="plus" /> 新建
            </Button>
          </Col>
          <Col span={12}>{this.props.selectedHandleShow ? <Button onClick={() => {}}>批量操作</Button> : null}</Col>
        </Row>
      </div>
    );
  }

  static defaultProps = {
    selectedHandleShow: false,
    onCreate: () => {}
  };
}
