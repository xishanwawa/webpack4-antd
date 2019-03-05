/**
 * Created by ***
 */

import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { Form, Input } from "antd";
import QueueAnim from "rc-queue-anim";
import reqwest from "reqwest";
import CustomizedForm from "./customizedForm";
import moment from "moment";
//导入UI组件
class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        username: {
          value: ""
        },
        userage: {
          value: ""
        },
        datepicker: {
          value: moment("2015-06-06")
        },
        select: {
          value: "china"
        },
        radio: {
          value: "a"
        }
      }
    };
  }

  componentDidMount() {}

  handleFormChange = changedFields => {
    this.setState(({ fields }) => ({
      fields: { ...fields, ...changedFields }
    }));
  };

  submit = value => {
    console.log(value);
  };

  render() {
    const fields = this.state.fields;
    return (
      <div style={{ margin: "20px 20px 0", padding: "24px 32px", backgroundColor: "#ffffff" }}>
        <CustomizedForm {...fields} onChange={this.handleFormChange} submit={this.submit} />
        <pre className="language-bash">{JSON.stringify(fields, null, 2)}</pre>
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
