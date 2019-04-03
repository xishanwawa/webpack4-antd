/**
 * Created by ytm on 4/7/16.
 */
import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { Link } from "react-router";
import "./index.less";

import { Layout, Menu, Breadcrumb, Icon, Button, Col, Row, Dropdown } from "antd";
const SubMenu = Menu.SubMenu;

const { Header, Content, Sider, Footer } = Layout;

class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    collapsed: false,
    selectedKeys: "home",
    keyPath: ["home"],
    keyObj: {
      home: "主页",
      "group-1": "客户",
      customer: "客户列表",
      list: "列表"
    }
  };

  componentDidMount() {
    const { location } = this.props;
    const pathSnippets = location.pathname.split("/").filter(i => i);
    this.setState({});
  }

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  handleClick = e => {
    console.log("click ", e);
    this.setState({ keyPath: e.keyPath.reverse() });
  };

  render() {
    const menuDropdown = (
      <Menu>
        <Menu.Item key="0">
          <a target="_blank" rel="noopener">
            个人中心
          </a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="2">登出</Menu.Item>
      </Menu>
    );

    return (
      <Layout>
        <Layout>
          <Header>
            <Row>
              <Col span={18}>
                <div className="logo" />
              </Col>
              <Col span={6} justify={"end"}>
                <Dropdown overlay={menuDropdown}>
                  <a className="ant-dropdown-link" href="#">
                    ytm <Icon type="down" />
                  </a>
                </Dropdown>
              </Col>
            </Row>
          </Header>
        </Layout>
        <Layout>
          <Sider width={200} style={{ background: "#fff", marginRight: 0 }}>
            <Menu
              mode="inline"
              defaultSelectedKeys={["home"]}
              defaultOpenKeys={["group-1"]}
              onClick={this.handleClick}
              style={{ height: "100%", borderRight: 0 }}>
              <Menu.Item key="home">
                <span>
                  <Icon type="home" />
                  <Link to="/home">主页</Link>
                </span>
              </Menu.Item>
              <SubMenu
                key="group-1"
                title={
                  <span>
                    <Icon type="user" />
                    客户
                  </span>
                }>
                <Menu.Item key="customer">
                  <Link to="/customer">客户列表</Link>
                </Menu.Item>
                <Menu.Item key="list">
                  <Link to="/list">列表</Link>
                </Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Content>
            <div style={{ backgroundColor: "#ffffff", padding: 12 }}>
              <Breadcrumb>
                {this.state.keyPath.map((item, index) => {
                  return <Breadcrumb.Item key={index}>{this.state.keyObj[item]}</Breadcrumb.Item>;
                })}
              </Breadcrumb>
            </div>
            <div>{this.props.children || "index"}</div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

function mapStateToProps(state) {
  return {
    $$state: state.Index
  };
}

module.exports = connect(
  mapStateToProps,
  {}
)(Index);
