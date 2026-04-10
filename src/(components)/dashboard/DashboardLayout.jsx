import React from 'react';
import { UploadOutlined, UserOutlined, VideoCameraOutlined, SettingOutlined, CalendarOutlined, RocketOutlined, CloudUploadOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import MyBookings from './user/MyBookings/MyBookings';
import ActiveTours from './user/ActiveTours/ActiveTours';
import MemoryVault from './user/MemoryVault/MemoryVault';
import UserSettings from './user/Settings/UserSettings';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
const { Header, Content, Footer, Sider } = Layout;
const menuItems = [
  {
    key: '/dashboard/user/my-bookings',
    icon: <CalendarOutlined />,
    label: 'My Bookings',
  },
  {
    key: '/dashboard/user/active-tours',
    icon: <RocketOutlined />,
    label: 'Active Tours',
  },
  {
    key: '/dashboard/user/memory-vault',
    icon: <CloudUploadOutlined />,
    label: 'Memory Vault',
  },
  {
    key: '/dashboard/user/settings',
    icon: <SettingOutlined />,
    label: 'Settings',
  },
];

// NavRoutes removed as they are already defined in main.jsx and menuItems handles the navigation labels.


const DashboardLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const handleMenuClick = (e) => {
    navigate(e.key);
  };
  return (
    <Layout className='h-screen'>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={broken => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu 
          theme="dark" 
          mode="inline" 
          selectedKeys={[location.pathname]} 
          items={menuItems} 
          onClick={handleMenuClick}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content className='overflow-y-auto' >
          <div
            style={{
           
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
           <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default DashboardLayout;