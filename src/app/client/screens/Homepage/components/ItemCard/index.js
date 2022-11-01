import React from "react";
import { Card } from "antd";

const ItemCard = ({ index, name, weight,startDate, endDate, price }) => {

  return (
    <Card title={index} bordered={false}>
      <div>Name: <b>{name}</b></div>
      <div>Weight: <b>{weight}</b></div>
      <div>Start Date: <b>{startDate}</b></div>
      <div>End Date: <b>{endDate}</b></div>
      <hr/>
      <div>Price: <b>{price}</b></div>
    </Card>
  );
}

export default React.memo(ItemCard);
