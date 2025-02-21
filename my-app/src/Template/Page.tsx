import Buttons from "../Atoms/Button";
import React from "react";


import { Layout, Flex } from "antd";
import {
  layoutStyle,
  headerStyle,
  siderStyle,
  contentStyle,
  footerStyle,
} from "../Atoms/Layout";
const { Header, Footer, Sider, Content } = Layout;

const Pages: React.FC = () => {
  return (
    <div>
      <Flex gap="middle" wrap>
        <Layout style={layoutStyle}>
          <Header style={headerStyle}>Form Builder</Header>
          <Layout>
            <Sider width="25%" style={siderStyle}>
              Form Components
              <Buttons />
            </Sider>

            <Content style={contentStyle}>Drag the components here</Content>
          </Layout>
          <Footer style={footerStyle}>@copyright 2025</Footer>
        </Layout>
      </Flex>
    </div>
  );
};

export default Pages;
