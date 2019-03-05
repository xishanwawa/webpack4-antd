import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';

const boxSource = {
  beginDrag(props) {
    return  props.data;
  },

  endDrag(props, monitor) {
    const item = monitor.getItem();
    const dropResult = monitor.getDropResult();
  },
};

@DragSource("BOX", boxSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
}))
export default class Box extends Component {
  static propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired,
    data: PropTypes.object.isRequired,
  };

  render() {
    const { isDragging, connectDragSource } = this.props;
    const { name } = this.props.data;
    const opacity = isDragging ? 0.4 : 1;

    return (
      connectDragSource(
        <div className="drag-list-item" style={{opacity }}>
          {name}
        </div>,
      )
    );
  }
}
