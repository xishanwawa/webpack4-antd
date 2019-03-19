/**
 * Created by ***
 */

import React, { Component, PropTypes } from "react";
import { Form, Input, Radio, DatePicker, Select } from "antd";

export default class YYSelect extends React.Component {
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
    this.state = {
      value: value || 0,
      datalist: [{ label: "项目一", value: "1" }]
    };
  }

  componentDidMount = () => {
    this.setState({
      datalist: [{ label: "项目一", value: "1" }, { label: "项目二", value: "2" }, { label: "项目三", value: "3" }]
    });
  };

  handleCurrencyChange = value => {
    if (!("value" in this.props)) {
      this.setState({ value });
    }
    this.triggerChange({ value });
  };

  triggerChange = changedValue => {
    const onChange = this.props.onChange;
    if (onChange) {
      onChange(changedValue.value);
    }
  };

  renderItem = () => {
    let renderlist = this.state.datalist.map(item => {
      return (
        <Select.Option key={item.value} value={item.value}>
          {item.label}
        </Select.Option>
      );
    });
    return renderlist;
  };

  render() {
    return (
      <Select value={this.state.value} onChange={this.handleCurrencyChange} placeholder="Please select a country">
        {this.renderItem()}
      </Select>
    );
  }
}
