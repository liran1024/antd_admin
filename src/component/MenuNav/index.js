import React from "react";
import { Menu } from "antd";
import { PieChartOutlined } from "@ant-design/icons";
export default class MenuNav extends React.Component {
  state = {
    collapsed: true,
  };
  render() {
    const state = this.state;
    return (
      <React.Fragment>
        <Menu
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          theme="dark"
          inlineCollapsed={state.collapsed}
        >
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            Option 1
          </Menu.Item>
        </Menu>
      </React.Fragment>
    );
  }
}
