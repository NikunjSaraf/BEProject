import React, { Component } from "react";
import { Layout, Menu, Breadcrumb, Icon } from "antd";
import "../App.css";
import { Link } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;

class Nav extends Component {
  state = {
    collapsed: false
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1">
              <Icon type="desktop"></Icon>

              <span>Home Page</span>
            </Menu.Item>
            <Menu.Item key="1">
              <Link to="/auth/login">
                <span>Login</span>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: "#fff", padding: 0 }} />
          <Content style={{ margin: "0 16px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
              Bill is a cat.
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            BE Project ©2020 Created by Nikhunj Saraf
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default Nav;
