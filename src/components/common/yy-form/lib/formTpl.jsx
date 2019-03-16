/**
 * Created by ***
 */

import React, { Component, PropTypes } from "react";
import { Form, Input, Radio, DatePicker, Select } from "antd";

export default tplItem => {
  if (tplItem.type == "input") {
    return <Input />;
  } else if (tplItem.type == "date") {
    return <DatePicker />;
  } else if (tplItem.type == "select") {
    return (
      <Select placeholder="Please select a country">
        <Select.Option value="china">China</Select.Option>
        <Select.Option value="usa">U.S.A</Select.Option>
      </Select>
    );
  } else if (tplItem.type == "radio") {
    return (
      <Radio.Group>
        <Radio.Button value="a">a</Radio.Button>
        <Radio.Button value="b">b</Radio.Button>
        <Radio.Button value="c">c</Radio.Button>
      </Radio.Group>
    );
  } else {
    return <Input />;
  }
};
