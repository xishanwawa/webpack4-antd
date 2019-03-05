/**
 * Created by ***
 */

import React, { Component, PropTypes } from "react";
import { Form, Input, Button, Radio, DatePicker, Select } from "antd";

class CustomizedForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        this.props.submit(values);
        console.log("Received values of form: ", values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 2 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      }
    };
    return (
      <Form layout="horizontal" onSubmit={this.handleSubmit}>
        <Form.Item label="姓名" hasFeedback {...formItemLayout}>
          {getFieldDecorator("username", {
            rules: [{ required: true, message: "姓名 必填!" }]
          })(<Input />)}
        </Form.Item>
        <Form.Item label="年龄" hasFeedback {...formItemLayout}>
          {getFieldDecorator("userage", {
            rules: [{ required: true, message: "年龄 必填!" }]
          })(<Input />)}
        </Form.Item>
        <Form.Item label="日期" {...formItemLayout}>
          {getFieldDecorator("datepicker", {})(<DatePicker />)}
        </Form.Item>
        <Form.Item label="Select" {...formItemLayout}>
          {getFieldDecorator("select", {})(
            <Select placeholder="Please select a country">
              <Select.Option value="china">China</Select.Option>
              <Select.Option value="usa">U.S.A</Select.Option>
            </Select>
          )}
        </Form.Item>
        <Form.Item label="单选" {...formItemLayout}>
          {getFieldDecorator("radio", {})(
            <Radio.Group>
              <Radio.Button value="a">a</Radio.Button>
              <Radio.Button value="b">b</Radio.Button>
              <Radio.Button value="c">c</Radio.Button>
            </Radio.Group>
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            查询
          </Button>
        </Form.Item>
        {/* <Form.Item {...formItemLayout} label="Select" hasFeedback>
        </Form.Item> */}
      </Form>
    );
  }
}

export default Form.create({
  name: "global_state",
  onFieldsChange(props, changedFields) {
    props.onChange(changedFields);
  },
  mapPropsToFields(props) {
    return {
      username: Form.createFormField({
        ...props.username,
        value: props.username.value
      }),
      userage: Form.createFormField({
        ...props.userage,
        value: props.userage.value
      }),
      datepicker: Form.createFormField({
        ...props.datepicker,
        value: props.datepicker.value
      }),
      select: Form.createFormField({
        ...props.select,
        value: props.select.value
      }),
      radio: Form.createFormField({
        ...props.radio,
        value: props.radio.value
      })
    };
  },
  onValuesChange(_, values) {
    console.log(values);
  }
})(CustomizedForm);
