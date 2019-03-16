/**
 * Created by ***
 */

import React, { Component, PropTypes } from "react";
import { Drawer, Modal, Tabs } from "antd";
const TabPane = Tabs.TabPane;

import { columns, data, sections } from "./tpldata";
import YYDateils from "./dateils";
import Table from "./table";
import HandleHead from "./handleHead";
import ActionRecord from "./actionRecord";
import Relation from "./relation";

//导入UI组件
export default class YYTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerVisible: false,
      modelVisible: false,
      selectedRowKeys: [],
      selectedRows: []
    };
  }

  render() {
    return (
      <div style={{ margin: 20, padding: "20px", backgroundColor: "#ffffff" }}>
        <HandleHead selectedHandleShow={this.state.selectedRowKeys.length > 0} onCreate={this.showModal} />
        <Table onRow={this.showDrawer} rowSelectionChange={this.rowSelectionChange} />
        <Drawer
          width={660}
          placement="right"
          closable={false}
          onClose={this.onCloseDrawer}
          visible={this.state.drawerVisible}>
          <Tabs
            tabBarStyle={{ height: 42 }}
            defaultActiveKey="1"
            onChange={key => {
              console.log(key);
            }}>
            <TabPane tab="详情" key="1">
              <YYDateils />
            </TabPane>
            <TabPane tab="动态" key="2">
              <ActionRecord />
            </TabPane>
            <TabPane tab="相关" key="3">
              <Relation />
            </TabPane>
          </Tabs>
        </Drawer>
        <Modal
          title="新建"
          cancelText="取消"
          okText="确定"
          visible={this.state.modelVisible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}>
          <p>新建</p>
        </Modal>
      </div>
    );
  }

  rowSelectionChange = data => {
    this.setState({
      selectedRowKeys: data.selectedRowKeys,
      selectedRows: data.selectedRows
    });
  };

  onCloseDrawer = () => {
    this.setState({
      drawerVisible: false
    });
  };

  showDrawer = () => {
    this.setState({
      drawerVisible: true
    });
  };

  showModal = () => {
    this.setState({
      modelVisible: true
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      modelVisible: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      modelVisible: false
    });
  };

  static defaultProps = {
    onChange: () => {}
  };
}
