import { useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { loginUser } from "../../redux/actions";

import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

import "./sign_in.scss";

const Sign_In = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const onFinish = (values) => {
    dispatch(loginUser(values.email, values.password, history));
  };

  return (
    <div className="wrapper">
      <Form name="login" className="login-form" onFinish={onFinish}>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              type: "email",
              message: "The input is not valid E-mail!",
            },
          ]}
        >
          <Input prefix={<UserOutlined className="" />} placeholder="Email" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please your Password!",
            },
            { min: 6, message: "Minimum 6 characters." },
          ]}
        >
          <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Log in
          </Button>
          <div className="registration">
            <Link to="/sign_up">register now!</Link>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Sign_In;
