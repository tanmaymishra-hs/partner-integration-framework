import React, {useState, useEffect, useLayoutEffect} from "react";
import SidebarItem from "./SidebarItem"

export default function Sidebar(){
    const [config, setConfig] = useState('');
    useEffect(()=>{
      setConfig(window.__APP_CONFIG__)
    }, [])
  
    return (
      
        <div className="sidebarClass">
        <div className="imageDiv">
        <img className="imglogo" src="https://img1.hotstarext.com/image/upload/f_auto,q_90,w_256/v1656431456/web-images/logo-d-plus.svg" alt="Disney+Hotstar"></img>
        </div>
          {config && config['config']['sideBar'].map((item, index) => <SidebarItem key={index} item={item} />) }
        </div>
    )
}