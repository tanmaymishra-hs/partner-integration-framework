import './App.css';
import About from './Components/About';
import Sidebar from './Components/Sidebar';
import {
  Routes,
  Route
} from "react-router-dom";
import FormElement from './Components/FormElement';


const sampleDataAbout = {
  title: 'My Custom About Title',
  para: 'My custom About description',
  listedItems: ['First custom About item', 'second custom About item']
};
const sampleDataAPI = {
  title: 'Custom API title',
  para: 'Custom API description',
  iframelink: 'https://www.hotstar.com'
};

function App() {
  let nameOf  = "X-HS-IAuth"
  let type = "string"
  let placeholder = "X-HS-IAuth"
  let inputArray = [
    {"name": "Content-Type", 
            "type": "text"},
            {"name": "X-HS-IAuth", 
            "type": "text"},
            {"name": "X-HS-Access-Key", 
            "type": "text"}
  ]
  return (
    <div className="main">
      <Sidebar />
      <div className="container">
        <Routes>
            <Route exact path="/" element={<FormElement inputArray = {inputArray}/>}> 
            </Route>
            <Route exact path="/about" element={<About title={sampleDataAbout.title} description={sampleDataAbout.para} listItems={sampleDataAbout.listedItems}></About>}>
            </Route>
        </Routes>
      </div> 
    </div>
  );
}

export default App;
