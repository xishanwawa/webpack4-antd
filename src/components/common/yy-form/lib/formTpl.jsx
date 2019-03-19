/**
 * Created by ***
 */

import React, { Component, PropTypes } from "react";
import { Input, InputNumber, DatePicker } from "antd";
import YYRadio from "./yyRadio";
import YYRadioButton from "./yyRadioButton";

import YYCheckbox from "./yyCheckbox";

import YYSelect from "./yySelect";
import YYSelectMultiple from "./yySelectMultiple";

import Refer from "./refer";

export default tplItem => {
  if (tplItem.type == "input") {
    return <Input />;
  } else if (tplItem.type == "number") {
    return <InputNumber />;
  } else if (tplItem.type == "money") {
    return (
      <InputNumber
        formatter={value => `￥ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        parser={value => value.replace(/\￥\s?|(,*)/g, "")}
      />
    );
  } else if (tplItem.type == "percent") {
    return <InputNumber min={0} max={100} formatter={value => `${value}%`} parser={value => value.replace("%", "")} />;
  } else if (tplItem.type == "date") {
    return <DatePicker />;
  } else if (tplItem.type == "select") {
    return <YYSelect />;
  } else if (tplItem.type == "selectMultiple") {
    return <YYSelectMultiple />;
  } else if (tplItem.type == "radio") {
    return <YYRadio />;
  } else if (tplItem.type == "radioButton") {
    return <YYRadioButton />;
  } else if (tplItem.type == "checkbox") {
    return <YYCheckbox />;
  } else if (tplItem.type == "refer") {
    return <Refer />;
  } else {
    return <Input />;
  }
};
