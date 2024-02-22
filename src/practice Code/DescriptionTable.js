import React, { useContext, useEffect } from 'react';
import { Card, Descriptions } from 'antd';
import { AppContext } from './context';

import './App.css'

function BasicTable() {
    const {
      name,
      employeeid,
      birthDate,
      emailAddress,
      mobile,
      gender,
      salary,
      department,
      city,
      state,
      address,
    } = useContext(AppContext);
    

    useEffect(() => {
    }, [name]);

    const items = [
      {
        key: "1",
        label: "Name",
        children: name,
      },
      {
        key: "2",
        label: "Employee ID",
        children: employeeid,
      },
      {
        key: "3",
        label: "Birth Date",
        children: birthDate ? birthDate.slice(0, birthDate.indexOf("T")) : "",
      },
      {
        key: "4",
        label: "Email Address",
        children: emailAddress,
      },
      {
        key: "5",
        label: "Mobile",
        children: mobile,
      },
      {
        key: "6",
        label: "Gender",
        children: gender,
      },
      {
        key: "7",
        label: "Salary",
        children: salary,
      },
      {
        key: "8",
        label: "Department",
        children: department,
      },

      {
        key: "9",
        label: "Address",
        children: address,
      },
      {
        key: "10",
        label: "City",
        children: city,
      },
      {
        key: "11",
        label: "State",
        children: state,
      },
    ];

    return (
        <div >
            <Card style={{ margin: "auto", marginTop: "5vh", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"}}>
            <h1> Student Info</h1>
            <Descriptions  items={items} style={{ fontWeight: "bold" }} bordered/>
        </Card>
        </div>
    )
}

export default BasicTable;


