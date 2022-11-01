import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Button, Table } from "antd";
import { selectItems } from "../../../../states/products/productsSlice";

import styles from "./index.module.css";
import moment from "moment";

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    sorter: (a, b) => a.name.localeCompare(b.name),
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
    sorter: (a, b) => a.price - b.price
  },
  {
    title: 'Weight',
    dataIndex: 'weight',
    key: 'weight',
    sorter: (a, b) => a.weight - b.weight
  },
  {
    title: 'Start Date',
    dataIndex: 'startDate',
    key: 'startDate',
    render: (text) => moment(Number(text)).format("DD-MM-YYYY"),
    sorter: (a, b) => Number(a.startDate) - Number(b.startDate)
  },
  {
    title: 'End Date',
    dataIndex: 'endDate',
    key: 'endDate',
    render: (text) => moment(Number(text)).format("DD-MM-YYYY"),
    sorter: (a, b) => Number(a.endDate) - Number(b.endDate)
  },
];

const Dashboard = () => {
  const items = useSelector(selectItems);

  return (
    <div className={styles.wrapper}>
      <h1>Items List</h1>

      {items.length
        ? <Table className={styles.table} dataSource={items} columns={columns} pagination={false} rowKey="name"/>
        : <div className={styles.empty}>List Is Empty</div>}

      <div className={styles.buttonWrapper}>
        <Button type="primary">
          <NavLink to={`/admin/add-item`}>Add items</NavLink>
        </Button>
      </div>
    </div>
  )
};

export default Dashboard;
