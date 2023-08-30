import React, { useState, useEffect } from "react";
import { Table } from "antd";
import CustomSearch from "./Search";
import client from "../graphql/apollo-client";
import gql from "graphql-tag";
import Link from "next/link";
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
    render: (value) => (
      <Link href={value} target="_blank">
        {value}
      </Link>
    ),
  },
];

const CustomTable = (props) => {
  const { dataSource } = props;
  const [users, setUsers] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [initialLoad, setInitialLoad] = useState(true);

  const onChange = (pagination, filters, sorter, extra) => {
    // console.log("params", pagination, filters, sorter, extra);
  };

  useEffect(() => {
    if (!searchValue) {
      setUsers(dataSource);
      setInitialLoad(true);
    }
  }, [initialLoad]);

  const onSearch = async (v) => {
    const SEARCH_USERS_QUERY = gql`
      query SearchUsers($filter: String!) {
        searchUsers(filter: $filter) {
          user_name
          email
          phone
          linkedin_url
          company
        }
      }
    `;
    const {
      data: { searchUsers },
      error,
    } = await client
      .query({
        query: SEARCH_USERS_QUERY,
        variables: { filter: searchValue },
      })
      .then((res) => res)
      .catch((err) => err);
    setUsers(searchUsers);
  };
  const OnSearchChange = (e) => {
    const { value } = e.target;
    if (!value) setInitialLoad(false);
    setSearchValue(value);
  };

  return (
    <div className="max-auto px-3 py-3">
      {users ? (
        <>
          <div className="flex justify-between items-center">
            <span>Total Users ({users?.length || 0})</span>
            <CustomSearch onChnage={OnSearchChange} onSearch={onSearch} />
          </div>
          <div>
            <Table
              className="h-96"
              columns={columns}
              dataSource={users}
              onChange={onChange}
            />
          </div>
        </>
      ) : null}
    </div>
  );
};

export default CustomTable;
