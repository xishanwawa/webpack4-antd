/**
 * Created by ***
 */

import React, { Component, PropTypes } from "react";
import WrappedForm from "./lib/wrappedForm";

export default class YYForm extends React.Component {
  static defaultProps = {
    tplData: []
  };
  constructor(props) {
    super(props);
    let data = this.props.data;
    let fields = {};
    Object.keys(data).forEach((item, index) => {
      fields[item] = {
        value: data[item]
      };
    });
    this.state = {
      fields: fields
    };
  }

  componentDidMount() {}

  componentWillReceiveProps(nextProps) {
    let data = this.props.data;
    let statefields = this.state.fields;
    let fields = {};
    Object.keys(data).forEach((item, index) => {
      fields[item] = {
        ...statefields[item],
        value: data[item]
      };
    });

    this.setState({ fields: fields });
  }

  onChange = changedFields => {
    let fields = this.state.fields;
    let data = this.props.data;

    this.setState({ fields: { ...fields, ...changedFields } }, () => {
      let fieldsKey = Object.keys(changedFields)[0];
      if (fieldsKey) {
        let changeData = {
          key: changedFields[fieldsKey].name,
          value: changedFields[fieldsKey].value
        };

        data[fieldsKey] = changeData.value;

        data = Object.assign(data, changeData.itemlist);

        this.props.onChange(changeData, data, this.state.fields);
      }
    });
  };

  eventRef = callback => {
    this.form.validateFieldsAndScroll((err, values) => {
      if (!err && callback && typeof callback == "function") {
        callback();
      }
    });
  };

  render() {
    return (
      <WrappedForm
        ref={ref => {
          this.form = ref;
        }}
        tplData={this.props.tplData}
        onChange={this.onChange}
        fields={this.state.fields}
      />
    );
  }
}
