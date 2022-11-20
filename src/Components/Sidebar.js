import React, {useState, useEffect, useLayoutEffect} from "react";
import SidebarItem from "./SidebarItem"
import sideBarItems from "../config.json"
import { Singleton } from "../utils/configSingleton";
// import { Singleton } from "../utils/configSingleton";

export default function Sidebar(props){
    const [config, setConfig] = useState(sideBarItems["config"]["sideBar"]);
    let items;
    useEffect(()=>{
      const f = async ()=>{
        console.log("inside useEffect in sidebar")
        let response = await fetch(process.env.REACT_APP_CONFIGURL, {method:'GET'});
        let responseJSON = await response.json();
        console.log('response in JSOn is ')
        console.log(responseJSON)
        items = responseJSON['config']['sideBar'];
        console.log('items is updated to')
        console.log(items)
        Singleton.getInstance(responseJSON); 
        setConfig(responseJSON['config']['sideBar']);
        console.log("inside useEffect in sidebar after response")
        
      }
      f();
      
    }, [])
    
    // console.log(`config is ${Singleton.getInstance()}`)
    // let items = Singleton.getInstance()["config"]["sideBar"]
    
    items = config;
    console.log(items)
    return (
        <div className="sidebarClass">
        <div className="imageDiv">
        <img className="imglogo" src="https://img1.hotstarext.com/image/upload/f_auto,q_90,w_256/v1656431456/web-images/logo-d-plus.svg" alt="Disney+Hotstar"></img>
        </div>
          { items.map((item, index) => <SidebarItem key={index} item={item} />) }
        </div>
    )
}