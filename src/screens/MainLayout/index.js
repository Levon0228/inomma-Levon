import React from "react";
import { Layout, Menu } from "antd";

import styles from "./index.module.css";
import { NavLink } from "react-router-dom";

const { Sider, Header, Content } = Layout;

const MainLayout = ({ children }) => {
  return (
    <Layout hasSider style={{borderRadius: '30px'}}>
      <Sider
        style={{
          overflow: 'auto',
          height: 'calc(100vh - 40px)',
          left: 0,
          top: 0,
          bottom: 0,
          backgroundColor:"#D1D3D4",
          borderRadius: '30px 0 0 30px',
        }}
        breakpoint={"xs"}
      >
        <Menu
          mode="vertical"
          defaultSelectedKeys={['2']}
          style={{backgroundColor:"#D1D3D4", marginTop: "30px", fontWeight: "700" }}
          items={[{
            key: "admin",
            label: (
              <NavLink
                to="/admin"
                className={isActive =>
                  "nav-link" + (!isActive ? " unselected" : "")
                }
              >
                Admin
              </NavLink>
            )
          },
          {
            key: "home",
            label: (
              <NavLink
                to="/"
                className={isActive =>
                  "nav-link" + (!isActive ? " unselected" : "")
                }
              >
                Home
              </NavLink>
            )
          },
          ]}
        />
      </Sider>
      <Header className={styles.header} style={{ padding: 0 }} />
      <Content className={styles.container}>
        {children}
      </Content>
    </Layout>
  )
};

export default MainLayout;
