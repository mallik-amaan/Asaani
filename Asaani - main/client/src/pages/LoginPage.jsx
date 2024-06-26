import { Form, Input, message } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import { useAuth } from "../contexts/authentication";
import "../styles/App.css";

function LoginForm() {
  const { login } = useAuth();
  const navigate = useNavigate();

  

  const onFinish = async (values) => {
    try {
     
      console.log(values);
      const response = await login(values);
      console.log("Response:", response)
  
      if (response.success) {
        navigate("/");
      } else {
        message.error("Email or password is incorrect");
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const handleRegisterClick = () => {
    navigate("/register");
  };

  const inputStyle = "border rounded-lg border-grey300 w-[100%] h-11 px-4 py-2.5";

  const formStyle =
    "bg-white border border-grey300 rounded-lg h-full mt-[52px] mb-[87px] px-[87px] pt-[32px] pb-[53px] w-[740px] items-center gap-4";

  const labelStyle = {
    marginTop: "10px",
    color: "var(--gray-900, #323640)",
    fontFamily: "Prompt",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "150%", // 24px
  };

  return (
    <>
      <div className="flex flex-col">
        <Navbar title="Our Services"/>
        <div className="flex w-[100%] min-h-screen justify-center bg-bg ">
          <Form
            labelCol={{ span: 10 }}
            wrapperCol={{ span: 24 }}
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            autoComplete="off"
            className={formStyle}
          >
            <h1 className="text-blue950 text-center text-[32px] font-medium">
              Log in
            </h1>
            <Form.Item
              className="w-440px h-72px"
              label={<span style={labelStyle}>Email</span>}
              name="email"
              labelAlign="top"
              labelCol={{ span: 24 }}
              rules={[
                {
                  required: true,
                  message: "Please enter your email",
                },
              ]}
            >
              <Input className={inputStyle} placeholder="Please enter your email" />
            </Form.Item>

            <Form.Item
              className="w-440px h-72px"
              label={<span style={labelStyle}>Password</span>}
              labelAlign="top"
              name="password"
              labelCol={{ span: 24 }}
              rules={[
                {
                  required: true,
                  message: "Please enter your password",
                },
              ]}
            >
              <Input.Password
                className={inputStyle}
                placeholder="Please enter your password"
              />
            </Form.Item>

            <Form.Item style={{textAlign: 'center'}}>
              <button  
              className="btn-primary w-[100%] mt-5 mb-5"
              type="submit">
                Log in
              </button>
            </Form.Item>
            <div className="text-center">
              <span className="text-base text-grey700">
                Don't have an account yet HomeServices?
              </span>
              <a className="btn-ghost" onClick={handleRegisterClick}>
                <span className="underline">Register</span>
              </a>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
