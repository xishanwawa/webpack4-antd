/**
 * Created by ***
 */

import React, { Component, PropTypes } from "react";
import { Form, Button, Icon, Modal, List, Radio, Checkbox, Pagination } from "antd";
const RadioGroup = Radio.Group;

export default class Refer extends React.Component {
  static getDerivedStateFromProps(nextProps) {
    // antd自定义组件提供的方法
    if ("value" in nextProps) {
      return {
        ...(nextProps || {})
      };
    }
    return null;
  }

  constructor(props) {
    super(props);
    const value = props.value || {};
    this.watch = {
      value: value
    };
    this.state = {
      value: value || ["1"],
      datalist: [{ label: "项目一", value: "1" }]
    };
  }

  componentDidMount = () => {
    this.setState({
      datalist: [{ label: "项目一", value: "1" }, { label: "项目二", value: "2" }, { label: "项目三", value: "3" }]
    });
  };

  handleChange = value => {
    if (!("value" in this.props)) {
      this.setState({ value });
    }
    this.triggerChange({ value });
  };

  triggerChange = changedValue => {
    // Should provide an event to pass value to Form.
    const onChange = this.props.onChange;
    if (onChange) {
      onChange(changedValue.value);
    }
  };

  renderItem = item => {
    return (
      <List.Item>
        <div style={{ padding: "0 20px" }}>
          <Radio
            checked={item.value == this.state.value}
            onChange={() => {
              this.handleChange(item.value);
            }}>
            {item.label}
          </Radio>
        </div>
      </List.Item>
    );
  };
  renderList = () => {
    return (
      <div
        style={{ background: "#ffffff", margin: "0 -24px", borderBottom: "1px solid #ddd" }}
        onClick={e => {
          e.stopPropagation;
          e.preventDefault;
        }}>
        <List itemLayout="horizontal" dataSource={this.state.datalist} renderItem={this.renderItem} />
      </div>
    );
  };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.triggerChange({ value: this.watch.value });
    this.setState({
      visible: false
    });
  };

  render() {
    return (
      <div>
        <Button onClick={this.showModal}>
          参照 <Icon type="down" />
        </Button>
        <Modal title="参照" visible={this.state.visible} onOk={this.handleOk} onCancel={this.handleCancel}>
          {this.renderList()}
          <div style={{ marginTop: 10, textAlign: "right" }}>
            <Pagination simple defaultCurrent={2} total={50} />
          </div>
        </Modal>
      </div>
    );
  }
}
