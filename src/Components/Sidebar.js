import React, {useState, useEffect, useLayoutEffect} from "react";
import SidebarItem from "./SidebarItem"
import sideBarItems from "../config.json"
import { Singleton } from "../utils/configSingleton";

export default function Sidebar(props){
    // const [config, setConfig] = useState(sideBarItems["config"]["sideBar"]);
    let items = props.config;
    // useEffect(()=>{
    //   const f = async ()=>{
    //     let response = await fetch(process.env.REACT_APP_CONFIGURL, {method:'GET'});
    //     let responseJSON = await response.json();
    //     items = responseJSON['config']['sideBar'];
    //     Singleton.getInstance(responseJSON); 
    //     setConfig(responseJSON['config']['sideBar']);
    //   }
    //   f();
      
    // }, [])
    
    // items = Singleton.getInstance()['config']['sideBar'];
    console.log('Singleton obj is')
    console.log(Singleton.getInstance())
    console.log('inside sideBar items is')
    console.log(items)
    return (
        <div className="sidebarClass">
        <div className="imageDiv">
        <img className="imglogo" src="https://img1.hotstarext.com/image/upload/f_auto,q_90,w_256/v1656431456/web-images/logo-d-plus.svg" alt="Disney+Hotstar"></img>
        </div>
          { items?items.map((item, index) => <SidebarItem key={index} item={item} />):'' }
        </div>
    )
}