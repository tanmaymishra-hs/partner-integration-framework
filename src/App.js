import './App.css';
import React, {useState, useEffect} from 'react';
import About from './Components/About';
import Sidebar from './Components/Sidebar';
import ErrorBoundary from './Components/ErrorBoundary'
import {Index} from './modules/Index'
import {Index as CreateSubscriptionSyncIndex} from './modules/publicApis/syncApis/createSubscriptionSync/Index'
import {Index as CreateGuestSubscriptionSyncIndex} from './modules/publicApis/syncApis/createGuestSubscriptionSync/Index'
import {Index as MoveSubscriptionIndex} from './modules/publicApis/syncApis/moveSubscription/Index'
import {Index as UpdateUserDetailsSyncIndex} from './modules/publicApis/syncApis/updateUserDetailsSync/Index'
import {Index as CreateGuestSubscriptionAsyncIndex} from './modules/publicApis/asyncApis/createGuestSubscriptionAsync/Index'
import {Index as CreateSubscriptionAsyncIndex} from './modules/publicApis/asyncApis/createSubscriptionAsync/Index'
import {Index as UpdateUserDetailsAsyncIndex} from './modules/publicApis/asyncApis/updateUserDetailsAsync/Index'
import {Documentation} from './Components/Documentation'
import {  
Routes,
  Route
} from "react-router-dom";
import Home from './Components/Home';

function App() {
  const [config, setConfig] = useState('')
  const [iAuthToken, setiAuthToken] = useState('')
  useEffect(()=>{
    setConfig(window.__APP_CONFIG__);
    setiAuthToken(window.appData['iAuthToken'])
  }, [])
  return (
    <div className="main">
     <ErrorBoundary>
      <Sidebar className="sidebarClass"/>
      <div className="container">
        {config && <Routes>
          <Route exact path="/" element={<Home key="Home"/>}></Route>
          <Route exact path="/about" element={<About key="About"/>}></Route>
          {/* {Object.keys(config['config']['apis']).map((item, index)=> <Route exact path={config['config']['apis'][item]['route']} element={<Index key={config['config']['apis'][item]['title']} config={config['config']['apis'][item]} iAuthToken={config['config']['apis'][item]['category']==="admin"?iAuthToken:null}/>}></Route>)} */}
          {config['config']['apis']['create'] && <Route exact path="/admin/create-partner/test" element={<Index key="CreatePartner" config = {config["config"]["apis"]["create"]} iAuthToken={config['config']['apis']['create']['category']==="admin"?iAuthToken:null}/>}></Route>}
          {config['config']['apis']['deletePartner'] && <Route exact path="/admin/delete-partner/test" element={<Index key="DeletePartner" config = {config["config"]["apis"]["deletePartner"]} iAuthToken={config['config']['apis']['deletePartner']['category']==="admin"?iAuthToken:null}/>}></Route>}
          {config['config']['apis']['getPartner'] && <Route exact path="/admin/get-partner/test" element={<Index key="GetPartner" config = {config["config"]["apis"]["getPartner"]} iAuthToken={config['config']['apis']['getPartner']['category']==="admin"?iAuthToken:null}/>}></Route>}
          {config['config']['apis']['listPartners'] && <Route exact path="/admin/list-partner/test" element={<Index key="ListPartner" config = {config["config"]["apis"]["listPartners"]} iAuthToken={config['config']['apis']['listPartners']['category']==="admin"?iAuthToken:null}/>}></Route>}
          {config['config']['apis']['updatePartner'] && <Route exact path="/admin/update-partner/test" element={<Index key="UpdatePartner" config = {config["config"]["apis"]["updatePartner"]} iAuthToken={config['config']['apis']['updatePartner']['category']==="admin"?iAuthToken:null}/>}></Route>}
          <Route exact path ="/public/sync/get-subscription/test" element={<Index key="GetSubscription" config = {config["config"]["apis"]["getSubscription"]} iAuthToken={config['config']['apis']['getSubscription']['category']==="admin"?iAuthToken:null}/>}></Route>
          <Route exact path ="/public/sync/create-subscription/test" element={<CreateSubscriptionSyncIndex/>}></Route>
          <Route exact path ="/public/sync/create-guest-subscription/test" element={<CreateGuestSubscriptionSyncIndex/>}></Route>
          <Route exact path ="/public/sync/move-subscription/test" element={<MoveSubscriptionIndex/>}></Route>
          <Route exact path ="/public/sync/update-subscription/test" element={<Index key="UpdateSubscription" config={config["config"]["apis"]["updateSubscription"]} iAuthToken={config['config']['apis']['updateSubscription']['category']==="admin"?iAuthToken:null}/>}></Route>
          <Route exact path ="/public/sync/update-subscription-details/test" element={<Index key="UpdateSubscriptionDetails" config={config["config"]["apis"]["updateSubscriptionDetails"]} iAuthToken={config['config']['apis']['updateSubscriptionDetails']['category']==="admin"?iAuthToken:null}/>}></Route>
          <Route exact path ="/public/sync/update-user-details/test" element={<UpdateUserDetailsSyncIndex/>}></Route>
          <Route exact path ="/public/async/create-guest-subscription/test" element={<CreateGuestSubscriptionAsyncIndex/>}></Route>
          <Route exact path ="/public/async/create-subscription/test" element={<CreateSubscriptionAsyncIndex/>}></Route>
          <Route exact path ="/public/async/update-user-details/test" element={<UpdateUserDetailsAsyncIndex/>}></Route>
          <Route exact path ="/public/sync/create-subscription/doc" element={<Documentation></Documentation>}></Route>
  
        </Routes>}
      </div> 
      </ErrorBoundary>
    </div>
  );
}

export default App;
