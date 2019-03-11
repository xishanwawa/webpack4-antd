/**
 * Created by ***
 */

import React, { Component, PropTypes } from "react";
import { Icon, Timeline } from "antd";

//导入UI组件
export default class ActionRecord extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={{ padding: "10px 20px" }}>
        <Timeline>
          <Timeline.Item>创建商机 2019-09-01</Timeline.Item>
          <Timeline.Item>修改商机字段 2019-09-01</Timeline.Item>
          <Timeline.Item dot={<Icon type="like" style={{ fontSize: "16px" }} />} color="red">
            升迁商机到招标阶段 2019-09-01
          </Timeline.Item>
          <Timeline.Item>取消商机 2019-09-01</Timeline.Item>
        </Timeline>
      </div>
    );
  }

  static defaultProps = {};
}
