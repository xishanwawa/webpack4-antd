/**
 * Created by ***
 */

import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { Button, Modal, Col, Row } from "antd";
import QueueAnim from "rc-queue-anim";
import reqwest from "reqwest";
import moment from "moment";
import Create from "./create";
import { YYForm } from "common";
import { tplData } from "./tplData";
//导入UI组件
class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      data: {
        username: "",
        userage: "",
        money: "",
        percent: 10,
        datepicker: moment("2015-06-06"),
        select: "1",
        selectMultiple: ["1", "2"],
        radio: "1",
        radioButton: "1",
        checkbox: ["1", "2"],
        refer: "1"
      }
    };
  }

  componentDidMount() {}

  /**
   * changeData: 本次改变数据
   * data: 改变之后可以提交数据
   * fields: antd带value数据 （这里没什么用，仅供查看了解）
   */
  onChange = (changeData, data, fields) => {
    this.setState({ data });
  };

  onOkSubmit = () => {
    console.log(this.state.data);
  };

  render() {
    const data = this.state.data;

    return (
      <div style={{ margin: "20px 20px 0", padding: "24px 32px", backgroundColor: "#ffffff" }}>
        <Row>
          <Col span={12}>
            <YYForm
              tplData={tplData}
              data={this.state.data}
              onChange={this.onChange}
              ref={ref => {
                this.form = ref;
              }}
            />
          </Col>
          <Col span={12}>
            <pre className="language-bash">{JSON.stringify(data, null, 2)}</pre>
          </Col>
        </Row>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    $$state: state.customer
  };
}

module.exports = connect(
  mapStateToProps,
  {}
)(Index);

//or

// function mapStateToProps(state) {
//   return {
//     $$state: state.indexPageReducer
//   }
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     onIncrement: () => dispatch(onIncrement()),
//     onDecrement: () => dispatch(onDecrement())
//   }
// }
// module.exports = connect(mapStateToProps, mapDispatchToProps)(IndexPage)
