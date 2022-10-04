import './App.css';
import About from './Components/About';
import APIPageComponent from './Components/APIPageComponent';
import 'react-pro-sidebar/dist/css/styles.css';
import Sidebar from './Components/Sidebar';
import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";


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
  return (
    <>
      <div>
        <h1>Initial App</h1>
          <Sidebar></Sidebar>
          <Routes>
            <Route exact path="/" element={<APIPageComponent title={sampleDataAPI.title} description={sampleDataAPI.para} iframelink={sampleDataAPI.iframelink}></APIPageComponent>}> 
            </Route>
            <Route exact path="/about" element={<About title={sampleDataAbout.title} description={sampleDataAbout.para} listItems={sampleDataAbout.listedItems}></About>}>
            </Route>
          </Routes>
      </div>
    </>
  );
}

export default App;
