import {
  Form,
  Input,
  Upload,
  Select,
  message,
  InputNumber,
  Image,
  Button,
  Row,
  Col,
} from "antd";
import {
  LoadingOutlined,
  PlusOutlined,
  InboxOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
// import  {useUtils}  from "../../hooks/utils";
import { useState, useEffect } from "react";
import axios from "axios";
import Frame from "../../assets/AdminPhoto/Frame.svg";

function AddService() {
  const { Dragger } = Upload;
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [category, setCategory] = useState([]);

  const [selectedImage, setSelectedImage] = useState(null); //manage the selected image

  const [selectedCategory, setSelectedCategory] = useState("Select category");

  const [fileList, setFileList] = useState([]);

  const handleFileChange = (file) => {
    console.log("file", file);
    const reader = new FileReader();

    reader.onload = (e) => {
      setSelectedImage(e.target.result);
    };

    reader.readAsDataURL(file);
    setFileList([file]);
    return false;
  };

  const handleDeleteImage = () => {
    setSelectedImage(null);
  };

  console.log("Fai Lis", fileList);

  const handleSubmitService = async (values) => {
    try {
      console.log("values", values);
      const user_id = localStorage.getItem("user_id");

      console.log("selectedCategory", selectedCategory);
      console.log("fileList:", fileList);

      const selectedCategoryId = category.data.find(
        (category) => category.category_name === selectedCategory
      )?.category_id;

      console.log("Before sending", user_id);

      const formData = new FormData();
      formData.append("user_id", user_id);

      formData.append("service_name", values.service_name);

      formData.append("category_id", selectedCategoryId);

      // formData.append("file", file)

      formData.append("file", fileList[0]);

      values.items.forEach((item) => {
        formData.append(
          "items",
          JSON.stringify({
            sub_service_name: item.name, // Change name to sub_service_name
            unit: item.unit,
            price_per_unit: item.cost, // Change cost to price_per_unit
          })
        );
      });

      for (const [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
      }

      const response = await axios.post(
        "http://localhost:4000/service",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      if (response.status === 200) {
        message.success("Create a new service successfully.");
      } else {
        message.error("Cannot create service");
      }
      navigate("/admin-service");
    } catch (error) {
      console.error(error);
      message.error("Please come and fill in the service.");
    }
  };

  // increase If completed navigate Go to the face admin dashboard

  useEffect(() => {
    axios
      .get("http://localhost:4000/category")
      .then((response) => {
        setData(response.data.data); // Store data in state
        setCategory(response.data.data);
        console.log(response.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  console.log(data.data);
  console.log(category);

  // const isImage = (file) => {
  //   const acceptedImageTypes = ['image/jpeg', 'image/png'];
  //   if (!acceptedImageTypes.includes(file.type)) {
  //     return false;
  //   }
  //   return true;
  // };

  const labelStyle = {
    marginTop: "10px",
    color: "var(--gray-900, #323640)",
    fontFamily: "Prompt",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "150%", 
    width: "12.8125rem",
    textAlign: "left", // 24px
  };

  return (
    <>
      <Form
        labelCol={{ span: 100 }}
        wrapperCol={{ span: 24 }}
        layout="horizontal"
        onFinish={handleSubmitService}
      >
        <div className="bg-grey100 h-full pb-4% md:pb-0 md:pl-60">
          <div className="flex items-center h-20 px-10 justify-between border-b border-grey300 bg-white">
            <h1 className="text-xl font-medium">Add service</h1>
            <div className="flex">
              <button
                className="btn-secondary flex items-center justify-center text-base font-medium w-28 h-11"
                onClick={() => navigate("/admin-service")}
              >
                cancel
              </button>
              <button
                className="btn-primary flex items-center justify-center ml-6 text-base font-medium w-28 h-11"
                type="submit"
              >
                build
              </button>
            </div>
          </div>
          <div className="bg-white mx-10 mt-10 p-6 border border-grey200 rounded-lg">
            {/* flex flex-col items-start  */}

            <Form.Item
              label={<span style={labelStyle}>Service name</span>}
              colon={false}
              rules={[
                {
                  required: true,
                  message: "Please fill in the service.",
                },
              ]}
              name="service_name"
            >
              <Input style={{ width: "50%" }} />
            </Form.Item>

            <Form.Item
              label={<span style={labelStyle}>Category</span>}
              colon={false}
              rules={[
                {
                  required: true,
                  message: "Please select the category",
                },
              ]}
              required
            >
              <Select
                value={selectedCategory}
                style={{ width: "50%" }}
                onChange={(value) => setSelectedCategory(value)}
                rules={[
                  {
                    required: true,
                    message: "Please select the category",
                  },
                ]}
              >
                {data &&
                  data.data &&
                  data.data.map((categoryItem) => (
                    <Select.Option
                      key={categoryItem.category_id}
                      value={categoryItem.category_name}
                    >
                      {categoryItem.category_name}
                    </Select.Option>
                  ))}
              </Select>
            </Form.Item>

            {/* <div className="h-40 w-8/12 pr-16 mb-10 flex justify-between "> */}
            <Form.Item
              label={<span style={labelStyle}>picture</span>}
              colon={false}
              rules={[
                {
                  required: true,
                  message: "Please select pictures",
                },
              ]}
              required
            >
              <Upload.Dragger
                style={{ width: "50%" }}
                name="file"
                accept=".png,.jpg,.jpeg"
                beforeUpload={(file) => {
                  const isImage = file.type.startsWith("image/");
                  const isLt5M = file.size / 1024 / 1024 < 5;
              
                  if (!isImage) {
                    message.error("Please upload image files only.");
                  }
              
                  if (!isLt5M) {
                    message.error("The image file size must not exceed. 5MB");
                  }
              
                  if (isImage && isLt5M) {
                    handleFileChange(file);
                  }
              
                  return false; // Prevent default upload behavior
                }}
                maxFileSize={5 * 1024 * 1024}
                showUploadList={false}
                className="relative"
                rules={[
                  {
                    required: true,
                    message: "Select pictures",
                  },
                ]}
              >
                {selectedImage && (
                  <div>
                    <Image src={selectedImage} alt="uploaded" width={144} />
                  </div>
                )}
                <div>
                  {!selectedImage && (
                    <>
                      <InboxOutlined style={{ fontSize: "36px" }} />
                      <p className="ant-upload-text">
                        <span className="text-blue600 text-base not-italic font-semibold underline">
                          Upload pictures
                        </span>{" "}
                        or Drag and place here
                      </p>
                      <p className="ant-upload-hint">
PNG, JPG size not more than 5MB                      </p>
                    </>
                  )}
                </div>
              </Upload.Dragger>
              <div className="flex justify-between" style={{ width: "50%" }}>
                <div className="text-grey700 text-xs z-0 mt-1">
                  Recommended image size: 1440 x 225 PX
                </div>
                <div className=" text-blue500 text-base not-italic font-semibold underline">
                  {" "}
                  <a onClick={handleDeleteImage}>Delete images</a>
                </div>
              </div>
            </Form.Item>
            {/* </div> */}

            <hr className="mb-10 text-grey300 "></hr>

            <div className="mb-10 text-grey700 text-base font-medium ">
              Sub -service list
            </div>
            {/* <Row gutter={12}>
              <Col span={24}> */}
                <Form.List
                  name="items"
                  initialValue={[{ name: "", cost: "", unit: "" }]}            
                >
                  {(fields, { add, remove }) => (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "16px",
                      }}
                    >
                      {fields.map((field, index) => (
                        <div
                          key={field.key}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "16px",
                            width: "100%"
                          }}
                        >
                          <span>
                            {" "}
                            <img src={Frame} />
                          </span>

                          <div style={{ width: "50%",}}
                          >
                            <Form.Item
                              colon={false}
                              label="Program name" 
                              name={[field.name, "name"]}
                              labelAlign="top"
                              labelCol={{ span: 24 }}
                              rules={[
                                {
                                  required: true, // Only the first one is required
                                  message: "Please fill in the list.",
                                },
                              ]}    
                                            
                            >
                              <Input name="sub_service_name" />
                            </Form.Item>
                          </div>

                          <div   style={{ width: "25%", }}>
                            <Form.Item
                              colon={false}
                              label="Service fee / 1 unit"
                              name={[field.name, "cost"]}
                              labelAlign="top"
                              labelCol={{ span: 24 }}
                              rules={[
                                {
                                  message: "Please fill out the service fee.",
                                },
                                {
                                  validator(_, value) {
                                    if (value <= 20000) {
                                      return Promise.resolve();
                                    }
                                    return Promise.reject(
                                      "The service fee must not exceed. 20000"
                                    );
                                  },
                                },
                              ]}
                            >
                              <Input
                                type="number"
                                min={0}
                                name="price_per_unit"
                                suffix="฿"
                              />
                            </Form.Item>
                          </div>
                          <div 
                          style={{ width: "25%", }}
                          >
                            <Form.Item
                              colon={false}
                              label="Service unit"
                              name={[field.name, "unit"]}
                              labelAlign="top"
                              labelCol={{ span: 24 }}
                              rules={[
                                {
                                  message: "Please fill out the service unit.",
                                },
                              ]}
                            >
                              <Input name="unit" />
                            </Form.Item>
                          </div>
                          <div
                            style={{
                              width: "10%",
                              display: "flex",
                              alignItems: "flex-end",
                            }}
                          >
                            {fields.length > 1 && (
                              <Form.Item
                                colon={false}
                                label=""
                                style={{ marginBottom: 0,}}
                              >
                                <div
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                  }}
                                >
                                  <a
                                    onClick={() => {
                                      remove(field.name);
                                    }}
                                    style={{
                                      textDecoration: "underline",
                                      marginRight: "8px",
                                    }}
                                  >
                                    Delete
                                  </a>
                                </div>
                              </Form.Item>
                            )}
                          </div>
                        </div>
                      ))}

                      <button
                        className="btn-secondary flex items-center justify-center text-base font-medium w-56 h-11"
                        type="button"
                        onClick={() => add()}
                      >
                        + Add items
                      </button>
                    </div>
                  )}
                </Form.List>
              {/* </Col>
            </Row> */}
          </div>
        </div>
      </Form>
    </>
  );
}

export default AddService;
