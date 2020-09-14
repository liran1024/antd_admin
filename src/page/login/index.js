import React from "react";
import { Input ,Button } from "antd";
import { UserOutlined ,SafetyOutlined} from "@ant-design/icons";
import "./index.less";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <div className="login_wrapper">
          <div className="login_box">
              <h2>登陆</h2>
            <Input placeholder="userName" prefix={<UserOutlined />} className="login_input" />
            <Input placeholder="userPassword" prefix={<SafetyOutlined />} className="login_input" />
            <Button type="primary">go home</Button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
