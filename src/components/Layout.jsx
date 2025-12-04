import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Layout, Menu, ConfigProvider } from 'antd';
import {
  HomeOutlined,
  ExperimentOutlined,
  SwapOutlined,
  RiseOutlined,
  EnvironmentOutlined,
  DatabaseOutlined
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
    {
      key: '/encyclopedia',
      icon: <DatabaseOutlined />,
      label: 'Encyclopedia',
    },
  ];

  const handleMenuClick = ({ key }) => {
    navigate(key);
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#16a34a',
          colorSuccess: '#10b981',
          colorWarning: '#f59e0b',
          colorError: '#ef4444',
          colorInfo: '#3b82f6',
          borderRadius: 8,
          fontSize: 14,
        },
        components: {
          Layout: {
            siderBg: '#15803d',
            triggerBg: '#15803d',
          },
          Menu: {
            darkItemBg: '#15803d',
            darkItemSelectedBg: '#16a34a',
            darkItemHoverBg: '#22c55e',
          },
        },
      }}
    >
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={setCollapsed}
          theme="dark"
          width={260}
        >
          <div className="logo-container">
            <h2 className="logo">🌱 {!collapsed && 'Zer3aX'}</h2>
            {!collapsed && <p className="tagline">AI Plant Breeding</p>}
          </div>

          <Menu
            theme="dark"
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

        <Layout>
          <Content style={{ padding: '24px 0', background: '#f9fafb' }}>
            {children}
          </Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default AppLayout;
