import './App.css';
import React, {useState, useEffect} from 'react';
import About from './Components/About';
import Sidebar from './Components/Sidebar';
import ErrorBoundary from './Components/ErrorBoundary'
import {Index} from './modules/Index'
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
          {config['config']['apis'] && Object.keys(config['config']['apis']).map((item, index)=> <Route exact path={config['config']['apis'][item]['route']} element={<Index key={config['config']['apis'][item]['title']} config={config['config']['apis'][item]}/>}></Route>)}
        </Routes>}
      </div> 
      </ErrorBoundary>
    </div>
  );
}

export default App;
