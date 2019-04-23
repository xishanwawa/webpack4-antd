/**
 * Created by ***
 */

import React, { Component, PropTypes } from "react";
import { Icon, Dropdown, Input } from "antd";
import ReferContent from "./referContent";
import "./refer.less";
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
    this.state = {
      visible: false,
      value: value || ["1"],
      data: [{ label: "项目一", value: "1" }]
    };
  }

  componentDidMount = () => {
    this.setState({
      data: [{ label: "项目一", value: "1" }, { label: "项目二", value: "2" }, { label: "项目三", value: "3" }]
    });
  };

  handleChange = value => {
    const onChange = this.props.onChange;
    if (!("value" in this.props)) {
      this.setState({ value });
    }
    if (onChange) {
      onChange(value);
    }
  };

  WeekCardVisibleChange = flag => {
    this.setState({ visible: flag });
  };

  render() {
    let overlay = <ReferContent data={this.state.date} onChange={data => {}} />;

    return (
      <Dropdown
        overlay={overlay}
        trigger={["click"]}
        onVisibleChange={this.WeekCardVisibleChange}
        visible={this.state.visible}>
        <Input
          placeholder="选周"
          suffix={<Icon type="right" />}
          value={`${this.state.value}`}
          style={{ width: 200, height: 32 }}
        />
      </Dropdown>
    );
  }
}
