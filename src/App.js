import './App.css';
import About from './Components/About';
import Sidebar from './Components/Sidebar';
import ErrorBoundary from './Components/ErrorBoundary'
import FormElement from './Components/FormElement';

import {
  Routes,
  Route
} from "react-router-dom";

let config = require("./config.json")
/** TODO:
sub routing
fix Error Boundry
**/
function App() {
  return (
    <div className="main">
     <ErrorBoundary>
      <Sidebar />
      <div className="container">
        <Routes>
            <Route exact path="/" element={ <FormElement obj = {config["config"]["apis"]["getSubscription"]} title = "Get Subscription ID" description = "This Api helps you to get the subscription id."/>}> 
            </Route>
            <Route exact path="/about" element={<About></About>}>
            </Route>
        </Routes>
      </div> 
      </ErrorBoundary>
    </div>
  );
}

export default App;
