/**
 * Created by ***
 */
import { Table, Divider, Tag } from "antd";
export default (text, data, index) => {
  return (
    <span>
      {data.tags.map(tag => {
        let color = tag.length > 3 ? "geekblue" : "green";
        if (tag === "loser") {
          color = "volcano";
        }
        return (
          <Tag color={color} key={tag}>
            {tag.toUpperCase()}
          </Tag>
        );
      })}
    </span>
  );
};
