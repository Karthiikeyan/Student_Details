import React, { useContext } from 'react';

import { AppContext } from './context';


import { Table, Button, Card } from 'antd';
import { useNavigate } from 'react-router-dom';

const StudentTable = () => {

    const navigate = useNavigate()
    const { registrationData } = useContext(AppContext);

    const columns = [
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "Employee ID",
        dataIndex: "employeeid",
        key: "employeeid",
      },
      {
        title: "Birth Date",
        dataIndex: "birthDate",
        key: "birthDate",
        render: (text) => text.slice(0, 10),
      },
      {
        title: "Email Address",
        dataIndex: "emailAddress",
        key: "emailAddress",
      },
      {
        title: "Mobile",
        dataIndex: "mobile",
        key: "mobile",
      },
      {
        title: "Gender",
        dataIndex: "gender",
        key: "gender",
      },
      {
        title: "Salary",
        dataIndex: "salary",
        key: "salary",
      },
      {
        title: "Department",
        dataIndex: "department",
        key: "department",
      },
      {
        title: "Address",
        dataIndex: "address",
        key: "address",
      },
      {
        title: "City",
        dataIndex: "city",
        key: "city",
      },
      {
        title: "State",
        dataIndex: "state",
        key: "state",
      },
    ];

    const data = registrationData.map((student, index) => ({
      key: index,
      name: student.name,
      employeeid: student.employeeid,
      // children: birthDate ? birthDate.slice(0, birthDate.indexOf('T')) : '',
      birthDate: student.birthDate,
      emailAddress: student.emailAddress,
      mobile: student.mobile,
      gender: student.gender,
      salary: student.salary,
      department: student.department,
      address: student.address,
      city: student.city,
      state: student.state,
    }));

    const navigateToStudentForm = () => {
        navigate('/');
    }

    return (
        <Card className='student-table-container'>
            <Table bordered columns={columns} dataSource={data} />

            {/* <Button className='table-btn' type="primary" htmlType="button" onClick={navigateToStudentForm}>
                Back to Student Form
            </Button> */}
        </Card>
    )

}

export default StudentTable




