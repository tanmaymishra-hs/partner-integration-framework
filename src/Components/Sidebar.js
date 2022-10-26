import SidebarItem from "./SidebarItem"
import sideBarItems from "../config.json"


export default function Sidebar(){
    let items = sideBarItems["config"]["sideBar"]
    return (
        <div className="sidebar">
          { items.map((item, index) => <SidebarItem key={index} item={item} />) }
        </div>
    )
}