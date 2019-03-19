/**
 * Created by ***
 */

import React, { Component, PropTypes } from "react";
import { Form, Input, Button, Radio, DatePicker, Select } from "antd";
import formTpl from "./formTpl";

class CustomizedForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderTpl = () => {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 }
      }
    };

    let nodeTpl = this.props.tplData.map((item, index) => {
      return (
        <Form.Item key={item.key} label={item.label} {...formItemLayout}>
          {getFieldDecorator(item.key, {
            rules: [{ required: item.required, message: item.message }]
          })(formTpl(item))}
        </Form.Item>
      );
    });

    return nodeTpl;
  };

  render() {
    return (
      <Form layout="horizontal">
        {this.renderTpl()}
        {/* <Form.Item>
          <Button type="primary" htmlType="submit">
            查询
          </Button>
        </Form.Item> */}
        {/* <Form.Item {...formItemLayout} label="Select" hasFeedback>
        </Form.Item> */}
      </Form>
    );
  }
}

let WrappedForm = Form.create({
  name: "global_state",
  onFieldsChange(props, changedFields) {
    props.onChange(changedFields);
  },
  mapPropsToFields(props) {
    let fieldsObj = {};
    let fields = props.fields;
    Object.keys(fields).forEach((item, index) => {
      fieldsObj[item] = Form.createFormField({
        ...fields[item],
        value: fields[item].value
      });
    });
    return fieldsObj;
  },
  onValuesChange(_, values) {
    console.log(values);
  }
})(CustomizedForm);

export default WrappedForm;
