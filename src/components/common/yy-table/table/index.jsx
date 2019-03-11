/**
 * Created by ***
 */

import React, { Component, PropTypes } from "react";
import { Drawer, Modal, Button, Table, Icon, Row, Col, Tabs, Timeline } from "antd";
const TabPane = Tabs.TabPane;

import { Tags, Action } from "./lib";

import { columns, data } from "../tpldata";
//导入UI组件
export default class YYSTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getRowSelection = () => {
    let rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        this.props.rowSelectionChange({
          selectedRowKeys,
          selectedRows
        });
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
      <Table
        rowSelection={this.getRowSelection()}
        scroll={{ x: true }}
        columns={this.pkgColumns()}
        dataSource={this.pkgData()}
        onRow={record => {
          return {
            onClick: event => {
              this.props.onRow(event);
            } // 点击行
          };
        }}
        bordered
      />
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

  static defaultProps = {
    selectedRowKeys: [],
    selectedRows: [],
    columns: columns,
    data: data,
    onRow: event => {},
    rowSelectionChange: data => {
      console.log({ data: data });
    }
  };
}
