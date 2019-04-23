import React from "react";
import { DropTarget } from "react-dnd";
import Card from "./box2";
const Dustbin = ({ data, canDrop, isOver, connectDropTarget, moveCard }) => {
  const isActive = canDrop && isOver;
  let backgroundColor = "#ffffff";
  if (isActive) {
    backgroundColor = "darkgreen";
  } else if (canDrop) {
    backgroundColor = "darkkhaki";
  }

  return (
    <div ref={connectDropTarget} className="d-target-con" style={Object.assign({}, { backgroundColor })}>
      {data.map((item, index) => {
        return <Card key={index} index={index}  data={item} moveCard={moveCard} />;
      })}
    </div>
  );
};
export default DropTarget(
  "box",
  {
    drop: () => ({ name: "Dustbin" })
  },
  (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  })
)(Dustbin);
