import React, { useContext } from "react";
import { AppContext } from "./context";
import { Button, Card, Col, DatePicker, Form, Input, InputNumber, Row, Select, Space } from 'antd';
import {ADD_STUDENT} from './reducer';

import { useNavigate } from "react-router-dom";
import StudentTable from "./StudentTable";
const { Option } = Select;

function StudentForm() {
    const [form] = Form.useForm();
    const {dispatch} = useContext(AppContext);
    const navigate = useNavigate();

    const onFinish = (values) => {
        values.birthDate = new Date(values.birthDate).toISOString();

        dispatch({type: ADD_STUDENT, payload: values});
        navigate('/');
    };

    const onReset = () => {
        form.resetFields();
    };

    return (
      <div>
        <Card
          style={{
            maxWidth: 600,
            margin: "auto",
            marginTop: "5vh",
            marginBottom: "5vh",
            backgroundColor: "#FCFBFC	",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          }}
          bordered={true}
        >
          <h1>Student Registration Form</h1>
          <Form form={form} layout="vertical" onFinish={onFinish}>
            <Row gutter={16}>
              <Col lg={12} md={24} sm={24} xs={24}>
                <Form.Item
                  name="name"
                  label="Name"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input maxLength={50} style={{ width: "100%" }} />
                </Form.Item>
              </Col>
              <Col lg={12} md={24} sm={24} xs={24}>
                <Form.Item
                  name="employeeid"
                  label="Employee Id"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input maxLength={50} style={{ width: "100%" }} />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col lg={12} md={24} sm={24} xs={24}>
                <Form.Item
                  name="birthDate"
                  label="Birth Date"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <DatePicker style={{ width: "100%" }} />
                </Form.Item>
              </Col>
              <Col lg={12} md={24} sm={24} xs={24}>
                <Form.Item
                  name="emailAddress"
                  label="Email Address"
                  rules={[
                    {
                      required: true,
                      type: "email",
                    },
                  ]}
                >
                  <Input maxLength={100} style={{ width: "100%" }} />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col lg={12} md={24} sm={24} xs={24}>
                <Form.Item
                  name="mobile"
                  label="Mobile"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <InputNumber maxLength={10} style={{ width: "100%" }} />
                </Form.Item>
              </Col>
              <Col lg={12} md={24} sm={24} xs={24}>
                <Form.Item
                  name="gender"
                  label="Gender"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Select
                    placeholder="Select a option"
                    allowClear
                    style={{ width: "100%" }}
                  >
                    <Option value="male">Male</Option>
                    <Option value="female">Female</Option>
                    <Option value="other">Other</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col lg={12} md={24} sm={24} xs={24}>
                <Form.Item
                  name="salary"
                  label="Salary"
                  rules={[
                    {
                      required: true,
                      message: "Enter your Salary",
                    },
                  ]}
                >
                  <Input maxLength={50} style={{ width: "100%" }} />
                </Form.Item>
              </Col>
              <Col lg={12} md={24} sm={24} xs={24}>
                <Form.Item
                  name="department"
                  label="Department"
                  rules={[
                    {
                      required: true,
                      message: "Please select department",
                    },
                  ]}
                >
                  <Select
                    placeholder="Select a Department"
                    allowClear
                    style={{ width: "100%" }}
                  >
                    <Option value="Mechanical">Mechanical Engineering</Option>
                    <Option value="Civil">Civil Engineering</Option>
                    <Option value="Electrical">Electrical Engineering</Option>
                    <Option value="Computer">Computer Engineering</Option>
                    <Option value="Software">Information Technology</Option>
                    <Option value="Chemical">Communication Engineering</Option>
                    <Option value="Aerospace">Aerospace Engineering</Option>
                    <Option value="Biomedical">Biomedical Engineering</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>

            <Form.Item
              name="address"
              label="Address"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input.TextArea maxLength={300} style={{ width: "100%" }} />
            </Form.Item>

            <Row gutter={16}>
              <Col lg={12} md={24} sm={24} xs={24}>
                <Form.Item
                  name="city"
                  label="City"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input maxLength={50} style={{ width: "100%" }} />
                </Form.Item>
              </Col>
              <Col lg={12} md={24} sm={24} xs={24}>
                <Form.Item
                  name="state"
                  label="State"
                  rules={[
                    {
                      required: true,
                      message: "Please select a state",
                    },
                  ]}
                >
                  <Select
                    placeholder="Select a state"
                    allowClear
                    style={{ width: "100%" }}
                  >
                    <Option value="Andhra Pradesh">Andhra Pradesh</Option>
                    <Option value="Tamil Nadu">Tamil Nadu</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>

            <Form.Item>
              <Space>
                <Button type="primary" htmlType="submit">
                  Save
                </Button>
                <Button htmlType="button" onClick={onReset}>
                  Reset
                </Button>
              </Space>
            </Form.Item>
          </Form>
        </Card>

        <StudentTable />
      </div>
    );
}

export default StudentForm;


