/**
 * Created by ***
 */

import React, { Component, PropTypes } from "react";
import { Button, Modal, message } from "antd";
import { YYForm } from "common";
//导入UI组件
export default class Create extends React.Component {
  static defaultProps = {
    title: "新建",
    data: {},
    tplData: [],
    onOK: val => {
      console.log(val);
    },
    onCancel: val => {
      console.log(val);
    }
  };
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  componentDidMount() {}

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = () => {
    this.form.eventRef(() => {
      message.loading("提交中...", 0);
      setTimeout(() => {
        this.setState(
          {
            visible: false
          },
          () => {
            message.destroy();
            this.props.onOk();
          }
        );
      }, 1000);
    });
  };

  handleCancel = e => {
    this.setState(
      {
        visible: false
      },
      () => {
        this.props.onCancel();
      }
    );
  };

  render() {
    return (
      <React.Fragment>
        <Button type="primary" onClick={this.showModal}>
          {this.props.title}
        </Button>
        <Modal title={this.props.title} visible={this.state.visible} onOk={this.handleOk} onCancel={this.handleCancel}>
          <div style={{ height: 300, overflow: "auto", margin: -24, padding: 20 }}>
            <YYForm
              tplData={this.props.tplData}
              data={this.props.data}
              onChange={this.props.onChange}
              ref={ref => {
                this.form = ref;
              }}
            />
          </div>
        </Modal>
      </React.Fragment>
    );
  }
}
