import React from "react";
import {Input} from "antd";
import { UserOutlined } from '@ant-design/icons';
import "./index.less"

export default class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}

    }
    render() {
        return (
            <React.Fragment>
                <div className="login_wrapper">
                    <div className="login_box">
                    <Input placeholder="default size" prefix={<UserOutlined />} />
                    </div>
                </div>
            </React.Fragment>
        )
    }

}