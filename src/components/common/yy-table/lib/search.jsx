/**
 * Created by ***
 */
import { Form, Row, Col, Input, Button, Icon } from "antd";

class AdvancedSearchForm extends React.Component {
  state = {
    expand: false
  };

  // To generate mock Form.Item
  getFields() {
    const count = this.state.expand ? 6 : 3;
    const { getFieldDecorator } = this.props.form;
    const children = [];
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    };
    for (let i = 0; i < 6; i++) {
      children.push(
        <Col span={6} key={i} style={{ display: i < count ? "block" : "none" }}>
          <Form.Item {...formItemLayout} label={`表单 ${i}`}>
            {getFieldDecorator(`field-${i}`, {
              rules: [
                {
                  required: true,
                  message: "不能为空!"
                }
              ]
            })(<Input placeholder="请输入.." />)}
          </Form.Item>
        </Col>
      );
    }
    return children;
  }

  handleSearch = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      console.log("Received values of form: ", values);
    });
  };

  handleReset = () => {
    this.props.form.resetFields();
  };

  toggle = () => {
    const { expand } = this.state;
    this.setState({ expand: !expand });
  };

  render() {
    return (
      <Form className="ant-advanced-search-form" onSubmit={this.handleSearch}>
        <Row gutter={24}>
          {this.getFields()}
          <Col span={6} style={{ textAlign: "right" }}>
            <Button type="primary" htmlType="submit">
              查询
            </Button>
            <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
              重置
            </Button>
            <a style={{ marginLeft: 8, fontSize: 12 }} onClick={this.toggle}>
              {this.state.expand ? "收起" : "展开"} <Icon type={this.state.expand ? "up" : "down"} />
            </a>
          </Col>
        </Row>
      </Form>
    );
  }
}

const SearchForm = Form.create({ name: "advanced_search" })(AdvancedSearchForm);

export default SearchForm;
