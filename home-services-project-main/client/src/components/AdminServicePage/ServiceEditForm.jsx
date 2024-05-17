import {
  Form,
  Input,
  Upload,
  Select,
  message,
  InputNumber,
  Image,
  Button,
  Modal,
  Space,
  notification,
} from "antd";
import {
  LoadingOutlined,
  PlusOutlined,
  InboxOutlined,
} from "@ant-design/icons";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import arrow from "../../assets/AdminPhoto/arrow.png";
import dateFormat from "../../utils/dateFormat.js";
import AlertBoxDelete from "../AlertBox.jsx";
import image from "../../assets/AdminPhoto/imageIndex.js";
import { names } from "@ctrl/tinycolor";
import trash from "../../assets/homepagePhoto/trash.svg";

function ServiceEditForm() {
  //render component and package area
  const navigate = useNavigate();
  const params = useParams();
  const { Dragger } = Upload;

  const { serviceId } = useParams();

  //state for category
  const [category, setCategory] = useState([]); //use to map data on category
  const [selectedCategory, setSelectedCategory] = useState(""); //this state store the select category
  const [currentCategory, setCurrentCategory] = useState([]); // the category from serviceID(the data before editng)
  console.log("Change the cat", currentCategory, typeof currentCategory);
  console.log(selectedCategory);

  //state for category to map
  const [data, setData] = useState([]); //use to map category

  //state
  const [service, setService] = useState([]);

  //state for name
  const [editableServiceName, setEditableServiceName] = useState(
    service.service_name
  );

  const [deleteConfirmation, setDeleteConfirmation] = useState(false);

  const currentSubService = service.sub_service; // subservice เดิม

  //state for image
  const [selectedImage, setSelectedImage] = useState(null); //Show the selected picture
  const [fileList, setFileList] = useState([]); //Send to the back of the house
  const [currentImage, setCurrentImage] = useState(""); //Image Fetch
  // const [isModalVisible, setIsModalVisible] = useState(false);
  console.log("b", fileList);

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
    setCurrentImage(null);
  };

  //delete

  // fetch data area

  console.log(category.data); // array of object

  const getService = async (serviceId) => {
    try {
      const response = await axios.get(
        `http://localhost:4000/service/${serviceId}`
      );
      setService(response.data.data);
      setEditableServiceName(response.data.data.service_name);
      setCurrentImage(response.data.data.service_photo);
      setCurrentCategory(response.data.data.category);
      console.log("all data", response.data.data);
    } catch (error) {
      console.error("Error fetching service data:", error);
    }
  };

  console.log("service before updating", service);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:4000/service/${serviceId}`);
      message.success("Delete the service successfully");
      navigate("/admin-service");
    } catch (error) {
      console.error("There is an error in removing promotions.:", error);
    }
  };

  const showDeleteConfirmation = () => {
    setDeleteConfirmation(true);
  };

  const hideDeleteConfirmation = () => {
    setDeleteConfirmation(false);
  };

  // put data API area
  const handleSubmitEdit = async (values) => {
    try {
      console.log("Form values:", values);

      const subServiceData = values["service.sub_service"];

      const user_id = localStorage.getItem("user_id");
      const selectedCategoryId = category.data.find(
        (category) => category.category_name === selectedCategory
      )?.category_id;

      const formData = new FormData();
      formData.append("user_id", user_id);

      // Check if service_name has changed
      if (editableServiceName !== service.service_name) {
        formData.append("service_name", editableServiceName);
      } else {
        formData.append("service_name", service.service_name); // Use the fetched value
      }

      // Check if category_id has changed
      if (selectedCategoryId !== currentCategory.category_id) {
        formData.append("category_id", selectedCategoryId);
      } else {
        formData.append("category_id", currentCategory.category_id); // Use the fetched value
      }

      // Check if file has changed
      if (fileList[0] && fileList[0] !== currentImage) {
        formData.append("file", fileList[0]);
      } else {
        formData.append("file", currentImage); // Use the fetched value
      }

      // Check if sub_service has changed

      formData.append("items", JSON.stringify(subServiceData));

      // Add the unchanged fields
      formData.append("service_created_date", service.service_created_date);

      const response = await axios.put(
        `http://localhost:4000/service/${params.serviceId}`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      if (response.status === 200) {
        message.success("correct service succeed!");
      } else {
        message.error("Cannot update service");
      }
      navigate("/admin-service");
    } catch (error) {
      console.error(error);
      message.error("Error updating service");
    }
  };

  // use effect
  // get category to map
  useEffect(() => {
    axios
      .get("http://localhost:4000/category")
      .then((response) => {
        // Store data in state
        setCategory(response.data.data);
        console.log(response.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    getService(params.serviceId);
  }, [params.serviceId]);

  const labelStyle = {
    marginTop: "10px",
    color: "var(--gray-900, #323640)",
    fontFamily: "Prompt",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "150%",
    width: "12.8125rem",
    textAlign: "left",
  };

  return (
    <>
      <div>
        <Form
          labelCol={{ span: 100 }}
          wrapperCol={{ span: 24 }}
          layout="horizontal"
          onFinish={handleSubmitEdit}
          initialValues={{
            service_name: editableServiceName,
            category_id: selectedCategory,
            service: {
              // sub_service: [],
              service_photo: currentImage,
            },
          }}
        >
          <div className="bg-grey100 h-full pb-4% md:pb-0 md:pl-60">
            <div key={service.service_id}>
              {/* header */}
              <div className="header-detail justify-between  flex items-center h-20 px-10 mt-0 pt-[20px] py-[10px] w-[100%] bg-white  text-grey600 pb-[20px] border-b border-grey300">
                <div className="flex gap-[14px] h-12 w-fit">
                  <img
                    src={arrow}
                    className=" h-[40px] w-[40px] cursor-pointer hover:scale-110 transition"
                    onClick={() => navigate("/admin-service")}
                  />
                  <div className="Header-name">
                    <p className="service-text text-xs">serve</p>
                    <h1
                      name={service.serviceDetail}
                      className="text-black   font-semibold text-xl"
                    >
                      {service.service_name}
                    </h1>
                  </div>
                </div>
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
                    confirm
                  </button>
                </div>
              </div>
              {/* content */}
              <div className="bg-white mx-10 mt-10 p-6 border border-grey200 rounded-lg">
                <Form.Item
                  colon={false}
                  label={<span style={labelStyle}>Service name</span>}
                  required
                >
                  <Input
                    style={{ width: "50%" }}
                    name="service_name"
                    type="text"
                    value={editableServiceName}
                    onChange={(e) => setEditableServiceName(e.target.value)}
                  />
                </Form.Item>

                <Form.Item
                  label={<span style={labelStyle}>Category</span>}
                  colon={false}
                  required
                >
                  <Select
                    value={selectedCategory}
                    style={{ width: "50%" }}
                    name="category_id"
                    onChange={(value) => setSelectedCategory(value)} 
                  >
                    {category.data &&
                      category.data.map((categoryItem) => (
                        <Select.Option
                          key={categoryItem.category_id}
                          value={categoryItem.category_name}
                        >
                          {categoryItem.category_name}
                        </Select.Option>
                      ))}
                  </Select>
                </Form.Item>

                <Form.Item
                  label={<span style={labelStyle}>picture</span>}
                  colon={false}
                  required
                  className="mb-10"
                >
                  {/* {" "} */}
                  <div className="w-3/4 h-40 relative">
                    {currentImage && (
                      <div>
                        <img
                          src={currentImage}
                          alt="selected image"
                          style={{ maxWidth: "50%", maxHeight: "100%" }}
                        />
                      </div>
                    )}

                    {!currentImage && (
                      <Upload.Dragger
                        style={{ width: "50%" }}
                        name="file"
                        accept=".png,.jpg,.jpeg"
                        beforeUpload={(file) => {
                          handleFileChange(file);
                          return false; // Prevent default upload behavior
                        }}
                        maxFileSize={5 * 1024 * 1024}
                        showUploadList={false}
                        className="relative"
                      >
                        {selectedImage && (
                          <div>
                            <Image
                              src={selectedImage}
                              alt="uploaded"
                              width={144}
                            />
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
Or drag and place here                              </p>
                              <p className="ant-upload-hint">
                                PNG, JPG Not over 5MB
                              </p>
                            </>
                          )}
                        </div>
                      </Upload.Dragger>
                    )}
                    <div
                      className="flex justify-between"
                      style={{ width: "50%" }}
                    >
                      <div className="text-grey700 text-xs z-0 mt-1">
                        Recommended image size: 1440 x 225 PX
                      </div>
                      <div className=" text-blue500 text-base not-italic font-semibold underline">
                        {" "}
                        <a onClick={handleDeleteImage}>Delete images</a>
                      </div>
                    </div>
                  </div>
                </Form.Item>

                <hr className="mt-10 mb-10 text-grey300" />

                {/* {service.sub_service.length > 0 && ( */}
                <div className="mb-10 text-grey700 text-base font-medium ">
                  Sub -service list
                </div>
                <Form.List
                  name="service.sub_service"
                  initialValue={service.sub_service}
                >
                  {(subServices, { add, remove }) => (
                    <>
                      {service.sub_service &&
                        subServices.map(({ key, name, ...restField }) => (
                          <div
                            key={key}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "16px",
                              width: "100%",
                            }}
                          >
                            <div style={{ width: "50%" }}>
                              <Form.Item
                                {...restField}
                                name={[name, "sub_service_name"]}
                                label="Program name"
                                labelAlign="top"
                                labelCol={{ span: 24 }}
                                rules={[
                                  {
                                    required: true,
                                    message: "Please fill in the list.",
                                  },
                                ]}
                              >
                                <Input
                                  className="rounded-lg h-11 border border-grey300 mr-4 py-2.5 px-4 focus:border-blue600 focus:outline-none"
                                  placeholder="Program name"
                                />
                              </Form.Item>
                            </div>
                            <div style={{ width: "25%" }}>
                              <Form.Item
                                {...restField}
                                name={[name, "price_per_unit"]}
                                label="Service fee / 1 หน่วย"
                                labelAlign="top"
                                labelCol={{ span: 24 }}
                                rules={[
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
                                  min="0"
                                  max="20000"
                                  step="any"
                                  className="rounded-lg h-11 border border-grey300 mr-4 py-2.5 px-4 focus:border-blue600 focus:outline-none"
                                  placeholder="Service fee / 1 หน่วย"
                                />
                              </Form.Item>
                            </div>
                            <div style={{ width: "25%" }}>
                              <Form.Item
                                {...restField}
                                name={[name, "unit"]}
                                label="Service unit"
                                labelAlign="top"
                                labelCol={{ span: 24 }}
                                rules={[
                                  {
                                    message: "Please fill out the service unit.",
                                  },
                                ]}
                              >
                                <Input
                                  className="rounded-lg h-11 border border-grey300 py-2.5 px-4 focus:border-blue600 focus:outline-none mr-4"
                                  placeholder="Service unit"
                                  name="unit"
                                />
                              </Form.Item>
                            </div>
                            <div
                              style={{
                                width: "10%",
                                display: "flex",
                                alignItems: "flex-end",
                              }}
                            >
                              <Form.Item colon={false} label="">
                                <a
                                  className=" text-blue600 text-base not-italic font-semibold underline"
                                  onClick={() => {
                                    if (subServices.length > 1) {
                                      remove(name);
                                    } else {
                                      notification.error({
                                        message: "Error",
                                        description:
                                          "Must have at least a sub -lislistายการ",
                                        duration: 5, // Set duration (in seconds)
                                      });
                                    }
                                  }}
                                >
                                  Delete
                                </a>
                              </Form.Item>
                            </div>
                          </div>
                        ))}
                      <button
                        className="btn-secondary flex items-center justify-center text-base font-medium w-56 h-11"
                        type="button"
                        onClick={() => {
                          add();
                          // Add a new empty object to newSubService
                        }}
                      >
                        + Add
                      </button>
                    </>
                  )}
                </Form.List>

                <hr className="mt-10 mb-10 text-grey300 "></hr>
                <p className="pb-[25px] ">
                  <span className="text-grey700">Created when</span>
                  <span className="px-[200px] text-black ">
                    {dateFormat(service.service_created_date)}
                  </span>
                </p>
                <p className="pb-[40px] ">
                  <span className="text-grey700">Last edited</span>
                  <span className="px-[190px] text-black ">
                    {dateFormat(service.service_edited_date)}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </Form>
        <div
          className="flex justify-end mr-12 mt-5 text-[#80899C] underline cursor-pointer"
          onClick={showDeleteConfirmation}
        >
          <img
            className="cursor-pointer w-[25px] h-[25px]  "
            src={trash}
            alt="Delete"
          />{" "}
          Delete service
        </div>
        {deleteConfirmation && (
          <AlertBoxDelete
            deleteFunction={handleDelete}
            hideFunction={hideDeleteConfirmation}
            textAlert="Confirm the deletion of items"
            alertQuestion={`You want to delete the list. ${service.service_name} Is it right? ?`}
            primary="Delete"
            secondary="cancel"
          />
        )}
      </div>
    </>
  );
}

export default ServiceEditForm;
