import React from "react";
import { Button, Row, Col } from "antd";
import styles from "./index.module.css";
import ItemCard from "./components/ItemCard";
import useRandomItems from "../../../../hooks/useRandomItems";

const Homepage = () => {
  const { itemsLimit, handlePickRandomItems, pickedItems } = useRandomItems();


  return (
    <div>
      <Button type="primary" onClick={handlePickRandomItems}>
        Pick random {itemsLimit} items
      </Button>

      <div className={styles.contentWrapper} >
        <Row type="flex" justify="space-evenly">
          {pickedItems.map((item, index) => (
            <Col key={item.name} span={4} >
              <ItemCard title={index} {...item} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  )
};

export default Homepage;
