/**
 * Created by ***
 */

import React, { Component, PropTypes } from "react";
import { Drawer, Modal, Button, Table, Icon, Row, Col, Tabs } from "antd";
const TabPane = Tabs.TabPane;

import { Tags, Action, SearchForm } from "./lib";
//导入UI组件
export default class YYTable extends React.Component {
  static defaultProps = {
    onChange: (type, data) => {
      console.log({ type: type, data: data });
    }
  };
  constructor(props) {
    super(props);
    this.state = {
      drawerVisible: false,
      modelVisible: false,
      selectedRowKeys: [],
      selectedRows: []
    };
  }

  getRowSelection = () => {
    let rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        this.setState({
          selectedRowKeys,
          selectedRows
        });
        // this.props.onChange("selectChange", {
        //   selectedRowKeys,
        //   selectedRows
        // });
      },
      getCheckboxProps: record => ({
        disabled: record.name === "Disabled User", // Column configuration not to be checked
        name: record.name
      })
    };
    return rowSelection;
  };

  render() {
    return (
      <div style={{ margin: 20, padding: "20px", backgroundColor: "#ffffff" }}>
        <div style={{ marginBottom: 16 }}>
          <SearchForm />
          <Row>
            <Col span={3}>
              <Button type="primary" onClick={this.showModal}>
                <Icon type="plus" /> 新建
              </Button>
            </Col>
            <Col span={12}>
              {this.state.selectedRowKeys.length > 0 ? <Button onClick={() => {}}>批量操作</Button> : null}
            </Col>
          </Row>
        </div>
        <Table
          rowSelection={this.getRowSelection()}
          scroll={{ x: true }}
          columns={this.pkgColumns()}
          dataSource={this.pkgData()}
          onRow={record => {
            return {
              onClick: event => {
                this.showDrawer();
              } // 点击行
            };
          }}
        />
        <Drawer
          title={
            <Tabs
              tabBarStyle={{ height: 42 }}
              defaultActiveKey="1"
              onChange={key => {
                console.log(key);
              }}>
              <TabPane tab="详情" key="1" />
              <TabPane tab="相关" key="2" />
              <TabPane tab="动态" key="3" />
            </Tabs>
          }
          placement="right"
          width={800}
          closable={true}
          onClose={this.onCloseDrawer}
          visible={this.state.drawerVisible}>
          {}
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

  pkgColumns = () => {
    return this.props.columns.map((item, index) => {
      item.dataIndex = item.key;

      //默认宽度
      if (!item.width) {
        item.width = 200;
      }

      if (item.type) {
        if (item.type == "tags") {
          item.render = Tags;
        } else if (item.type == "action") {
          item.render = Action;
        }
      }
      return item;
    });
  };

  pkgData = () => {
    return this.props.data;
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
}
