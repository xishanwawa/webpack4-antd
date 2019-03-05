/**
 * Created by ***
 */

import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { YYTable } from "common";

import { columns, data } from "./tpldata";

//导入UI组件
class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: columns,
      data: data
    };
  }

  onChange = (type, data) => {
    console.log({ type, data });
    debugger;
  };

  render() {
    return (
      <div style={{ margin: 20, padding: "20px", backgroundColor: "#ffffff" }}>
        <YYTable onChange={this.onChange} columns={this.state.columns} data={this.state.data} />
        
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    $$state: state.customer
  };
}

module.exports = connect(
  mapStateToProps,
  {}
)(Index);

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
