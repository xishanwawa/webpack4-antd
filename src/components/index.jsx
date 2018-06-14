
/**
 * Created by ytm on 4/7/16.
 */
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router"
import './index.less'

import { Layout, Menu, Breadcrumb, Icon, Button } from 'antd';
const SubMenu = Menu.SubMenu;

const { Header, Content, Sider, Footer } = Layout;

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
        <Sider width={200} style={{ background: '#fff', marginRight: 0 }}>
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
        <Layout>
          <Header><div className="logo"></div></Header>
          <Content>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>主页</Breadcrumb.Item>
              <Breadcrumb.Item>列表</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 20 }}>{this.props.children || "index"}</div>
          </Content>
          <Footer>Footer</Footer>
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