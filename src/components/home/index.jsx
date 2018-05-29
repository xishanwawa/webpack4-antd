/**
 * Created by ***
 */

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Button, Input, Row, Col } from 'antd';
import request from "reqwest";


//导入UI组件
class Home extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      newIndex: 0,
      data: [{
        name: "名称1"
      }, {
        name: "名称2"
      }, {
        name: "名称3"
      }]
    }
  }

  componentDidMount() {

  }

  renderData = () => {
    let data = this.state.data;

    data = data.map((item, index) => {
      item.serverIndex = index;
      return item;
    });

    data = data.filter((item, index) => {
      return item.isDelete != 1;
    });
    return data;
  }

  submitData = () => {
    let data = this.state.data;
    data = data.filter((item, index) => {
      return item.isDelete || item.isLocalAdd
    });
    console.log(data);
  }

  addData = () => {
    let data = this.state.data;
    let newIndex = this.state.newIndex;
    newIndex++;
    data.push({
      name: "新名称" + newIndex,
      isLocalAdd: 1
    });
    this.setState({ data, newIndex });
  }

  deleteData = (serverIndex) => {
    let data = this.state.data;
    if (data[serverIndex]["isLocalAdd"]) {
      data.splice(serverIndex, 1);
    } else {
      data[serverIndex]["isDelete"] = 1;
    }
    this.setState(data);
  }

  // getClickData = () => {
  //   request({
  //     url: '/api/index',
  //     method: 'get',
  //     error: function (err) { },
  //     success: function (resp) {
  //       debugger
  //     }
  //   })
  // }


  render() {

    // this.getData();
    let dom = this.renderData().map((item, index) => {
      return <Row key={index}>
        <Col span={2}>{item.name}</Col>
        <Col span={6}><Button  onClick={this.deleteData.bind(this, item.serverIndex)}>删除</Button></Col>
      </Row>
    });

    return (
      <div style={{ padding: 10 }}>
        <div style={{ padding: 20 }}>{dom}</div>
        <Button onClick={this.addData}>新增</Button>{" "}
        <Button type="primary" onClick={this.submitData}>提交</Button>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    $$state: state.home
  }
}

module.exports = connect(mapStateToProps, {
})(Home)



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


