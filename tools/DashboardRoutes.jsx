import React from "react";
import {
  CalendarOutlined,
  RocketOutlined,
  CloudUploadOutlined,
  SettingOutlined,
  DashboardOutlined,
  UserOutlined,
  TeamOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";

export const userRoutes = [
  {
    key: "/dashboard/user/my-bookings",
    icon: <CalendarOutlined />,
    label: "My Bookings",
  },
  {
    key: "/dashboard/user/active-tours",
    icon: <RocketOutlined />,
    label: "Active Tours",
  },
  {
    key: "/dashboard/user/memory-vault",
    icon: <CloudUploadOutlined />,
    label: "Memory Vault",
  },
  {
    key: "/dashboard/user/settings",
    icon: <SettingOutlined />,
    label: "Settings",
  },
];

export const adminRoutes = [
  {
    key: "/dashboard/admin-overview",
    icon: <DashboardOutlined />,
    label: "Overview",
  },
  {
    key: "/dashboard/admin-tours",
    icon: <RocketOutlined />,
    label: "Tours",
  },
  {
    key: "/dashboard/admin-bookings",
    icon: <CalendarOutlined />,
    label: "Bookings",
  },
  {
    key: "/dashboard/admin-media",
    icon: <CloudUploadOutlined />,
    label: "Media",
  },
  {
    key: "/dashboard/admin-guide",
    icon: <UserOutlined />,
    label: "Guides",
  },
  {
    key: "/dashboard/admin-customers",
    icon: <TeamOutlined />,
    label: "Customers",
  },
  {
    key: "/dashboard/admin-content",
    icon: <AppstoreOutlined />,
    label: "Content",
  },
];

export const guideItems = [
  {
    key: "/dashboard/guide/dashboard",
    icon: <CalendarOutlined />,
    label: "Dashboard",
  },
  {
    key: "/dashboard/guide/tour-management",  
    icon: <RocketOutlined />,
    label: "Tours Management",  
  },
  {
    key: "/dashboard/guide/profile",
    icon: <CloudUploadOutlined />,
    label: "Profile",
  },
];
