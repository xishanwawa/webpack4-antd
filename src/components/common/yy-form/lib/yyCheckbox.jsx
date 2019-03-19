/**
 * Created by ***
 */

import React, { Component, PropTypes } from "react";
import { Form, Input, Radio, Checkbox, Row, Col, DatePicker, Select } from "antd";

export default class YYCheckbox extends React.Component {
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
      value: value || ["1"],
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
    // Should provide an event to pass value to Form.
    const onChange = this.props.onChange;
    if (onChange) {
      onChange(changedValue.value);
    }
  };

  renderItem = () => {
    let renderlist = this.state.datalist.map(item => {
      return (
        <Col key={item.value} span={8}>
          <Checkbox value={item.value}>{item.value}</Checkbox>
        </Col>
      );
    });
    return renderlist;
  };

  render() {
    return (
      <Checkbox.Group value={this.state.value} style={{ width: "100%" }} onChange={this.handleCurrencyChange}>
        <Row>{this.renderItem()}</Row>
      </Checkbox.Group>
    );
  }
}
