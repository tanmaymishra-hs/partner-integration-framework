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
          {Object.keys(config['config']['apis']).map((item, index)=> <Route exact path={config['config']['apis'][item]['route']} element={<Index key={config['config']['apis'][item]['title']} config={config['config']['apis'][item]}/>}></Route>)}
        </Routes>}
      </div> 
      </ErrorBoundary>
    </div>
  );
}

export default App;
