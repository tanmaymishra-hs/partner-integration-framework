import './App.css';
import About from './Components/About';
import APIPageComponent from './Components/APIPageComponent';
import 'react-pro-sidebar/dist/css/styles.css';
import Sidebar from './Components/Sidebar';
import {
  createBrowserRouter,
  RouterProvider,
  // Route,
  Link
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

const router = createBrowserRouter([
  {
    path : '/',
    element : (
      <>
        <Sidebar></Sidebar>
        <APIPageComponent title={sampleDataAPI.title} description={sampleDataAPI.para} iframelink={sampleDataAPI.iframelink}></APIPageComponent>
      </>
    )
  },
  {
    path : '/about',
    element : <About title={sampleDataAbout.title} description={sampleDataAbout.para} listItems={sampleDataAbout.listedItems}></About>
  }
]);

function App() {
  return (
    <>
      <div>
        <h1>Initial App</h1>
        <RouterProvider router={router}></RouterProvider>
      </div>
    </>
  );
}

export default App;
