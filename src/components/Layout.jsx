import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Layout, Menu, ConfigProvider } from 'antd';
import {
  HomeOutlined,
  ExperimentOutlined,
  SwapOutlined,
  RiseOutlined,
  EnvironmentOutlined
} from '@ant-design/icons';
import './Layout.css';

const { Sider, Content } = Layout;

const AppLayout = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  const menuItems = [
    {
      key: '/',
      icon: <HomeOutlined />,
      label: 'Home',
    },
    {
      key: '/predict',
      icon: <ExperimentOutlined />,
      label: 'Predict',
    },
    {
      key: '/compare',
      icon: <SwapOutlined />,
      label: 'Compare',
    },
    {
      key: '/ranking',
      icon: <RiseOutlined />,
      label: 'Ranking',
    },
    {
      key: '/map',
      icon: <EnvironmentOutlined />,
      label: 'Map',
    },
  ];

  const handleMenuClick = ({ key }) => {
    navigate(key);
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#27AE60',
          colorSuccess: '#2ECC71',
          colorWarning: '#F1C40F',
          colorError: '#E74C3C',
          colorInfo: '#3498DB',
          borderRadius: 10,
          fontSize: 14,
          fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        },
        components: {
          Layout: {
            siderBg: '#FFFFFF',
            triggerBg: '#FFFFFF',
            bodyBg: '#F4F6F7',
          },
          Menu: {
            itemBg: '#FFFFFF',
            itemSelectedBg: '#D4EFDF',
            itemHoverBg: '#E8F8F0',
            itemColor: '#2C3E50',
            itemSelectedColor: '#1E8449',
            itemHoverColor: '#27AE60',
          },
        },
      }}
    >
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={setCollapsed}
          theme="light"
          width={260}
          style={{
            position: 'fixed',
            left: 0,
            top: 0,
            bottom: 0,
            height: '100vh',
            overflow: 'auto',
            boxShadow: '2px 0 8px rgba(0, 0, 0, 0.08)',
            borderRight: '1px solid #E1E8ED'
          }}
        >
          <div className="logo-container">
            <h2 className="logo">{!collapsed && 'Zer3aX'}</h2>
            {!collapsed && <p className="tagline">AI Plant Breeding</p>}
          </div>

          <Menu
            theme="light"
            mode="inline"
            selectedKeys={[location.pathname]}
            items={menuItems}
            onClick={handleMenuClick}
          />

          {!collapsed && (
            <div className="sidebar-footer">
              <p className="footer-text">© 2025 Zer3aX</p>
              <p className="footer-text">Algerian Market</p>
            </div>
          )}
        </Sider>

        <Layout style={{ marginLeft: collapsed ? 80 : 260, transition: 'margin-left 0.2s' }}>
          <Content style={{ background: '#F4F6F7', minHeight: '100vh', padding: '32px 40px' }}>
            {children}
          </Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default AppLayout;
