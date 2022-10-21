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
      <Sidebar />
      <div className="container">
        <Routes>
            <Route exact path="/" element={<FormElement obj = {config["config"]["apis"]["getSubscription"]} title = "Get Subscription ID" description = "This Api helps you to get the subscription id."/>}> 
            </Route>
            <Route exact path="/about" element={<About></About>}>
            </Route>
        </Routes>
      </div> 
    </div>
  );
}

export default App;
