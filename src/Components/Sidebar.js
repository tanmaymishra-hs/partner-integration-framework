import React from 'react'
import { Link } from 'react-router-dom'
import { ProSidebar, SidebarHeader, SidebarContent, SidebarFooter, MenuItem, Menu, SubMenu } from 'react-pro-sidebar'
export default function Sidebar() {
  return (
    <ProSidebar>
            <SidebarHeader>Pro Sidebar Component</SidebarHeader>
            <SidebarContent>
            <Menu>
              <MenuItem>Dashboard</MenuItem>
              <SubMenu title="Components">
                <MenuItem>ABout Link<Link to="/about"/></MenuItem>
                <MenuItem>Component 2</MenuItem>
              </SubMenu>
            </Menu>
            </SidebarContent>
            <SidebarFooter>Footer of Sidebar</SidebarFooter>
    </ProSidebar>
  )
}
