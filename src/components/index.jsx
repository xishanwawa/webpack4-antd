
/**
 * Created by ytm on 4/7/16.
 */
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router"
import './index.less'

import { Layout, Menu, Breadcrumb, Icon, Button } from 'antd';
const SubMenu = Menu.SubMenu;

const { Header, Content, Sider } = Layout;

class Index extends React.Component {

  constructor(props) {
    super(props)
  }

  state = {
    collapsed: false,
  }

  componentDidMount() {
  }

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
        <Layout>
          <Header className="header">
            <div className="logo">chaice</div>
          </Header>
          <Layout>
            <Sider width={200} style={{ background: '#fff' }}>
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}
              >
                <SubMenu key="sub1" title={<span><Icon type="user" /><Link to='/home'>主页</Link></span>}>
                  <Menu.Item key="1"><Link to='/home'>主页</Link></Menu.Item>
                  <Menu.Item key="2"><Link to='/customer'>其他</Link></Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Layout style={{ padding: '0 24px 24px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
              </Breadcrumb>
              <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                {this.props.children || "index"}
              </Content>
            </Layout>
          </Layout>
        </Layout>
    )
  }
}


function mapStateToProps(state) {
  return {
    $$state: state.Index
  }
}

module.exports = connect(mapStateToProps, {

})(Index)