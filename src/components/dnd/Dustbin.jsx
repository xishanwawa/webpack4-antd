import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DropTarget } from 'react-dnd';
import { Button, Icon, Row, Col, Popconfirm, message } from 'antd';

const boxTarget = {
  drop(props, monitor) {
    props.onAddChange(monitor.getItem());
  },
};

@DropTarget("BOX", boxTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop(),
}))
export default class Dustbin extends Component {
  static propTypes = {
    connectDropTarget: PropTypes.func.isRequired,
    isOver: PropTypes.bool.isRequired,
    canDrop: PropTypes.bool.isRequired,
    data: PropTypes.array.isRequired,
  };

  confirm(e) {
    console.log(e);
    message.success('不解风情，男人没有好东西。');
  }
  
  cancel(e) {
    console.log(e);
    message.error('不杀之恩，当以身相许。');
  }

  render() {
    const { canDrop, isOver, connectDropTarget } = this.props;
    const isActive = canDrop && isOver;

    let backgroundColor = '#ffffff';
    if (isActive) {
      backgroundColor = '#dddddd';
    } else if (canDrop) {
      backgroundColor = 'darkkhaki';
    }


    let node = this.props.data.map((item, index) => {
      return <div className="drag-content-item">
        <Row>
          <Col span={20}>{item.name}</Col>
          <Col span={4}>
            <Popconfirm title="陛下，高抬贵手吧?" onConfirm={()=>{this.confirm(item)}} onCancel={()=>{this.cancel()}} okText="爱过" cancelText="爱妃">
              <a href="#"><Icon type="delete" /></a>
            </Popconfirm>
          </Col>
        </Row>
      </div>
    })

    return connectDropTarget(
      <div className="drag-content" style={{ backgroundColor }}>
        {node}
      </div>,
    );
  }
}
