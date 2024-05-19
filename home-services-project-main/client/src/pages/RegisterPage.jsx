import { useState } from "react";
import { Button, Form, Input, Checkbox, Radio, message } from "antd";
import Navbar from "../components/Navbar.jsx";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function RegisterPage() {
  // Initialize form
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const inputStyle = "border rounded-lg border-grey300 w-[100%] h-12 px-4 py-2";

  const formStyle =
    "bg-white border border-grey300 rounded-lg h-full mt-[3.25rem] mb-[5.4375rem] px-[5.4375rem] pt-[2rem] pb-[3.3125rem] flex flex-col w-[840px] items-center gap-4";

  const labelStyle = {
    marginTop: "10px",
    color: "var(--gray-900, #323640)",
    fontFamily: "Prompt",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "150%", // 24px
  };

  // State for checked checkbox and form submission
  const [isChecked, setIsChecked] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [role, setRole] = useState("customer"); // State for role

  // Handle form submission
  const onFinish = async (values) => {
    if (!isSubmitting) {
      try {
        setIsSubmitting(true);

        // Prepare registration data
        const data = {
          fullName: values.fullName,
          phoneNumber: values.phoneNumber,
          email: values.email,
          password: values.password,
          role: role, // Include role in registration data
        };

        // Make API request
        const response = await axios.post(
          "http://localhost:4000/auth/register",
          data
        );

        // Check API response
        if (response.status === 200) {
          message.success("Registration successful");
          // Redirect to login page or another page on success
          navigate("/login");
        } else {
          message.error("Registration failed");
        }
      } catch (error) {
        console.error(error);
        message.error("Please fill in all the fields");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  // Handle checkbox change
  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  // Handle role change
  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  return (
    <div className="flex flex-col">
      <Navbar title="Our Services" />
      <div className="flex w-[100%] min-h-screen justify-center bg-bg">
        <Form
          labelCol={{ span: 10 }}
          wrapperCol={{ span: 24 }}
          form={form}
          autoComplete="off"
          onFinish={onFinish}
          className={formStyle}
        >
          {/* Name */}
          <h1 className="text-blue950 text-center text-[32px] font-medium">
            Register
          </h1>

          <Form.Item
            className="w-[80%] h-[72px]"
            name="fullName"
            label={<span style={labelStyle}>Full Name</span>}
            labelAlign="top"
            labelCol={{ span: 24 }}
            rules={[
              {
                required: true,
                message: "Please enter your full name",
              },
              {
                validator: (rule, value) => {
                  if (!/^[-a-zA-Z'.\s]+$/.test(value)) {
                    return Promise.reject("Please enter a valid full name");
                  }
                  return Promise.resolve();
                },
              },
            ]}
          >
            <Input
              className={inputStyle}
              placeholder="Please enter your full name"
            />
          </Form.Item>

          {/* Phone Number */}
          <Form.Item
            className="w-[80%] h-[72px]"
            name="phoneNumber"
            label={<span style={labelStyle}>Phone Number</span>}
            labelAlign="top"
            labelCol={{ span: 24 }}
            rules={[
              {
                required: true,
                message: "Please enter your phone number, e.g. +923001234567",
              },
              {
                validator: (rule, value) => {
                  if (!/^\+92\d{10}$/.test(value)) {
                    return Promise.reject("Please enter a valid phone number");
                  }
                  return Promise.resolve();
                },
              },
            ]}
          >
            <Input
              className={inputStyle}
              placeholder="Please enter your phone number"
            />
          </Form.Item>

          {/* Email */}
          <Form.Item
            className="w-[80%] h-[72px]"
            name="email"
            label={<span style={labelStyle}>Email </span>}
            labelAlign="top"
            labelCol={{ span: 24 }}
            rules={[
              {
                type: "email",
                message: "Please enter a valid email",
              },
              {
                required: true,
                message: "Please enter your email",
              },
              {
                validator: (rule, value) => {
                  if (
                    !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/i.test(
                      value
                    )
                  ) {
                    return Promise.reject("Please enter a valid email");
                  }
                  return Promise.resolve();
                },
              },
            ]}
          >
            <Input
              className={inputStyle}
              placeholder="Please enter your email"
            />
          </Form.Item>

          {/* Password */}
          <Form.Item
            className="w-[80%]"
            name="password"
            label={<span style={labelStyle}>Password</span>}
            labelAlign="top"
            labelCol={{ span: 24 }}
            rules={[
              {
                required: true,
                message: "Please enter your password",
              },
              {
                validator: (rule, value) => {
                  if (
                    !/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])/.test(
                      value
                    )
                  ) {
                    return Promise.reject("Please enter a valid password");
                  }
                  if (!/[A-Z]/.test(value)) {
                    return Promise.reject(
                      "Must have at least 1 uppercase letter"
                    );
                  }
                  if (!/[a-z]/.test(value)) {
                    return Promise.reject(
                      "Must have at least 1 lowercase letter"
                    );
                  }
                  if (!/[0-9]/.test(value)) {
                    return Promise.reject("Must have at least 1 digit");
                  }
                  if (!/[!@#$%^&*]/.test(value)) {
                    return Promise.reject(
                      "Must have at least 1 special character"
                    );
                  }
                  if (value.length < 8) {
                    return Promise.reject(
                      "Password must be at least 8 characters long"
                    );
                  }
                  return Promise.resolve();
                },
              },
            ]}
          >
            <Input.Password
              className={inputStyle}
              placeholder="Please enter your password"
            />
          </Form.Item>

          {/* Role */}
          <Form.Item
            className="w-[80%]"
            name="role"
            label={<span style={labelStyle}>Role</span>}
            labelAlign="top"
            labelCol={{ span: 24 }}
            rules={[
              {
                required: true,
                message: "Please select your role",
              },
            ]}
          >
            <Radio.Group onChange={handleRoleChange} value={role}>
              <Radio value="customer">Customer</Radio>
              <Radio value="contractor">Contractor</Radio>
            </Radio.Group>
          </Form.Item>

          {/* Accept Terms and Conditions */}
          <Form.Item>
            <div className="h-[36px]">
              <label className="flex items-center">
                <Checkbox checked={isChecked} onChange={handleCheckboxChange} />
                <span
                  className="ml-2"
                  style={{
                    color: "var(--gray-900, #323640)",
                    fontFamily: "Prompt",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "150%", // 24px
                  }}
                >
                  I agree to the{" "}
                  <a
                    href="#"
                    className="underline"
                    style={{
                      color: "var(--blue-600, #336DF2)",
                      fontFamily: "Prompt",
                      fontSize: "16px",
                      fontStyle: "normal",
                      fontWeight: "600",
                      lineHeight: "150%", // 24px
                      textDecorationLine: "underline",
                    }}
                  >
                    terms and conditions
                  </a>{" "}
                  and{" "}
                  <a
                    href="#"
                    className="underline"
                    style={{
                      color: "var(--blue-600, #336DF2)",
                      fontFamily: "Prompt",
                      fontSize: "16px",
                      fontStyle: "normal",
                      fontWeight: "600",
                      lineHeight: "150%", // 24px
                      textDecorationLine: "underline",
                    }}
                  >
                    privacy policy
                  </a>
                </span>
              </label>
            </div>

            <Button
              className={`btn-blue-950 w-full h-10 my-5 ${
                !isChecked || isSubmitting
                  ? "disabled:opacity-50 cursor-not-allowed"
                  : ""
              }`}
              htmlType="submit"
              disabled={!isChecked || isSubmitting}
              style={{
                marginTop: "30px",
                marginBottom: "30px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                fontFamily: "Prompt",
              }}
            >
              {isSubmitting ? "Registering..." : "Register"}
            </Button>

            <div className="text-center">
              <a
                className="btn-ghost"
                onClick={() => navigate("/login")}
                style={{
                  color: "var(--blue-600, #336DF2)",
                  fontFamily: "Prompt",
                  fontSize: "16px",
                  fontWeight: "600",
                  textDecorationLine: "underline",
                }}
              >
                Back to Login
              </a>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default RegisterPage;
