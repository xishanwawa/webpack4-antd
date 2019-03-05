/**
 * Created by ***
 */

import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { List, Icon, Avatar, Button, Spin } from "antd";
import QueueAnim from "rc-queue-anim";
import reqwest from "reqwest";

//导入UI组件
class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            items: [
                <div className="list-item" key="0" />,
                <div className="list-item" key="1" />,
                <div className="list-item" key="2" />
            ]
        };
    }

    componentDidMount() {}

    getClickData = () => {
        request({
            url: "/api/index",
            method: "get",
            error: function(err) {},
            success: function(resp) {
                console.log(resp);
            }
        });
    };
    onClick = () => {
        this.setState({
            show: !this.state.show
        });
    };
    onAdd = () => {
        let items = this.state.items;
        items.push(<div className="list-item" key={Date.now()} />);
        this.setState({
            show: true,
            items
        });
    };
    onRemove = () => {
        let items = this.state.items;
        items.splice(items.length - 1, 1);
        this.setState({
            show: true,
            items
        });
    };
    render() {
        return (
            <div className="queue-demo">
                <p className="buttons">
                    <Button type="primary" onClick={this.onClick}>
                        切换
                    </Button>
                    <Button onClick={this.onAdd} style={{ marginLeft: 10 }}>
                        添加
                    </Button>
                    <Button onClick={this.onRemove} style={{ marginLeft: 10 }}>
                        删除
                    </Button>
                </p>
                <div className="demo-content">
                    <div className="demo-thead" key="a" />
                    <div className="demo-tbody" key="b">
                        <QueueAnim component="div" type={["right", "left"]} leaveReverse>
                            {this.state.show ? this.state.items : null}
                        </QueueAnim>
                    </div>
                </div>
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
