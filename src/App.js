import './App.css';
import './config.json'
import './configPublic.json'
import About from './Components/About';
import Sidebar from './Components/Sidebar';
import ErrorBoundary from './Components/ErrorBoundary'
import {Index} from './modules/Index'
import {Index as CreateGuestSubscriptionSyncIndex} from './modules/publicApis/syncApis/createGuestSubscriptionSync/Index'
import {Index as CreateSubscriptionSyncIndex} from './modules/publicApis/syncApis/createSubscriptionSync/Index'
import {Index as MoveSubscriptionIndex} from './modules/publicApis/syncApis/moveSubscription/Index'
import {Index as UpdateUserDetailsSyncIndex} from './modules/publicApis/syncApis/updateUserDetailsSync/Index'
import {Index as CreateGuestSubscriptionAsyncIndex} from './modules/publicApis/asyncApis/createGuestSubscriptionAsync/Index'
import {Index as CreateSubscriptionAsyncIndex} from './modules/publicApis/asyncApis/createSubscriptionAsync/Index'
import {Index as UpdateUserDetailsAsyncIndex} from './modules/publicApis/asyncApis/updateUserDetailsAsync/Index'
import {  
Routes,
  Route
} from "react-router-dom";
import Home from './Components/Home';

let config = require("./config.json");

function App() {
  return (
    <div className="main">
     <ErrorBoundary>
      <Sidebar className="sidebarClass"/>
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Home key="Home"/>}></Route>
          <Route exact path="/about" element={<About key="About"/>}></Route>
          <Route exact path="/admin/create-partner" element={<Index key="CreatePartner" config = {config["config"]["apis"]["create"]}/>}></Route>
          <Route exact path="/admin/delete-partner" element={<Index key="DeletePartner" config = {config["config"]["apis"]["deletePartner"]}/>}></Route>
          <Route exact path="/admin/get-partner" element={<Index key="GetPartner" config = {config["config"]["apis"]["getPartner"]}/>}></Route>
          <Route exact path="/admin/list-partner" element={<Index key="ListPartner" config = {config["config"]["apis"]["listPartners"]}/>}></Route>
          <Route exact path="/admin/update-partner" element={<Index key="UpdatePartner" config = {config["config"]["apis"]["updatePartner"]}/>}></Route>
          <Route exact path ="/public/sync/get-subscription" element={<Index key="GetSubscription" config = {config["config"]["apis"]["getSubscription"]}/>}></Route>
          <Route exact path ="/public/sync/create-subscription" element={<CreateSubscriptionSyncIndex/>}></Route>
          <Route exact path ="/public/sync/create-guest-subscription" element={<CreateGuestSubscriptionSyncIndex/>}></Route>
          <Route exact path ="/public/sync/move-subscription" element={<MoveSubscriptionIndex/>}></Route>
          <Route exact path ="/public/sync/update-subscription" element={<Index key="UpdateSubscription" config={config["config"]["apis"]["updateSubscription"]}/>}></Route>
          <Route exact path ="/public/sync/update-subscription-details" element={<Index key="UpdateSubscriptionDetails" config={config["config"]["apis"]["updateSubscriptionDetails"]}/>}></Route>
          <Route exact path ="/public/sync/update-user-details" element={<UpdateUserDetailsSyncIndex/>}></Route>
          <Route exact path ="/public/async/create-guest-subscription" element={<CreateGuestSubscriptionAsyncIndex/>}></Route>
          <Route exact path ="/public/async/create-subscription" element={<CreateSubscriptionAsyncIndex/>}></Route>
          <Route exact path ="/public/async/update-user-details" element={<UpdateUserDetailsAsyncIndex/>}></Route>
        </Routes>
      </div> 
      </ErrorBoundary>
    </div>
  );
}

export default App;
