import React from "react";
import { DragSource } from "react-dnd";
const style = {
  border: "1px dashed gray",
  backgroundColor: "white",
  padding: "0.5rem 1rem",
  marginRight: "1.5rem",
  marginBottom: "1.5rem",
  cursor: "move",
  float: "left"
};
const Box = Props => {
  let { data, isDragging, connectDragSource } = Props;

  let classNames = isDragging ? "d-datalist-item" : "d-datalist-item active";

  return (
    <div ref={connectDragSource} className={classNames}>
      {data.name}
    </div>
  );
};

export default DragSource(
  "box",
  {
    beginDrag: props => props.data,
    endDrag(props, monitor) {
      const item = monitor.getItem();

      const dropResult = monitor.getDropResult();

      if (dropResult) {
        props.onEnd(item);
      }
    }
  },
  (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  })
)(Box);
