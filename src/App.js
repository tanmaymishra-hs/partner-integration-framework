import './App.css';
import React, {useState, useEffect} from 'react';
import About from './Components/About';
import Sidebar from './Components/Sidebar';
import ErrorBoundary from './Components/ErrorBoundary'
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
import {  
Routes,
  Route
} from "react-router-dom";
import Home from './Components/Home';
import {Singleton} from './utils/configSingleton';

function App() {
  const [configJson, setConfigJson] = useState(Singleton.getInstance());
  useEffect(()=>{
    const f = async ()=>{
      const response = await fetch('/getconfig', {method:'GET'});
      console.log('response in App.js is ')
      console.log(response)
      const rjs = await response.json();
      console.log('response json is ');
      console.log(rjs)
      Singleton.getInstance(rjs)
      setConfigJson(rjs)
    }
    f();
  }, [])
  console.log('configJson is')
  console.log(configJson)
  return (
    <div className="main">
     <ErrorBoundary>
      <Sidebar config={configJson?configJson['config']['sideBar']:''} className="sidebarClass"/>
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/about" element={<About/>}></Route>
          <Route exact path="/admin/create-partner" element={<CreatePartnerIndex/>}></Route>
          <Route exact path="/admin/delete-partner" element={<DeletePartnerIndex/>}></Route>
          <Route exact path="/admin/get-partner" element={<GetPartnerIndex/>}></Route>
          <Route exact path="/admin/list-partner" element={<ListPartnerIndex/>}></Route>
          <Route exact path="/admin/update-partner" element={<UpdatePartnerIndex/>}></Route>
          <Route exact path ="/public/sync/get-subscription" element={<GetSubscriptionIndex/>}></Route>
          <Route exact path ="/public/sync/create-subscription" element={<CreateSubscriptionSyncIndex/>}></Route>
          <Route exact path ="/public/sync/create-guest-subscription" element={<CreateGuestSubscriptionSyncIndex/>}></Route>
          <Route exact path ="/public/sync/move-subscription" element={<MoveSubscriptionIndex/>}></Route>
          <Route exact path ="/public/sync/update-subscription" element={<UpdateSubscriptionSyncIndex/>}></Route>
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
