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
          colorPrimary: '#3b82f6',
          colorSuccess: '#10b981',
          colorWarning: '#f59e0b',
          colorError: '#ef4444',
          colorInfo: '#06b6d4',
          borderRadius: 8,
          fontSize: 14,
        },
        components: {
          Layout: {
            siderBg: '#1f2937',
            triggerBg: '#1f2937',
            bodyBg: '#111827',
          },
          Menu: {
            darkItemBg: '#1f2937',
            darkItemSelectedBg: '#374151',
            darkItemHoverBg: '#374151',
            darkItemColor: '#9ca3af',
            darkItemSelectedColor: '#60a5fa',
            darkItemHoverColor: '#93c5fd',
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
          style={{
            position: 'fixed',
            left: 0,
            top: 0,
            bottom: 0,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <div className="logo-container">
            <h2 className="logo">{!collapsed && 'Zer3aX'}</h2>
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

        <Layout style={{ marginLeft: collapsed ? 80 : 260, transition: 'margin-left 0.2s' }}>
          <Content style={{ background: '#111827', minHeight: '100vh' }}>
            {children}
          </Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default AppLayout;
