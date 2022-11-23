import './App.css';
import './config.json'
import './configPublic.json'
import About from './Components/About';
import Sidebar from './Components/Sidebar';
import ErrorBoundary from './Components/ErrorBoundary'
import {Index} from './modules/Index'
import {Index as GetPartnerIndex} from './modules/adminApis/getPartner/Index'
import {Index as ListPartnerIndex} from './modules/adminApis/listPartners/Index'
import {Index as DeletePartnerIndex} from './modules/adminApis/deletePartner/Index'
import {Index as CreatePartnerIndex} from './modules/adminApis/createPartner/Index';
import {Index as UpdatePartnerIndex} from './modules/adminApis/updatePartner/Index'
import {Index as GetSubscriptionIndex} from './modules/publicApis/syncApis/getSubscription/Index'
import {Index as CreateGuestSubscriptionSyncIndex} from './modules/publicApis/syncApis/createGuestSubscriptionSync/Index'
import {Index as CreateSubscriptionSyncIndex} from './modules/publicApis/syncApis/createSubscriptionSync/Index'
import {Index as MoveSubscriptionIndex} from './modules/publicApis/syncApis/moveSubscription/Index'
import {Index as UpdateSubscriptionSyncIndex} from './modules/publicApis/syncApis/updateSubscription/Index'
import {Index as UpdateUserDetailsSyncIndex} from './modules/publicApis/syncApis/updateUserDetailsSync/Index'
import {Index as CreateGuestSubscriptionAsyncIndex} from './modules/publicApis/asyncApis/createGuestSubscriptionAsync/Index'
import {Index as CreateSubscriptionAsyncIndex} from './modules/publicApis/asyncApis/createSubscriptionAsync/Index'
import {Index as UpdateUserDetailsAsyncIndex} from './modules/publicApis/asyncApis/updateUserDetailsAsync/Index'
import {Index as UpdateSubscriptionDetails} from './modules/publicApis/syncApis/updateSubscriptionDetails/Index'
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
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/about" element={<About/>}></Route>
          <Route exact path="/admin/create-partner" element={<Index config = {config["config"]["apis"]["create"]}/>}></Route>
          <Route exact path="/admin/delete-partner" element={<Index config = {config["config"]["apis"]["deletePartner"]}/>}></Route>
          <Route exact path="/admin/get-partner" element={<Index config = {config["config"]["apis"]["getPartner"]}/>}></Route>
          <Route exact path="/admin/list-partner" element={<Index config = {config["config"]["apis"]["listPartners"]}/>}></Route>
          <Route exact path="/admin/update-partner" element={<Index config = {config["config"]["apis"]["updatePartner"]}/>}></Route>
          <Route exact path ="/public/sync/get-subscription" element={<Index config = {config["config"]["apis"]["getSubscription"]}/>}></Route>
          <Route exact path ="/public/sync/create-subscription" element={<CreateSubscriptionSyncIndex/>}></Route>
          <Route exact path ="/public/sync/create-guest-subscription" element={<CreateGuestSubscriptionSyncIndex/>}></Route>
          <Route exact path ="/public/sync/move-subscription" element={<MoveSubscriptionIndex/>}></Route>
          <Route exact path ="/public/sync/update-subscription" element={<Index config={config["config"]["apis"]["updateSubscription"]}/>}></Route>
          <Route exact path ="/public/sync/update-subscription-details" element={<Index config={config["config"]["apis"]["updateSubscriptionDetails"]}/>}></Route>
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
