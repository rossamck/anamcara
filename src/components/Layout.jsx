import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { HomeOutlined, MailOutlined } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;

function AppLayout({ children }) {
  return (
    <Layout className="min-h-screen bg-gray-50 font-roboto">
      <Header className="bg-primary text-white shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/">
              <div className="flex items-center">
                <img
                  src="/assets/logo_small_circle.png"
                  alt="Anam Cara Listening"
                  className="h-12 w-auto mr-2 object-contain"
                />
                <img
                  src="/assets/logo_text.png"
                  alt="Anam Cara Text"
                  className="h-12 w-auto object-contain mt-1 hidden lg:block"
                />
                <img
                  src="/assets/logo_text_stacked.png"
                  alt="Anam Cara Text Stacked"
                  className="h-12 w-auto object-contain mt-1 block lg:hidden"
                />
              </div>
            </Link>
          </div>
          <Menu mode="horizontal" theme="dark" className="bg-primary flex ml-auto">
            <Menu.Item key="home" icon={<HomeOutlined />}>
              <Link to="/">Home</Link>
            </Menu.Item>
            {/* <Menu.Item key="about" icon={<InfoCircleOutlined />}>
              <Link to="/about">About</Link>
            </Menu.Item> */}
            <Menu.Item key="contact" icon={<MailOutlined />}>
              <Link to="/contact">Contact</Link>
            </Menu.Item>
          </Menu>
        </div>
      </Header>
      <Content className="flex-grow container mx-auto p-4">
        {children}
      </Content>
      <Footer className="bg-neutral text-white p-4 text-center font-roboto">
        © 2024 Anam Cara
      </Footer>
    </Layout>
  );
}

export default AppLayout;
