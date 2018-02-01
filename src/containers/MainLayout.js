import React from 'react';
import PropTypes from 'prop-types';

import { Layout, Menu, Breadcrumb, Icon } from 'antd';

const { Header, Content, Sider } = Layout;

const MainLayer = props => (
  <Layout>
    <Header className="header">
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1">Bares</Menu.Item>
      </Menu>
    </Header>
    <Layout>
      <Sider width={200} style={{ background: '#fff' }} collapsed={window.innerWidth <= 500} collapsible>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <Menu.Item key="1"><Icon type="bars" /><span>Lista</span></Menu.Item>
          <Menu.Item key="2"><Icon type="plus" /><span>Adicionar</span></Menu.Item>
        </Menu>
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Bares</Breadcrumb.Item>
          <Breadcrumb.Item>Lista</Breadcrumb.Item>
        </Breadcrumb>
        <Content style={{
          background: '#fff',
          padding: 24,
          margin: 0,
          minHeight: 280,
        }}
        >
          {props.children}
        </Content>
      </Layout>
    </Layout>
  </Layout>
);

MainLayer.propTypes = {
  children: PropTypes.element,
};

MainLayer.defaultProps = {
  children: <div />,
};

export default MainLayer;
