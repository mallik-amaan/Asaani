import { useState } from "react";
import { Button, Form, Input, Checkbox, Radio, message } from "antd";
import Navbar from "../Navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function ContractorDetails() {
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
          service: values.fullName,
          experience: values.phoneNumber,
          expertise: values.email,
        };
        console.log("Data", data);
        // Make API request
        const response = await axios.post(
          "http://localhost:4000/addDetails/add",
          data
        );

        // Check API response
        if (response.status === 200) {
          message.success("Registration successful");
          // Redirect to login page or another page on success
          navigate("/login");
        } else {
          message.error("Details Adding failed");
        }
      } catch (error) {
        console.error(error);
        message.error("Error while adding details please try again later.");
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
            Add Details
          </h1>

          <Form.Item
            className="w-[80%] h-[72px]"
            name="fullName"
            label={<span style={labelStyle}>Service</span>}
            labelAlign="top"
            labelCol={{ span: 24 }}
            rules={[
              {
                required: true,
                message: "Please enter your service",
              },
              {
                validator: (rule, value) => {
                  if (!/^[-a-zA-Z'.\s]+$/.test(value)) {
                    return Promise.reject("Please enter a valid service name");
                  }
                  return Promise.resolve();
                },
              },
            ]}
          >
            <Input
              className={inputStyle}
              placeholder="Please enter your Service"
            />
          </Form.Item>

          {/* Phone Number */}
          <Form.Item
            className="w-[80%] h-[72px]"
            name="phoneNumber"
            label={<span style={labelStyle}>Experience (in Years)</span>}
            labelAlign="top"
            labelCol={{ span: 24 }}
            rules={[
              {
                required: true,
                message: "Please enter experience in years",
              },
              {
                validator: (rule, value) => {
                  if (!/^\d+$/.test(value)) {
                    return Promise.reject("Please enter experience in years");
                  }
                  return Promise.resolve();
                },
              },
            ]}
          >
            <Input
              className={inputStyle}
              placeholder="Please enter your  eg. 5"
            />
          </Form.Item>

          {/* Email */}
          <Form.Item
            className="w-[80%] h-[72px]"
            name="email"
            label={<span style={labelStyle}>Expertise in </span>}
            labelAlign="top"
            labelCol={{ span: 24 }}
            rules={[
              {
                type: "text",
                message: "Please enter your expertise in the field",
              },
              {
                required: false,
                message: "Please enter your expertise in the field",
              },
              {},
            ]}
          >
            <Input
              className={inputStyle}
              placeholder="Please enter your expertise in the field"
            />
          </Form.Item>

          {/* Accept Terms and Conditions */}
          <Form.Item>
            <Button
              className={`btn-blue-950 w-full h-10 my-5 `}
              htmlType="submit"
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
              {isSubmitting ? "Submitting..." : "Submit Details"}
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

export default ContractorDetails;
