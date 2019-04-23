/**
 * Created by ***
 */

import React, { Component, PropTypes } from "react";
import { Form, Button, Icon, Modal, List, Radio } from "antd";

export default class ReferContent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ["1"],
      datalist: [{ label: "项目一", value: "1" }]
    };
  }

  render() {
    return (
      <div className="ck-refer-content">
        <div>
          项目一ck-refer-contentck-refer-contentck-refer-content项目一ck-refer-contentck-refer-contentck-refer-content
        </div>
      </div>
    );
  }
}
