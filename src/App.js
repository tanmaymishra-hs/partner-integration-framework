import './App.css';
import About from './Components/About';
import Sidebar from './Components/Sidebar';
import {
  Routes,
  Route
} from "react-router-dom";
import FormElement from './Components/FormElement';

let config = require("./config.json")

function App() {
  return (
    <div className="main">
      <Sidebar className="sidebarClass"/>
      <div className="container">
        <Routes>
            <Route exact path="/" element={<FormElement obj = {config["config"]["apis"]["create"]} title = "Create Partner" description = "This Api helps you to create a partner in the system"/>}> 
            </Route>
            <Route exact path="/about" element={<About></About>}>
            </Route>
        </Routes>
      </div> 
    </div>
  );
}

export default App;
