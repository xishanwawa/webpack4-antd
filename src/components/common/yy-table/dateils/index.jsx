/**
 * Created by ***
 */

import React, { Component, PropTypes } from "react";
import { Table, Row, Col } from "antd";
import { Tags, Action } from "../table/lib";
import { sections, datailsData } from "../tpldata";

//导入UI组件
export default class YYDateils extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div>{this.pkgDateils()}</div>;
  }

  pkgDateils = () => {
    return sections.map((item, index) => {
      return (
        <div
          style={{
            borderBottom: sections.length - 1 == index ? "none" : "1px solid #e8e8e8",
            marginBottom: 30
          }}>
          <div
            style={{
              fontSize: "16px",
              marginBottom: "16px",
              color: "rgba(0,0,0,.85)",
              fontWeight: 500
            }}>
            {item.title || "标题呢？"}
          </div>
          <div>
            <Row>{item.type == "card" ? this.pkgItems(item.items) : this.pkgTable(item.items, item.key)}</Row>
          </div>
        </div>
      );
    });
  };

  pkgItems = items => {
    return items.map(item => {
      return (
        <Col span={8}>
          <span
            style={{
              display: "table-cell",
              color: "rgba(0, 0, 0, 0.85)",
              paddingBottom: 20
            }}>
            {item.title + "："}
          </span>
          <span
            style={{
              display: "table-cell",
              color: "rgba(0, 0, 0, 0.65)",
              paddingBottom: 20
            }}>
            {datailsData[item.key] || "--"}
          </span>
        </Col>
      );
    });
  };
  pkgTable = (items, key) => {
    return <Table columns={this.pkgColumns(items)} dataSource={this.pkgData(key)} bordered size="small" />;
  };

  pkgColumns = items => {
    return items.map((item, index) => {
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

  pkgData = key => {
    return datailsData[key];
  };

  static defaultProps = {};
}
