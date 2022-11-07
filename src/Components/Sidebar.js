import React from "react";
import SidebarItem from "./SidebarItem"
import sideBarItems from "../config.json"


export default function Sidebar(){
    let items = sideBarItems["config"]["sideBar"]
    return (
        <div className="sidebarClass">
        <div className="imageDiv">
        <img className="imglogo" src="https://img1.hotstarext.com/image/upload/f_auto,q_90,w_256/v1656431456/web-images/logo-d-plus.svg" alt="Disney+Hotstar"></img>
        </div>
          
          { items.map((item, index) => <SidebarItem key={index} item={item} />) }
        </div>
    )
}