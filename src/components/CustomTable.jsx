import React from "react";
import { Table } from "antd";
import CustomSearch from "./Search";
// import CustomSearch from "./Search";

const columns = [
  // {
  //   title: "User ID",
  //   dataIndex: "_id",
  //   sorter: {
  //     compare: (a, b) => {
  //       debugger;
  //       return (
  //         a._id.split("").reverse().join("") -
  //         b._id.split("").reverse().join("")
  //       );
  //     },
  //   },
  //   render: (value,obj) =>{} ,
  // },
  {
    title: "User Name",
    dataIndex: "user_name",
    sorter: {
      compare: (a, b) => a.user_name.localeCompare(b.user_name),
    },
  },
  {
    title: "Email",
    dataIndex: "email",
    sorter: {
      compare: (a, b) => a.email.localeCompare(b.email),
    },
  },
  {
    title: "Phone",
    dataIndex: "phone",
    sorter: {
      compare: (a, b) => a.phone.localeCompare(b.phone),
    },
  },
  {
    title: "Company",
    dataIndex: "company",
    sorter: {
      compare: (a, b) => a.company.localeCompare(b.company),
    },
  },
  {
    title: "LinkedIn Url",
    dataIndex: "linkedin_url",
    sorter: {
      compare: (a, b) => a.linkedin_url.localeCompare(b.linkedin_url),
    },
  },
];

const CustomTable = (props) => {
  const { dataSource } = props;

  const onChange = (pagination, filters, sorter, extra) => {
    // console.log("params", pagination, filters, sorter, extra);
  };

  const onSearch = () => {};

  return (
    <div className="max-auto px-3 py-3">
      <div className="flex justify-between items-center">
        <span>Total Users ({dataSource?.length || 0})</span>
        <CustomSearch onSearch={onSearch} />
      </div>
      <div>
        <Table
          className="h-96"
          columns={columns}
          dataSource={dataSource}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default CustomTable;
