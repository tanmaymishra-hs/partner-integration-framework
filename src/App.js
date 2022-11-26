import './App.css';
import React, {useState, useEffect} from 'react';
import './config.json';
import './configPublic.json';
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

function App() {
  const [config, setConfig] = useState('')
  useEffect(()=>{
    setConfig(window.__APP_CONFIG__);
  }, [])
  return (
    <div className="main">
     <ErrorBoundary>
      <Sidebar className="sidebarClass"/>
      <div className="container">
        {config && <Routes>
          <Route exact path="/" element={<Home key="Home"/>}></Route>
          <Route exact path="/about" element={<About key="About"/>}></Route>
          <Route exact path={config['config']['apis']['create']['route']} element={<Index key="CreatePartner" config = {config["config"]["apis"]["create"]}/>}></Route>
          <Route exact path={config['config']['apis']['deletePartner']['route']} element={<Index key="DeletePartner" config = {config["config"]["apis"]["deletePartner"]}/>}></Route>
          <Route exact path={config['config']['apis']['getPartner']['route']} element={<Index key="GetPartner" config = {config["config"]["apis"]["getPartner"]}/>}></Route>
          <Route exact path={config['config']['apis']['listPartners']['route']} element={<Index key="ListPartner" config = {config["config"]["apis"]["listPartners"]}/>}></Route>
          <Route exact path={config['config']['apis']['updatePartner']['route']} element={<Index key="UpdatePartner" config = {config["config"]["apis"]["updatePartner"]}/>}></Route>
          <Route exact path ={config['config']['apis']['getSubscription']['route']} element={<Index key="GetSubscription" config = {config["config"]["apis"]["getSubscription"]}/>}></Route>
          <Route exact path ={config['config']['apis']['createSubscriptionSync']['route']} element={<CreateSubscriptionSyncIndex/>}></Route>
          <Route exact path ={config['config']['apis']['createGuestSubscriptionSync']['route']} element={<CreateGuestSubscriptionSyncIndex/>}></Route>
          <Route exact path ={config['config']['apis']['moveSubscription']['route']} element={<MoveSubscriptionIndex/>}></Route>
          <Route exact path ={config['config']['apis']['updateSubscription']['route']} element={<Index key="UpdateSubscription" config={config["config"]["apis"]["updateSubscription"]}/>}></Route>
          <Route exact path ={config['config']['apis']['updateSubscriptionDetails']['route']} element={<Index key="UpdateSubscriptionDetails" config={config["config"]["apis"]["updateSubscriptionDetails"]}/>}></Route>
          <Route exact path ={config['config']['apis']['updateUserDetailsSync']['route']} element={<UpdateUserDetailsSyncIndex/>}></Route>
          <Route exact path ={config['config']['apis']['createGuestSubscriptionAsync']['route']} element={<CreateGuestSubscriptionAsyncIndex/>}></Route>
          <Route exact path ={config['config']['apis']['createSubscriptionAsync']['route']} element={<CreateSubscriptionAsyncIndex/>}></Route>
          <Route exact path ={config['config']['apis']['updateUserDetailsAsync']['route']} element={<UpdateUserDetailsAsyncIndex/>}></Route>
        </Routes>}
      </div> 
      </ErrorBoundary>
    </div>
  );
}

export default App;
