/**
 * Created by ***
 */
import { Table, Divider, Tag } from "antd";
export default (text, record, index) => (
  <span>
    <a href="javascript:;">Invite {record.name}</a>
    <Divider type="vertical" />
    <a href="javascript:;">Delete</a>
  </span>
);
