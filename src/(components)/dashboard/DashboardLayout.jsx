import React, { useCallback } from "react";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  SettingOutlined,
  CalendarOutlined,
  RocketOutlined,
  CloudUploadOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import MyBookings from "./user/MyBookings/MyBookings";
import ActiveTours from "./user/ActiveTours/ActiveTours";
import MemoryVault from "./user/MemoryVault/MemoryVault";
import UserSettings from "./user/Settings/UserSettings";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { adminRoutes, guideItems, userRoutes } from "../../../tools/DashboardRoutes";
const { Header, Content, Footer, Sider } = Layout;




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




  const handelRoute = useCallback((role) => {
  if(role === "admin"){
    return adminRoutes;
  }else if(role === "guide"){
    return guideItems;
  }else{
    return userRoutes;
  }
},[])
  return (
    <Layout className="h-screen bg-white">
      <Sider
        theme="light"
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="demo-logo-vertical bg-white" />
        <img src="/logo.png" className="mb-12 w-[100px] mx-auto" alt="" />
        <Menu
          theme="light"
          mode="inline"
          selectedKeys={[location.pathname]}
          items={handelRoute('sas')}
          onClick={handleMenuClick}
        />
      </Sider>
      <Layout>
        {/* <Header style={{ padding: 0, background: colorBgContainer }} /> */}
        <Content className="overflow-y-auto">
          <div
            style={{
              minHeight: 360,
            
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </div>
        </Content>
       
      </Layout>
    </Layout>
  );
};
export default DashboardLayout;
